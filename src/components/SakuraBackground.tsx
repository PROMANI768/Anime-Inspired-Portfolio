import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface SakuraPetal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
  delay: number;
}

export function SakuraBackground() {
  const [petals, setPetals] = useState<SakuraPetal[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: SakuraPetal[] = [];
      for (let i = 0; i < 30; i++) { // Reduced number for performance with video
        newPetals.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -100 - Math.random() * 500,
          rotation: Math.random() * 360,
          scale: 0.2 + Math.random() * 0.5, // Smaller petals to complement video
          duration: 12 + Math.random() * 8,
          delay: Math.random() * 15,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
    window.addEventListener('resize', generatePetals);
    return () => window.removeEventListener('resize', generatePetals);
  }, []);

  useEffect(() => {
    // Ensure video plays automatically and loops
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Live Wallpaper Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Cherry Blossom background video */}
          <source src="./videos/cherry-blossom-bg.mp4" type="video/mp4" />
          
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* White solid overlay for text readability while keeping video visible */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        />
      </div>

      {/* Complementary Floating Sakura Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-3 h-3"
          initial={{
            x: petal.x,
            y: petal.y,
            rotation: petal.rotation,
            scale: petal.scale,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: petal.x + (Math.sin(petal.id) * 80),
            rotation: petal.rotation + 360,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full drop-shadow-sm"
          >
            <path
              d="M12 2C12 2 8 6 12 12C16 6 12 2 12 2Z"
              fill="#FFB6C1"
              opacity="0.6"
            />
            <path
              d="M12 12C12 12 18 8 12 12C18 16 12 12 12 12Z"
              fill="#FFC0CB"
              opacity="0.5"
            />
            <path
              d="M12 12C12 12 8 16 12 12C8 8 12 12 12 12Z"
              fill="#FFCCCB"
              opacity="0.4"
            />
            <path
              d="M12 12C12 12 16 18 12 12C6 18 12 12 12 12Z"
              fill="#FFE4E1"
              opacity="0.3"
            />
            <path
              d="M12 22C12 22 16 18 12 12C8 18 12 22 12 22Z"
              fill="#FFF0F5"
              opacity="0.2"
            />
          </svg>
        </motion.div>
      ))}

      {/* Enhanced Gradient Overlays for Aesthetic Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-pink-50/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-50/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50/10 via-transparent to-purple-50/10" />
    </div>
  );
}