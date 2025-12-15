// src/components/PersonalizedContent.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Heading from '@theme/Heading';
import styles from './PersonalizedContent.module.css';

const PersonalizedContent: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className={styles.personalizedContentContainer}>
        <Heading as="h2">Personalized Content</Heading>
        <p>Please sign in to see content tailored to your background.</p>
        <div className={styles.callToAction}>
          <a href="/signin" className="button button--primary margin-right--sm">Sign In</a>
          <a href="/signup" className="button button--secondary">Sign Up</a>
        </div>
      </div>
    );
  }

  // Use optional chaining as software_background or hardware_background might be null or undefined
  const softwareLanguages = user.software_background?.languages || '';
  const softwareOS = user.software_background?.os || '';
  const hardwareExperience = user.hardware_background?.experience || '';

  const renderContent = () => {
    // Basic personalization logic based on user's background
    // This will be replaced by Gemini-powered personalization later
    let content = [];

    // Software background personalization
    if (softwareLanguages.toLowerCase().includes('python') || softwareOS.toLowerCase().includes('linux')) {
      content.push(
        <div key="python-linux-ai" className={styles.contentBlock}>
          <Heading as="h3">Advanced AI with Python & Linux</Heading>
          <p>Since you're proficient in Python and familiar with Linux, we recommend diving deep into advanced AI topics like reinforcement learning for robotics using ROS 2 on Linux environments. Explore our tutorials on custom ROS 2 package development.</p>
          <ul>
            <li><a href="/docs/modules/module3-ai-robot-brain">Module 3: AI Robot Brain - Deep Dive</a></li>
            <li><a href="/docs/modules/navigation_basics">ROS 2 Navigation Stack Customization</a></li>
          </ul>
        </div>
      );
    } else {
      content.push(
        <div key="beginner-software" className={styles.contentBlock}>
          <Heading as="h3">Getting Started with Robotics Software</Heading>
          <p>It looks like you're new to some of the software technologies used in robotics. We suggest starting with our introductory modules on Python programming for robotics and basic Linux commands.</p>
          <ul>
            <li><a href="/docs/setup/workstation_env">Setting Up Your Robotics Workstation (Python/ROS 2)</a></li>
            <li><a href="/docs/modules/module1-robotic-nervous-system">Module 1: Robotic Nervous System - Foundations</a></li>
          </ul>
        </div>
      );
    }

    // Hardware background personalization
    if (hardwareExperience.toLowerCase().includes('jetson') || hardwareExperience.toLowerCase().includes('raspberry pi')) {
      content.push(
        <div key="edge-hardware" className={styles.contentBlock}>
          <Heading as="h3">Edge AI Hardware Deployment</Heading>
          <p>Your experience with edge hardware like Jetson and Raspberry Pi is valuable! Check out our specialized content on optimizing AI models for embedded systems and deploying ROS 2 nodes to these platforms.</p>
          <ul>
            <li><a href="/docs/modules/jetson_deployment">Jetson Deployment: Cross-Compilation</a></li>
            <li><a href="/docs/hardware/edge-kits">Advanced Edge Kits for Robotics</a></li>
          </ul>
        </div>
      );
    } else {
      content.push(
        <div key="hardware-intro" className={styles.contentBlock}>
          <Heading as="h3">Introduction to Robotics Hardware</Heading>
          <p>New to robotics hardware? Start here! Our guides cover the basics of microcontrollers, single-board computers, and sensors essential for building and controlling robots.</p>
          <ul>
            <li><a href="/docs/hardware/workstations">Understanding Robotics Workstations</a></li>
            <li><a href="/docs/modules/module1-robotic-nervous-system">Hardware-Software Interaction Basics</a></li>
          </ul>
        </div>
      );
    }

    // AI Tools experience (using software languages as proxy for now)
    if (softwareLanguages.toLowerCase().includes('ai') || softwareLanguages.toLowerCase().includes('ml') || softwareLanguages.toLowerCase().includes('tensorflow') || softwareLanguages.toLowerCase().includes('pytorch')) { 
        content.push(
            <div key="ai-tools-advanced" className={styles.contentBlock}>
                <Heading as="h3">Leveraging AI Tools for Robotics</Heading>
                <p>With your AI tool experience, you'll find our sections on integrating advanced AI frameworks, like Visual Language-Action (VLA) models and custom LLM interfaces, particularly insightful.</p>
                <ul>
                    <li><a href="/docs/modules/module4-vla">Module 4: Vision-Language-Action (VLA)</a></li>
                    <li><a href="/docs/modules/conversational_ai_basics">Conversational AI for Humanoids</a></li>
                </ul>
            </div>
        );
    } else {
        content.push(
            <div key="ai-tools-intro" className={styles.contentBlock}>
                <Heading as="h3">Foundations of AI for Robotics</Heading>
                <p>If you're looking to build your expertise in AI tools for robotics, begin with our foundational guides on machine learning concepts and their application in robot perception and control.</p>
                <ul>
                    <li><a href="/docs/modules/module3-ai-robot-brain">Module 3: AI Robot Brain - Introduction</a></li>
                </ul>
            </div>
        );
    }

    return content;
  };

  return (
    <div className={styles.personalizedContentContainer}>
      <Heading as="h2">Welcome, {user.name}!</Heading>
      <p>Here's some content personalized for your background:</p>
      {renderContent()}
    </div>
  );
};

export default PersonalizedContent;
