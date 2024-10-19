import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  // Hardcode the API key (replace with your actual API key)
  const geminiApiKey = 'YOUR_API_KEY';

  const sendMessage = async () => {
    if (userInput.trim() && geminiApiKey) {
      setMessages([...messages, 'You: ' + userInput]);
  
      const response = await fetch('https://api.gemini.com/v1/pubticker/btcusd', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-GEMINI-APIKEY': geminiApiKey, // Use the API key from environment variable
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const price = data.last;
        setMessages((prev) => [...prev, `Bot: The current price of BTC is $${price}`]);
      } else {
        setMessages((prev) => [...prev, 'Bot: Failed to fetch data from Gemini API']);
      }
  
      setUserInput(''); // Clear input after sending
    }
  };
  

  return (
    <div style={{ padding: '20px', width: '300px', height: '500px' }}>
      <h1>AI Chatbot</h1>
      <div style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '70%' }}
      />
      <button onClick={sendMessage} style={{ width: '28%', marginLeft: '2%' }}>
        Send
      </button>
    </div>
  );
}
