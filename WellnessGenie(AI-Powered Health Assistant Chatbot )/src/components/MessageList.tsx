import React from 'react';
import { MessageType } from '../types';
import Message from './Message';

interface MessageListProps {
  messages: MessageType[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 py-10 text-center">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg\" className="h-10 w-10 text-blue-500\" fill="none\" viewBox="0 0 24 24\" stroke="currentColor">
            <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-800">Start a conversation</h3>
        <p className="text-gray-600 max-w-sm">
          Describe your symptoms, ask about a health condition, or request advice about healthy habits.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;