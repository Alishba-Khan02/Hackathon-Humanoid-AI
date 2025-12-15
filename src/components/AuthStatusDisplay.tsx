import React from 'react';
import { useAuth } from '@site/src/contexts/AuthContext';
import Link from '@docusaurus/Link';

const AuthStatusDisplay: React.FC = () => {
  const { user, signout } = useAuth();

  const fixedStyle: React.CSSProperties = {
    position: 'fixed',
    top: '10px',
    right: '100px',
    zIndex: 1000,
    backgroundColor: 'var(--ifm-background-color)',
    padding: '8px 15px',
    borderRadius: 'var(--ifm-border-radius)',
    boxShadow: 'var(--ifm-shadow-lw)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'var(--ifm-font-color-base)',
  };

  if (!user) {
    return null; // The static links in docusaurus.config.ts will be shown
  }

  return (
    <div style={fixedStyle}>
      <span>Welcome, {user.name}</span>
      <button 
        onClick={signout} 
        className="button button--primary button--sm">
        Sign Out
      </button>
    </div>
  );
};

export default AuthStatusDisplay;