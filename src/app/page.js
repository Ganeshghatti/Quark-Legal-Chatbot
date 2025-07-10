"use client"

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatBox from '../components/ChatBox';

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let storedId = localStorage.getItem('user_uuid');
    if (!storedId) {
      storedId = uuidv4();
      localStorage.setItem('user_uuid', storedId);
    }
    setUserId(storedId);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !userId) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('https://n8n.srv833013.hstgr.cloud/webhook/98e098d6-78fc-4b9e-9f0e-c0acef291b3c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, message: input }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.output }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: '❌ Failed to get response' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-fontWhite px-2 py-6">
      <div className="w-full max-w-3xl md:max-w-6xl flex-1 flex flex-col justify-end">
        <ChatBox
          messages={messages}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
}
