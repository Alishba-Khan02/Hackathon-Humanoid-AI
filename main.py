# main.py
import os
import json
import logging
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from google import genai

# --- Initial Setup ---
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
load_dotenv()

# --- Gemini API Key ---
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not set in .env")

# --- Configure Gemini client ---
client = genai.Client(api_key=GEMINI_API_KEY)

app = FastAPI()

# --- CORS Middleware ---
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Dummy Database for Better Auth ---
DB_FILE = "dummy_users.json"

def _load_db():
    if os.path.exists(DB_FILE):
        with open(DB_FILE, 'r') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return {"auth": {}, "profiles": {}}
    return {"auth": {}, "profiles": {}}

def _save_db(data):
    with open(DB_FILE, 'w') as f:
        json.dump(data, f, indent=2)

# --- Better Auth Dummy Client ---
class BetterAuthClient:
    def signup(self, name: str, email: str, password: str, background: dict):
        db = _load_db()
        if email in db["auth"]:
            raise ValueError(f"User with email '{email}' already exists.")
        db["auth"][email] = {"password": password}
        db["profiles"][email] = {
            "name": name,
            "email": email,
            "software_background": background.get("software"),
            "hardware_background": background.get("hardware"),
            "structured_background": background.get("structured"),
        }
        _save_db(db)
        return {"success": True, "user_id": email}

    def signin(self, email: str, password: str):
        db = _load_db()
        user_auth_info = db["auth"].get(email)
        if user_auth_info and user_auth_info["password"] == password:
            user_profile = db["profiles"].get(email)
            return {"success": True, "profile": user_profile}
        return {"success": False, "error": "Invalid email or password"}

better_auth_client = BetterAuthClient()

# --- Pydantic Models for Auth ---
class UserSignup(BaseModel):
    name: str
    email: str
    password: str
    background: dict

class UserSignin(BaseModel):
    email: str
    password: str

# --- Auth Endpoints ---
@app.post("/signup")
def signup_user(user_data: UserSignup):
    return better_auth_client.signup(user_data.name, user_data.email, user_data.password, user_data.background)

@app.post("/signin")
def signin_user(user_data: UserSignin):
    result = better_auth_client.signin(email=user_data.email, password=user_data.password)
    if result["success"]:
        return {"message": "Signin successful!", "user": result["profile"]}
    raise HTTPException(status_code=401, detail="Invalid credentials")

# --- Gemini-based Chatbot ---

# Chat request model
class ChatQuery(BaseModel):
    query: str

# Example documents for book content
documents = {
    1: (
        "Module 1: Robotic Nervous System explains how robots perceive, process, and act. "
        "It includes sensors such as vision, touch, and proprioception; a central processing unit "
        "to process information and make decisions; and actuators to perform actions. "
        "Information flows in a closed loop: sensing → processing → decision → action → feedback. "
        "Sub-systems include reflexive responses, deliberative planning, and learning capabilities. "
        "Applications include industrial robotics, humanoid robots, autonomous vehicles, and service robots. "
        "Challenges include sensor fusion, learning in dynamic environments, and energy-efficient operation."
    ),
    2: (
        "Module 2: Digital Twins are virtual replicas of physical robots or systems. "
        "They enable simulation, testing, and optimization before applying changes to real-world systems. "
        "Digital Twins replicate sensors, actuators, and control algorithms in a simulated environment. "
        "They allow predictive maintenance, performance optimization, fault detection, and AI training. "
        "Applications include robotics development, industrial automation, and research. "
        "Digital Twins help reduce cost, risk, and downtime."
    ),
    3: (
        "Module 3: AI Robot Brain focuses on decision-making and learning architectures. "
        "It integrates neural networks, symbolic reasoning, and reinforcement learning to enable adaptive behavior. "
        "The AI Brain allows robots to plan actions, learn from experience, and respond to changing environments. "
        "It combines perception, memory, reasoning, and action planning to achieve intelligent behavior. "
        "Example tasks include navigation, manipulation, interaction with humans, and autonomous problem-solving."
    ),
    4: (
        "Module 4: Vision-Language-Action (VLA) explains how robots combine visual perception, "
        "language understanding, and action execution to perform complex tasks. "
        "Visual perception covers object recognition, scene understanding, and spatial awareness. "
        "Language understanding enables the robot to interpret human commands and context. "
        "Action execution includes motion planning, manipulation, and interaction. "
        "Applications include household assistance, industrial automation, and research in multimodal AI. "
        "Challenges involve real-time integration, ambiguity in language, dynamic environments, "
        "and ensuring safe human-robot interaction."
    ),
    0: (
        "This book is about Physical AI & Humanoid Robotics. "
        "The assistant can also respond to greetings and general polite conversation."
    )
}

# Simple greeting detection
greetings = ["hi", "hello", "hey", "good morning", "good afternoon"]

def retrieve_context(query: str, top_k: int = 4):
    return [documents[i] for i in range(1, min(top_k + 1, len(documents) + 1))]

# Chat endpoint
@app.post("/chat")
def chat(chat_query: ChatQuery):
    user_input = chat_query.query.strip().lower()

    # Greeting check
    if user_input in greetings:
        return {"response": "Hello! How can I help you with the Humanoid AI book today?"}

    # Retrieve context
    context = retrieve_context(chat_query.query)

    # Build Gemini prompt
    prompt = (
        "You are a helpful assistant for the 'Physical AI & Humanoid Robotics' book. "
        "Answer the user's question based on the provided context in a long, detailed, and comprehensive way. "
        "Include examples where possible. If the question is unrelated to the context, respond politely and inform the user.\n\n"
        "Context:\n" + "\n".join(context) +
        "\n\nQuestion: " + chat_query.query
    )

    try:
        chat_session = client.chats.create(model="gemini-2.5-flash")
        response = chat_session.send_message(prompt)
        return {"response": response.text}
    except Exception as e:
        return {"response": f"Error generating response: {str(e)}"}
