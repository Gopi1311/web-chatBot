
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ChatBotInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-top bg-white p-3">
      <div className="container d-flex gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question about CDPs..."
          className="form-control flex-grow-1 resize-none"
          rows={1}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="btn btn-primary"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};