// src/contexts/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  software_background: {
    languages: string;
    os: string;
  };
  hardware_background: {
    experience: string;
  };
}

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ✅ Change this depending on environment
// For local testing:
const LOCAL_BACKEND_URL = 'http://127.0.0.1:8000';
// For deployed Hugging Face backend:
const DEPLOY_BACKEND_URL = 'https://ak889-auth-backend.hf.space';

// Automatically choose backend based on environment
const BACKEND_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? LOCAL_BACKEND_URL
  : DEPLOY_BACKEND_URL;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('authUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const signin = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${BACKEND_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem('authUser', JSON.stringify(data.user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Signin failed:', error);
      return false;
    }
  };

  const signup = async (userData: any): Promise<boolean> => {
    try {
      const response = await fetch(`${BACKEND_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return response.ok;
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return <AuthContext.Provider value={{ user, signin, signup, signout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
