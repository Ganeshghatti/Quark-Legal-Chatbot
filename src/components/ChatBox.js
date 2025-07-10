import React, { useRef, useEffect } from 'react';
import { FaUserCircle, FaRobot } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const sampleMessages = [
  'What are the steps to file an FIR in India?',
  'How can I get anticipatory bail?',
  'What is the process for divorce under Hindu law?'
];

export default function ChatBox({ messages, input, setInput, sendMessage, loading }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full max-h-[80vh] bg-bg rounded-2xl shadow-xl border border-primary/30 w-full">
      <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="text-lg font-semibold text-primary mb-2">Try asking:</div>
            <div className="flex flex-wrap md:flex-row justify-center flex-col gap-2 w-full">
              {sampleMessages.map((msg, idx) => (
                <button
                  key={idx}
                  className="bg-accent text-black font-medium px-4 py-2 rounded-xl shadow hover:opacity-90 transition-all border border-primary/10 text-left w-full md:w-2/5"
                  onClick={() => setInput(msg)}
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}> 
              <div className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'user' ? (
                  <FaUserCircle className="w-8 h-8 text-primary" />
                ) : (
                  <FaRobot className="w-8 h-8 text-accent" />
                )}
                <div className={`p-4 max-w-xs sm:max-w-xl rounded-2xl shadow-md text-base font-medium transition-all break-words whitespace-pre-wrap
                  ${msg.role === 'user'
                    ? 'bg-primary text-fontWhite rounded-br-none'
                    : 'bg-accent text-black rounded-bl-none border border-primary/20'}
                `}>
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))
        )}
        {loading && <div className="text-gray-400 italic text-center">Typing...</div>}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="flex gap-2 sm:gap-3 p-2 sm:p-4 border-t border-primary/20 bg-bg w-full"
        onSubmit={e => { e.preventDefault(); sendMessage(); }}
      >
        <input
          className="flex-1 p-3 sm:p-4 rounded-2xl bg-bg border border-primary/30 text-fontWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/60 transition-all shadow-md text-sm sm:text-base"
          placeholder="Ask a legal question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button
          className="bg-accent text-black font-bold px-4 sm:px-7 py-2 sm:py-3 rounded-2xl shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all disabled:opacity-60 text-sm sm:text-base"
          type="submit"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
} 