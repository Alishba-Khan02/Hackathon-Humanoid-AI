import React from 'react';
import Layout from '@theme-original/Layout'; // This imports the original Layout component
import ChatbotWidget from '@site/src/components/ChatbotWidget';

export default function LayoutWrapper(props): JSX.Element {
  return (
    <>
      <Layout {...props}>
        {props.children}
      </Layout>
      <ChatbotWidget />
    </>
  );
}