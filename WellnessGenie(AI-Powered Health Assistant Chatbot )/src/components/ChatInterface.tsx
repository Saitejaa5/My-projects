import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus } from 'lucide-react';
import { useHealth } from '../context/HealthContext';
import MessageList from './MessageList';
import QuickActions from './QuickActions';

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const { sendMessage, messages, isTyping } = useHealth();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleQuickAction = (action: string) => {
    sendMessage(action);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[75vh] max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 bg-blue-500 text-white">
        <h2 className="text-xl font-semibold">Health Assistant</h2>
        <p className="text-sm opacity-90">Describe your symptoms or health concerns</p>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        <MessageList messages={messages} />
        {isTyping && (
          <div className="flex items-start space-x-2 animate-pulse">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-500 font-semibold">AI</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="p-4 border-t">
        <QuickActions onSelect={handleQuickAction} />
        
        <form onSubmit={handleSubmit} className="mt-4 flex items-center space-x-2">
          <div className="flex-grow relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your health concern..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <button 
              type="button" 
              className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition"
            >
              <Plus size={20} />
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim()}
          >
            <Send size={20} />
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          Not a substitute for professional medical advice. Seek immediate medical attention for emergencies.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;