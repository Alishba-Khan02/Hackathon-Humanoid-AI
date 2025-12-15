// src/pages/signin.tsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '@theme/Layout';
import styles from './auth.module.css';
import { Redirect, useHistory } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import Modal from '../components/Modal'; // Import the Modal component

export default function SigninPage() {
  const { signin, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const success = await signin(email, password);
    if (!success) {
      setError('Invalid email or password.');
    } else {
      setShowSuccessModal(true);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    history.push('/');
  };

  if (user && !showSuccessModal) { // Prevent redirection while modal is open
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Signin">
      <Modal 
        show={showSuccessModal} 
        onClose={handleModalClose}
        title="✅ Sign In Successful!"
      >
        <p>Welcome back! You can now access all personalized content.</p>
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <button className="button button--primary" onClick={handleModalClose}>
            OK
          </button>
        </div>
      </Modal>

      <div className={styles.authContainer}>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <h2>Sign In</h2>
          {error && <p className={styles.error}>{error}</p>}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit">Sign In</button>
          
          <div className={styles.authLink}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
