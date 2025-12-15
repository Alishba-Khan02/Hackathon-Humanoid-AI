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

// Create the context with a default value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize user state from localStorage on component mount
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
      const response = await fetch('http://localhost:8000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        // Store user in localStorage on successful sign-in
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
      const response = await fetch('http://localhost:8000/signup', {
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
    // Remove user from localStorage on sign-out
    localStorage.removeItem('authUser');
  };

  const value = { user, signin, signup, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook for easy access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
