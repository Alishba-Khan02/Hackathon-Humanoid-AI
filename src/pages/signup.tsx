// src/pages/signup.tsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '@theme/Layout';
import styles from './auth.module.css';
import Link from '@docusaurus/Link';
import Modal from '../components/Modal'; // Import the Modal component
import { useHistory } from '@docusaurus/router';

export default function SignupPage() {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [languages, setLanguages] = useState('');
  const [os, setOs] = useState('');
  const [hardware, setHardware] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShowSuccessModal(false);

    const userData = {
      name,
      email,
      password,
      background: {
        software: { languages, os },
        hardware: { experience: hardware },
      },
    };

    const success = await signup(userData);
    if (success) {
      setShowSuccessModal(true);
      // Clear the form
      setName('');
      setEmail('');
      setPassword('');
      setLanguages('');
      setOs('');
      setHardware('');
    } else {
      setError('Signup failed. The email might already be in use.');
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    history.push('/signin');
  };

  return (
    <Layout title="Signup">
      <Modal 
        show={showSuccessModal} 
        onClose={handleModalClose}
        title="✅ Signup Successful!"
      >
        <p>Your account has been created. Please proceed to the sign-in page to log in.</p>
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <button className="button button--primary" onClick={handleModalClose}>
            Go to Sign In
          </button>
        </div>
      </Modal>

      <div className={styles.authContainer}>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <h2>Create Your Account</h2>
          {error && <p className={styles.error}>{error}</p>}
          
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          
          <hr />
          <h3>Your Background</h3>
          <p>This helps us personalize your learning experience.</p>
          
          <label htmlFor="languages">Programming Languages Known</label>
          <select id="languages" value={languages} onChange={(e) => setLanguages(e.target.value)}>
            <option value="">Select Language(s)</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Rust">Rust</option>
            <option value="Go">Go</option>
            <option value="Java">Java</option>
            <option value="Other">Other</option>
          </select>
          
          <label htmlFor="os">Operating Systems Used</label>
          <select id="os" value={os} onChange={(e) => setOs(e.target.value)}>
            <option value="">Select OS</option>
            <option value="Linux (Ubuntu)">Linux (Ubuntu)</option>
            <option value="Windows">Windows</option>
            <option value="macOS">macOS</option>
            <option value="ROS (Robot OS)">ROS (Robot OS)</option>
            <option value="Other">Other</option>
          </select>
          
          <label htmlFor="hardware">Hardware Experience</label>
          <select id="hardware" value={hardware} onChange={(e) => setHardware(e.target.value)}>
            <option value="">Select Hardware Experience</option>
            <option value="Arduino">Arduino</option>
            <option value="Raspberry Pi">Raspberry Pi</option>
            <option value="NVIDIA Jetson">NVIDIA Jetson</option>
            <option value="Custom Robotics">Custom Robotics</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit">Sign Up</button>
          
          <div className={styles.authLink}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
