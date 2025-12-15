# /auth_backend.py
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import logging

# Import the dummy clients and agents
from better_auth_client import better_auth_client
from profile_agent import profile_agent

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# --- CORS Middleware ---
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models for Data Validation ---

class SoftwareBackground(BaseModel):
    languages: str
    os: str

class HardwareBackground(BaseModel):
    experience: str

class UserBackground(BaseModel):
    software: SoftwareBackground
    hardware: HardwareBackground

class UserSignup(BaseModel):
    name: str
    email: str
    password: str
    background: UserBackground

class UserSignin(BaseModel):
    email: str
    password: str
    
# --- API Endpoints ---

@app.post("/signup")
def signup_user(user_data: UserSignup):
    logger.info(f"Received signup request for email: {user_data.email}")
    try:
        structured_background = profile_agent.analyze_background(
            software_text=user_data.background.software.languages,
            hardware_text=user_data.background.hardware.experience,
        )
        
        user_profile_data = user_data.dict()
        user_profile_data["background"]["structured"] = structured_background

        result = better_auth_client.signup(
            name=user_data.name,
            email=user_data.email,
            password=user_data.password,
            background=user_profile_data["background"]
        )
        if result["success"]:
            logger.info(f"Signup successful for email: {user_data.email}")
            return {"message": "Signup successful!"}
    except ValueError as e:
        logger.error(f"Signup failed for {user_data.email}: {e}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"An unexpected error occurred during signup: {e}")
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {e}")
    
    return result

@app.post("/signin")
def signin_user(user_data: UserSignin):
    logger.info(f"Received signin request for email: {user_data.email}")
    try:
        result = better_auth_client.signin(
            email=user_data.email,
            password=user_data.password
        )
        if result["success"]:
            logger.info(f"Signin successful for email: {user_data.email}")
            return {"message": "Signin successful!", "user": result["profile"]}
        else:
            logger.warning(f"Failed signin attempt for email: {user_data.email}")
            raise HTTPException(status_code=401, detail="Invalid email or password")
    except Exception as e:
        logger.error(f"An unexpected error occurred during signin: {e}")
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {e}")
