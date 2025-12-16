// src/contexts/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the shape of the user object
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

// Define the shape of the context
interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Centralized backend URL
const BACKEND_URL = 'https://ak889-complete-backend.hf.space';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('authUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });

  const signin = async (email, password) => {
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

  const signup = async (userData) => {
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

  const value = { user, signin, signup, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
