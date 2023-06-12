import React, { useState } from 'react';
import './style.scss';
import './send_button.png';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (event) => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="center">
          <div className="contacts">
            <i className="fas fa-bars fa-2x"></i>
            <h2>Contacts</h2>
            <div className="contact">
              <div className="pic rogers"></div>
              <div className="badge">14</div>
              <div className="name">Steve Rogers</div>
              <div className="message">That is America's ...</div>
            </div>
            <div className="contact">
              <div className="pic stark"></div>
              <div className="name">Tony Stark</div>
              <div className="message">Uh, he's from space, he came here to steal a necklace from a wizard.</div>
            </div>
            <div className="contact">
              <div className="pic banner"></div>
              <div className="badge">1</div>
              <div className="name">Bruce Banner</div>
              <div className="message">There's an Ant-Man *and* a Spider-Man?</div>
            </div>
            <div className="contact">
              <div className="pic thor"></div>
              <div className="name">Thor Odinson</div>
              <div className="badge">3</div>
              <div className="message">I like this one</div>
            </div>
            <div className="contact">
              <div className="pic danvers"></div>
              <div className="badge">2</div>
              <div className="name">Carol Danvers</div>
              <div className="message">Hey Peter Parker, you got something for me?</div>
            </div>
          </div>

          <div className="chat">
            <div className="contact bar">
              <div className="pic stark"></div>
              <div className="name">Tony Stark</div>
              <div className="seen">Today at 12:56</div>
            </div>
            <div id="chat" className="messages">
              <div className="time">Today at 11:41</div>
              {messages.map((msg, index) => (
                <div className="message parker" key={index}>
                  {msg}
                </div>
              ))}
            </div>

            <div className="input">
              <input
                type="text"
                placeholder="Type your message here!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="send_btn" onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
