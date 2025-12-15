# /better_auth_client.py
import json
import os

# --- Dummy Database using JSON file for persistence ---
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

class BetterAuthClient:
    """
    A dummy client to simulate the Better Auth service using a JSON file for storage.
    """

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
        
        print(f"[Better Auth Mock] Signed up user: {email}")
        return {"success": True, "user_id": email}

    def signin(self, email: str, password: str):
        db = _load_db()
        user_auth_info = db["auth"].get(email)
        
        if user_auth_info and user_auth_info["password"] == password:
            print(f"[Better Auth Mock] Signed in user: {email}")
            user_profile = db["profiles"].get(email)
            return {"success": True, "profile": user_profile}
        
        print(f"[Better Auth Mock] Failed signin for user: {email}")
        return {"success": False, "error": "Invalid email or password"}

# Singleton instance of our dummy client
better_auth_client = BetterAuthClient()
