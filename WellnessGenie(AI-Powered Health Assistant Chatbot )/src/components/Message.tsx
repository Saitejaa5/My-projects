import React from 'react';
import { MessageType } from '../types';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isAI = message.sender === 'ai';
  
  return (
    <div className={`flex items-start space-x-2 ${isAI ? '' : 'flex-row-reverse space-x-reverse'}`}>
      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
        isAI ? 'bg-blue-100' : 'bg-green-100'
      }`}>
        <span className={isAI ? 'text-blue-500 font-semibold' : 'text-green-500 font-semibold'}>
          {isAI ? 'AI' : 'You'}
        </span>
      </div>
      
      <div className={`max-w-[80%] px-4 py-3 rounded-lg ${
        isAI ? 'bg-gray-100 text-gray-800' : 'bg-blue-500 text-white'
      }`}>
        {message.content.split('\n').map((text, i) => (
          <React.Fragment key={i}>
            {text}
            {i < message.content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
        
        {message.recommendations && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <h4 className="font-medium mb-1">Recommendations:</h4>
            <ul className="list-disc list-inside space-y-1">
              {message.recommendations.map((rec, index) => (
                <li key={index} className="text-sm">{rec}</li>
              ))}
            </ul>
          </div>
        )}
        
        {isAI && message.disclaimer && (
          <div className="mt-2 text-xs text-gray-500 italic">
            {message.disclaimer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;