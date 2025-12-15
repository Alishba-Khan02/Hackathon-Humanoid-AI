import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import PersonalizedContent from '../components/PersonalizedContent'; // Import the new component
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { user } = useAuth(); // Use the auth hook

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {user && ( // ✅ Show button only if user is logged in
            <Link
              className="button button--secondary button--lg"
              to="docs/contributing">
              Start Exploring 🤖
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Explore the comprehensive course documentation for Physical AI and Humanoid Robotics, covering simulation, real-world deployment, and intelligent interaction."
    >
      <HomepageHeader />
      <main>
        <PersonalizedContent /> {/* Render the personalized content */}
      </main>
    </Layout>
  );
}
