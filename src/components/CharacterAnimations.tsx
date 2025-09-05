import React, { useEffect, useState, useRef } from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';

interface CharacterAnimationsProps {
  scrollProgress: MotionValue<number>;
}

export function CharacterAnimations({ scrollProgress }: CharacterAnimationsProps) {
  const [screenWidth, setScreenWidth] = useState(1200);
  
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  // Transform scroll progress to character positions
  const kaiserX = useTransform(scrollProgress, [0, 0.25, 0.5], [-100, screenWidth * 0.2, screenWidth * 0.8]);
  const kaiserY = useTransform(scrollProgress, [0, 0.25, 0.5], [100, 80, 120]);
  
  const dokjaX = useTransform(scrollProgress, [0.2, 0.45, 0.7], [screenWidth + 100, screenWidth * 0.7, -100]);
  const dokjaY = useTransform(scrollProgress, [0.2, 0.45, 0.7], [200, 150, 180]);
  
  const erenX = useTransform(scrollProgress, [0.4, 0.65, 0.9], [-100, screenWidth * 0.3, screenWidth * 0.9]);
  const erenY = useTransform(scrollProgress, [0.4, 0.65, 0.9], [300, 250, 280]);
  
  const hinataX = useTransform(scrollProgress, [0.6, 0.85, 1], [screenWidth + 100, screenWidth * 0.6, -100]);
  const hinataY = useTransform(scrollProgress, [0.6, 0.85, 1], [400, 350, 380]);

  const Character = ({ 
    name, 
    videoSrc,
    x, 
    y, 
    delay = 0 
  }: { 
    name: string; 
    videoSrc: string;
    x: MotionValue<number>; 
    y: MotionValue<number>; 
    delay?: number;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      // Ensure video plays automatically and loops
      if (videoRef.current) {
        videoRef.current.play().catch(console.log);
      }
    }, []);

    return (
      <motion.div
        className="fixed pointer-events-none z-20"
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: [0, 3, -3, 0]
        }}
        transition={{ 
          opacity: { delay: delay + 0.5, duration: 0.5 },
          scale: { delay: delay + 0.5, duration: 0.5 },
          rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Character Video Container */}
        <motion.div
          className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg border-3 border-white/80 backdrop-blur-sm"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 4px 20px rgba(0,0,0,0.1)",
              "0 8px 30px rgba(0,0,0,0.15)",
              "0 4px 20px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: delay * 0.3
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
            
            {/* Fallback content */}
            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
              <span className="text-2xl">
                {name === 'Kaiser' && '⚽'}
                {name === 'Dokja' && '📖'}
                {name === 'Eren' && '⚔️'}
                {name === 'Hinata' && '🏐'}
              </span>
            </div>
          </video>

          {/* Subtle overlay for aesthetic enhancement */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
        
        {/* Character Name Bubble */}
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-korean font-medium shadow-lg whitespace-nowrap border border-white/30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 1 }}
        >
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {name}
          </span>
        </motion.div>
        
        {/* Enhanced Sparkle Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: `${40 + Math.sin((i * Math.PI) / 4) * 35}px`,
                left: `${40 + Math.cos((i * Math.PI) / 4) * 35}px`,
                background: `hsl(${(i * 45) + 180}, 70%, 70%)`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Floating Hearts Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            rotate: -180,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300/60 text-xs"
              style={{
                top: `${30 + Math.sin((i * Math.PI) / 2) * 45}px`,
                left: `${30 + Math.cos((i * Math.PI) / 2) * 45}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              💖
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <Character 
        name="Kaiser" 
        videoSrc="/videos/chibi-kaiser.mp4"
        x={kaiserX} 
        y={kaiserY}
        delay={0}
      />
      <Character 
        name="Dokja" 
        videoSrc="/videos/chibi-dokja.mp4"
        x={dokjaX} 
        y={dokjaY}
        delay={0.2}
      />
      <Character 
        name="Eren" 
        videoSrc="/videos/chibi-eren.mp4"
        x={erenX} 
        y={erenY}
        delay={0.4}
      />
      <Character 
        name="Hinata" 
        videoSrc="/videos/chibi-hinata.mp4"
        x={hinataX} 
        y={hinataY}
        delay={0.6}
      />
    </>
  );
}