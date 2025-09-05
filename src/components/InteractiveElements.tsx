import React, { useState } from 'react';
import { motion } from 'motion/react';

export function FloatingQuotes() {
  const quotes = [
    { text: "Every story has its own magic", author: "Unknown", position: { top: '20%', left: '10%' } },
    { text: "夢は叶えるもの", author: "Japanese Proverb", position: { top: '60%', right: '15%' } },
    { text: "책 속에서 찾은 나의 세상", author: "Korean Saying", position: { top: '40%', left: '80%' } },
    { text: "Characters become friends", author: "Reader's Heart", position: { top: '80%', left: '20%' } },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          className="absolute opacity-30 hover:opacity-70 transition-opacity duration-300 pointer-events-auto"
          style={quote.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: index * 2, duration: 1 }}
          whileHover={{ scale: 1.1, opacity: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 max-w-xs shadow-lg">
            <p className="font-elegant text-sm text-gray-700 italic">"{quote.text}"</p>
            <p className="font-korean text-xs text-gray-500 mt-1">- {quote.author}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function MusicNotes() {
  const notes = ['♪', '♫', '♩', '♬'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/40 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          {notes[Math.floor(Math.random() * notes.length)]}
        </motion.div>
      ))}
    </div>
  );
}

interface StarProps {
  delay: number;
  duration: number;
  x: string;
  y: string;
}

function Star({ delay, duration, x, y }: StarProps) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-200 rounded-full"
      style={{ left: x, top: y }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function TwinklingStars() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {[...Array(20)].map((_, i) => (
        <Star
          key={i}
          delay={Math.random() * 5}
          duration={2 + Math.random() * 3}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 100}%`}
        />
      ))}
    </div>
  );
}