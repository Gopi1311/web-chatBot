
import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { marked } from 'marked';

export const ChatBotMessage = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`d-flex gap-3 p-3 ${isBot ? 'bg-light' : ''} rounded-3`}>
      <div className={`d-flex justify-content-center align-items-center rounded-circle ${isBot ? 'bg-primary text-white' : 'bg-secondary text-white'}`} style={{ width: '32px', height: '32px' }}>
        {isBot ? <Bot size={20}  /> : <MessageCircle size={20} />}
      </div>
      <div className="flex-grow-1">
        <div className="fw-medium mb-1">{isBot ? 'CDP Assistant' : 'You'}</div>
        <div 
          className="text-dark"
          dangerouslySetInnerHTML={{ 
            __html: marked(message.content, { breaks: true }) 
          }}
        />
      </div>
    </div>
  );
};