import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MessageType } from '../types';
import { getHealthResponse } from '../services/healthService';

interface HealthContextType {
  messages: MessageType[];
  isTyping: boolean;
  sendMessage: (content: string) => void;
  clearMessages: () => void;
}

const HealthContext = createContext<HealthContextType | undefined>(undefined);

export const useHealth = () => {
  const context = useContext(HealthContext);
  if (!context) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
};

interface HealthProviderProps {
  children: ReactNode;
}

export const HealthProvider: React.FC<HealthProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: "Hello! I'm your health assistant. How can I help you today? You can describe your symptoms or ask questions about health concerns.",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: MessageType = {
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      // Simulate network delay for AI response
      setTimeout(async () => {
        const response = await getHealthResponse(content);
        
        const aiMessage: MessageType = {
          content: response.content,
          sender: 'ai',
          timestamp: new Date(),
          recommendations: response.recommendations,
          disclaimer: response.disclaimer,
        };
        
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    } catch (error) {
      console.error('Error getting health response:', error);
      setMessages(prev => [
        ...prev,
        {
          content: "I'm sorry, I encountered an error processing your request. Please try again.",
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }
  };

  const clearMessages = () => {
    setMessages([
      {
        content: "Hello! I'm your health assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <HealthContext.Provider value={{ messages, isTyping, sendMessage, clearMessages }}>
      {children}
    </HealthContext.Provider>
  );
};