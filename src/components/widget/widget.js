import React, { useState } from 'react';
import './Widget.css'; // you will need to define the styles

function MyChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      setMessages([...messages, { text: input, user: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className={`my-chat-widget ${isOpen ? 'open' : 'closed'}`}>
      <header onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </header>

      {isOpen && (
        <div className="chat-content">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.user}`}>
                {message.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message here..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default MyChatWidget;
