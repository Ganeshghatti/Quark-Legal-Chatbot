import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full text-fontWhite shadow-lg py-4 px-2 md:px-6 flex items-center justify-between absolute top-0 left-0 bg-bg">
      <div className="flex items-center gap-3">
        <Image src="/logo.webp" alt="Logo" width={72} height={72} />
        {/* <span className="inline-block w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-primary text-xl mr-2">L</span> */}
        <span className="text-lg md:text-2xl font-extrabold tracking-tight">Legal AI Chatbot</span>
      </div>
      {/* Optionally, add more nav items here */}
    </nav>
  );
} 