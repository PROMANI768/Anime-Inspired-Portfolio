import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const idCounterRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        
        // Add new point with unique ID
        idCounterRef.current += 1;
        newTrail.push({
          x: mousePosition.x,
          y: mousePosition.y,
          id: idCounterRef.current,
        });
        
        // Remove old points (keep only last 8)
        if (newTrail.length > 8) {
          newTrail.splice(0, newTrail.length - 8);
        }
        
        return newTrail;
      });
      
      animationFrame = requestAnimationFrame(updateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-pink-300/60"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ 
            scale: 0, 
            opacity: 0,
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}