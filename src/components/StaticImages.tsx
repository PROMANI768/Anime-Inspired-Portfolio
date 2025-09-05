import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { imageConfig } from '../config/imageConfig';
import '../styles/responsive.css'; // Import responsive styles
import '../styles/animations.css'; // Import animation styles

export function StaticImages() {
  const [isAnimeHovered, setIsAnimeHovered] = useState(false);
  const [animePosition, setAnimePosition] = useState(null);
  const { scrollYProgress } = useScroll();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [kaiserVisible, setKaiserVisible] = useState(false);

  // Listen for anime container hover events and track scroll position
  useEffect(() => {
    const handleAnimeHover = (event) => {
      console.log('Anime hover event:', event.detail);
      setIsAnimeHovered(event.detail.isHovered);
      if (event.detail.position) {
        // Adjust position based on current scroll position
        const scrollY = window.scrollY;
        const adjustedPosition = {
          ...event.detail.position,
          top: event.detail.position.top + scrollY
        };
        console.log('Kaiser position set to:', adjustedPosition);
        setAnimePosition(adjustedPosition);
      }
    };
    
    window.addEventListener('animeHover', handleAnimeHover);
    return () => window.removeEventListener('animeHover', handleAnimeHover);
  }, []);
  
  // Update screen dimensions on resize and update anime position if needed
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      
      // If anime is hovered, update position on resize
      if (isAnimeHovered && animePosition) {
        // Force position update by triggering a small change
        setAnimePosition({
          ...animePosition,
          width: animePosition.width
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isAnimeHovered, animePosition]);
  
  // Transform scroll progress to image position along bottom edge
  const orv1X = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [screenWidth + 300, screenWidth * 0.75, screenWidth * 0.5, screenWidth * 0.25, -300]
  );
  
  // Position at the bottom of the screen
  const orv1Y = useTransform(
    () => screenHeight - imageConfig.orv1.maxHeight.replace('vh', '') * screenHeight / 100, // Position at the bottom of the screen
    (value) => value
  );
  
  // Determine if image should be mirrored based on scroll direction
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
      
      // Update Kaiser image position when scrolling if anime position is available
      if (animePosition && isAnimeHovered) {
        const updatedPosition = {
          ...animePosition,
          top: animePosition.top - (lastScrollY - currentScrollY)
        };
        setAnimePosition(updatedPosition);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, animePosition, isAnimeHovered]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* ORV1 Image - positioned at absolute top and animated along screen edges based on scroll */}
      <motion.div 
        className="absolute pointer-events-auto motion-div"
        style={{
          x: orv1X,
          y: orv1Y,
          width: 'auto',
          height: 'auto',
          maxHeight: imageConfig.orv1.maxHeight,
          maxWidth: imageConfig.orv1.maxWidth,
          scaleX: scrollingDown ? 1 : -1, // Mirror horizontally when scrolling up
          zIndex: 999 // Ensure it's above everything else
        }}
        initial={{ x: screenWidth + 300 }} // Start off-screen to the right
        transition={{ duration: 0.2 }} // Smooth transition for position changes
      >
        <ImageWithFallback 
          src="/orv1.png" 
          alt="ORV Character" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Kaiser Image - direct implementation with debug */}
      <div 
        className="fixed pointer-events-none" 
        style={{ 
          zIndex: 9999,
          display: animePosition && isAnimeHovered ? 'block' : 'none',
          top: animePosition ? animePosition.top - animePosition.height : 0,
          left: animePosition ? animePosition.left : 0,
          width: animePosition ? animePosition.width : 0,
          height: animePosition ? animePosition.height : 0,
          backgroundColor: 'rgba(255,0,0,0.2)'
        }}
      >
        <img
          src="/kaiser.png"
          alt="Kaiser"
          className="w-full h-full object-contain animate-slideUp"
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      
      {/* Debug info removed */}

      {/* Kaiser Image with hover effect removed as requested */}
    </div>
  );
}