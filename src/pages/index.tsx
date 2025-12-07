import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; // Removed
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
         <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/diagram_navigation.svg" className={styles.featureSvg} alt="Robot Navigation" />
            </div>
            <Heading as="h3" className="text--center">Robot Navigation</Heading>
            <p className="text--center">
              Explore advanced locomotion and pathfinding algorithms, enabling robots to autonomously
              traverse complex environments in both simulation and the real world.
            </p>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/diagram_manipulation.svg" className={styles.featureSvg} alt="Object Manipulation" />
            </div>
            <Heading as="h3" className="text--center">Object Manipulation</Heading>
            <p className="text--center">
              Learn about robot kinematics, inverse kinematics, and grasping strategies to allow
              humanoid robots to interact with and manipulate physical objects.
            </p>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/diagram_conversation.svg" className={styles.featureSvg} alt="Conversational AI" />
            </div>
            <Heading as="h3" className="text--center">Conversational AI</Heading>
            <p className="text--center">
              Integrate Large Language Models (LLMs) to enable natural language communication
              and higher-level reasoning for seamless human-robot interaction.
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/modules/conversational_ai_basics">
            Start Exploring 🤖
          </Link>
        </div>
      </div>
    </header>
  );
}

function CustomHomepageContent() {
  return (
    <section className={styles.features}>
      
    </section>
  );
}


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Explore the comprehensive course documentation for Physical AI and Humanoid Robotics, covering simulation, real-world deployment, and intelligent interaction.">
      <HomepageHeader />
      <main>
        <CustomHomepageContent />
      </main>
    </Layout>
  );
}
