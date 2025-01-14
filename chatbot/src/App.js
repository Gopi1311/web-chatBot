import React, { useState } from 'react';
import { MessageSquareCode } from 'lucide-react';
import {  CDPs } from './types';
import { ChatBotMessage } from './component/ChatBotMessage';
import { ChatBotInput } from './component/ChatBotInput';
import { generateResponse } from './chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'bot',
      content: `Hello! I'm your CDP Assistant. I can help you with questions about:

${CDPs.map(cdp => `- **${cdp.name}**: ${cdp.description}`).join('\n')}

How can I assist you today?`,
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = (content) => {
    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    const botResponse = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: generateResponse(content),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      <header className="bg-secondary border-bottom">
        <div className="container d-flex align-items-center py-3">
          <div className="d-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
          <MessageSquareCode className="text-white" size={24} />
          </div>
          <div className="ms-3">
            <h1 className="h5"><b>CDP Support Assistant</b></h1>
            <p className="mb-0 text-dark small">Feel free to ask me anything about Segment, mParticle, Lytics, or Zeotap</p>
          </div> 
        </div>
      </header>
      <div className="flex-fill overflow-auto ">
        <div className="container py-4 ">
          {messages.map(message => (
            <ChatBotMessage key={message.id} message={message} />
          ))}
        </div>
      </div>
      <ChatBotInput onSendMessage={handleSendMessage}  />
    </div>
  );
}

export default App;