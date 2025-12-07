import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './ChatbotWidget.module.css';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getRagResponse = async (query: string) => {
    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      return { text: data.response, sender: 'bot' as const };
    } catch (error) {
      console.error("Error fetching RAG response:", error);
      return { text: "Sorry, I'm having trouble connecting to my brain.", sender: 'bot' as const };
    }
  };

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = { text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, newUserMessage]);

    // Show Typing... immediately
    const typingMessage = { text: "Typing...", sender: 'bot' as const };
    setMessages(prev => [...prev, typingMessage]);

    const botResponse = await getRagResponse(inputValue);

    // Replace Typing... with actual response
    setMessages(prev => prev.map(msg => msg.text === "Typing..." ? botResponse : msg));

    setInputValue('');
  };

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => { scrollToBottom(); }, [messages]);

  return (
    <>
      <button className={styles.chatButton} onClick={toggleChat}>
        {isOpen ? '❌' : '💬'}
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>RAG Chatbot</h3>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.length === 0 ? (
              <div className={styles.noMessages}>Ask me anything about the book!</div>
            ) : messages.map((message, index) => (
              <div key={index} className={clsx(styles.chatMessage, styles[message.sender])}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className={styles.chatInputForm} onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question..."
              className={styles.chatInputField}
            />
            <button type="submit" className={styles.sendButton}>Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
