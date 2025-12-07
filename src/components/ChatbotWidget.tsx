import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './ChatbotWidget.module.css';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getRagResponse = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      return { text: data.response, sender: 'bot' as const };
    } catch (error) {
      console.error("Error fetching RAG response:", error);
      return { text: "Sorry, I'm having trouble connecting to my brain. Please try again later.", sender: 'bot' as const };
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = { text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, newUserMessage]);

    const query = inputValue;
    setInputValue('');

    const botResponse = await getRagResponse(query);
    setMessages(prev => [...prev, botResponse]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

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
            {messages.length === 0 && !isLoading && (
              <div className={styles.noMessages}>Ask me anything about the book!</div>
            )}

            {messages.map((message, index) => (
              <div key={index} className={clsx(styles.chatMessage, styles[message.sender])}>
                {message.text}
              </div>
            ))}

            {isLoading && (
              <div className={clsx(styles.chatMessage, styles.bot)}>
                <em>Typing...</em>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
          <form className={styles.chatInputForm} onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question..."
              className={styles.chatInputField}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
