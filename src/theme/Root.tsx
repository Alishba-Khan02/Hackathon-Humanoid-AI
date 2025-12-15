import React from 'react';
import { AuthProvider, useAuth } from '../contexts/AuthContext'; // ✅ import useAuth
import AuthStatusDisplay from '@site/src/components/AuthStatusDisplay';
import ChatbotWidget from '@site/src/components/ChatbotWidget';
import { useLocation, Redirect } from '@docusaurus/router';

// Protected route logic
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth(); // ✅ now defined
  const location = useLocation();

  const isAuthPage = location.pathname.includes('/signin') || location.pathname.includes('/signup');

  if (!user && !isAuthPage) {
    return <Redirect to="/signup" />;
  }

  return <>{children}</>;
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
      <AuthStatusDisplay />
      <ChatbotWidget />
    </AuthProvider>
  );
}
