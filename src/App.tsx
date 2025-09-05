import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { SakuraBackground } from './components/SakuraBackground';
import { FloatingQuotes, MusicNotes, TwinklingStars } from './components/InteractiveElements';
import { ScrollVideoAnimations } from './components/ScrollVideoAnimations';
import { StaticImages } from './components/StaticImages';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Animated Sakura Background */}
      <SakuraBackground />
      
      {/* Interactive Elements */}
      <FloatingQuotes />
      <MusicNotes />
      <TwinklingStars />
      
      {/* Scroll-based Video Animations */}
      <ScrollVideoAnimations scrollProgress={scrollYProgress} />
      
      {/* Static Images */}
      <StaticImages />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-6"
          style={{ y: y1 }}
        >
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <motion.h1 
                className="text-[12rem] md:text-[20rem] mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ 
                  fontFamily: '"Amsterline", sans-serif',
                  backgroundSize: '200% 200%',
                  letterSpacing: '0.02em',
                  lineHeight: '0.9',
                  textShadow: '0 6px 12px rgba(0,0,0,0.15)',
                  fontWeight: 'bold',
                  fontSize: 'calc(16em)',
                  fontStyle: 'italic',
                  opacity: 0.6
                }}
              >
                Tanvi
              </motion.h1>
              <motion.div 
                className="text-2xl md:text-3xl text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ fontFamily: '"EagleHorizonP", sans-serif' }}
              >
                "Dreams falling like petals"
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-gray-600 mb-8" style={{ fontFamily: '"modernline", sans-serif' }}>
                A bright soul wandering through worlds of stories
              </p>
              
              <motion.div 
                className="font-mistuki text-lg text-gray-500 italic mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                "Where every page turns into a new adventure"
              </motion.div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-osake font-medium">
                  Anime Enthusiast
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-amanojaku font-medium">
                  Manhwa Lover
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-mistuki font-medium">
                  Novel Reader
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="py-20 px-6"
          style={{ y: y2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-amanojaku text-4xl md:text-5xl mb-12 text-gray-800 font-medium">
                My World
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-left">
                  <p className="font-elegant text-lg text-gray-600 leading-relaxed">
                    In a world filled with endless stories, I find myself drawn to the 
                    vivid characters and intricate plots that anime, manhwa, and novels offer. 
                    Each story is a gateway to understanding different perspectives and emotions.
                  </p>
                  
                  <motion.div 
                    className="font-mistuki text-xl text-gray-500 italic mb-8 text-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    "Each story is a universe waiting to be explored"
                  </motion.div>
                  
                  <div className="space-y-6">
                    <h3 className="font-osake text-2xl text-gray-800 text-center">Favorite Genres</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        {/* Kaiser image positioned behind anime-container */}
                        <div 
                          className="absolute left-0 w-full pointer-events-none kaiser-image-container"
                          style={{
                            bottom: '0',
                            height: '120%', /* Reduced height to fix positioning */
                            zIndex: 0, /* Behind the anime-container */
                            transformOrigin: 'bottom',
                            transform: 'translateY(0)',
                            transition: 'transform 0.5s ease-out, z-index 0.1s',
                          }}
                        >
                          <img 
                            src="/kaiser.png" 
                            alt="Kaiser" 
                            className="w-full h-full object-contain kaiser-image"
                            style={{ maxWidth: '100%' }}
                          />
                        </div>
                        
                        <motion.div 
                          id="anime-container"
                          className="p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl text-center hover-float relative overflow-visible"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={(e) => {
                            const kaiserElement = e.currentTarget.parentElement?.querySelector('.kaiser-image-container');
                            if (kaiserElement) {
                              kaiserElement.style.transform = 'translateY(-60%)';
                              kaiserElement.style.zIndex = '0'; // Keep behind
                            }
                          }}
                          onMouseLeave={(e) => {
                            const kaiserElement = e.currentTarget.parentElement?.querySelector('.kaiser-image-container');
                            if (kaiserElement) {
                              kaiserElement.style.transform = 'translateY(0)';
                              kaiserElement.style.zIndex = '0';
                            }
                          }}
                          onClick={(e) => {
                            if (window.innerWidth <= 768) {
                              const kaiserElement = e.currentTarget.parentElement?.querySelector('.kaiser-image-container');
                              if (kaiserElement) {
                                const currentTransform = kaiserElement.style.transform;
                                if (currentTransform === 'translateY(-60%)') {
                                  kaiserElement.style.transform = 'translateY(0)';
                                  kaiserElement.style.zIndex = '0';
                                } else {
                                  kaiserElement.style.transform = 'translateY(-60%)';
                                  kaiserElement.style.zIndex = '50';
                                }
                              }
                            }
                          }}
                        >
                          <div className="text-3xl mb-3">📺</div>
                          <div className="font-amanojaku text-lg font-semibold text-pink-700 mb-2">Anime</div>
                          <div className="font-elegant text-sm text-pink-600">Visual storytelling at its finest</div>
                        </motion.div>
                      </div>
                      
                      <div className="relative">
                        {/* Dokja image positioned behind manhwa-container */}
                        <div 
                          className="absolute left-0 w-full pointer-events-none dokja-image-container"
                          style={{
                            bottom: '0',
                            height: '120%',
                            zIndex: 0, /* Behind the manhwa-container */
                            transformOrigin: 'bottom',
                            transform: 'translateY(0)',
                            transition: 'transform 0.5s ease-out, z-index 0.1s',
                          }}
                        >
                          <img 
                            src="/dokja.png" 
                            alt="Dokja" 
                            className="w-full h-full object-contain dokja-image"
                            style={{ maxWidth: '100%' }}
                          />
                        </div>
                        
                        <motion.div 
                          id="manhwa-container"
                          className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl text-center hover-float relative overflow-visible"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={(e) => {
                            const dokjaElement = e.currentTarget.parentElement?.querySelector('.dokja-image-container');
                            if (dokjaElement) {
                              dokjaElement.style.transform = 'translateY(-60%)';
                              dokjaElement.style.zIndex = '0'; // Keep behind
                            }
                          }}
                          onMouseLeave={(e) => {
                            const dokjaElement = e.currentTarget.parentElement?.querySelector('.dokja-image-container');
                            if (dokjaElement) {
                              dokjaElement.style.transform = 'translateY(0)';
                              dokjaElement.style.zIndex = '0';
                            }
                          }}
                          onClick={(e) => {
                            if (window.innerWidth <= 768) {
                              const dokjaElement = e.currentTarget.parentElement?.querySelector('.dokja-image-container');
                              if (dokjaElement) {
                                const currentTransform = dokjaElement.style.transform;
                                if (currentTransform === 'translateY(-60%)') {
                                  dokjaElement.style.transform = 'translateY(0)';
                                  dokjaElement.style.zIndex = '0';
                                } else {
                                  dokjaElement.style.transform = 'translateY(-60%)';
                                  dokjaElement.style.zIndex = '50';
                                }
                              }
                            }
                          }}
                        >
                          <div className="text-3xl mb-3">📱</div>
                          <div className="font-osake text-lg font-semibold text-purple-700 mb-2">Manhwa</div>
                          <div className="font-elegant text-sm text-purple-600">Korean webtoons with depth</div>
                        </motion.div>
                      </div>
                      <div className="relative">
                        {/* Moretti image positioned behind novel-container */}
                        <div 
                          className="absolute left-0 w-full pointer-events-none moretti-image-container"
                          style={{
                            bottom: '0',
                            height: '120%',
                            zIndex: 0, /* Behind the novel-container */
                            transformOrigin: 'bottom',
                            transform: 'translateY(0)',
                            transition: 'transform 0.5s ease-out, z-index 0.1s',
                          }}
                        >
                          <img 
                            src="/moretti.png" 
                            alt="Moretti" 
                            className="w-full h-full object-contain moretti-image"
                            style={{ maxWidth: '100%' }}
                          />
                        </div>
                        
                        <motion.div 
                          id="novel-container"
                          className="p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl text-center hover-float relative overflow-visible"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={(e) => {
                            const morettiElement = e.currentTarget.parentElement?.querySelector('.moretti-image-container');
                            if (morettiElement) {
                              morettiElement.style.transform = 'translateY(-60%)';
                              morettiElement.style.zIndex = '0'; // Keep behind
                            }
                          }}
                          onMouseLeave={(e) => {
                            const morettiElement = e.currentTarget.parentElement?.querySelector('.moretti-image-container');
                            if (morettiElement) {
                              morettiElement.style.transform = 'translateY(0)';
                              morettiElement.style.zIndex = '0';
                            }
                          }}
                          onClick={(e) => {
                            if (window.innerWidth <= 768) {
                              const morettiElement = e.currentTarget.parentElement?.querySelector('.moretti-image-container');
                              if (morettiElement) {
                                const currentTransform = morettiElement.style.transform;
                                if (currentTransform === 'translateY(-60%)') {
                                  morettiElement.style.transform = 'translateY(0)';
                                  morettiElement.style.zIndex = '0';
                                } else {
                                  morettiElement.style.transform = 'translateY(-60%)';
                                  morettiElement.style.zIndex = '50';
                                }
                              }
                            }
                          }}
                        >
                          <div className="text-3xl mb-3">📚</div>
                          <div className="font-mistuki text-lg font-semibold text-indigo-700 mb-2">Novels</div>
                          <div className="font-elegant text-sm text-indigo-600">Imagination without limits</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className="relative"
                  animate={{
                    x: mousePosition.x * 0.01,
                    y: mousePosition.y * 0.01,
                  }}
                  transition={{ type: "spring", damping: 30 }}
                >
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-pink-300 via-transparent to-purple-300 rounded-full"></div>
                    </motion.div>
                    
                    {/* Central decorative element */}
                    <motion.div 
                      className="text-center z-10"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="font-amanojaku text-6xl text-gray-600 mb-2">✨</div>
                      <div className="font-mistuki text-sm text-gray-500 italic">
                        Story Magic
                      </div>
                    </motion.div>

                    {/* Floating elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-white/40"
                        style={{
                          top: `${20 + Math.sin((i * Math.PI) / 3) * 30}%`,
                          left: `${20 + Math.cos((i * Math.PI) / 3) * 30}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="py-16 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.p 
              className="font-osake text-lg text-gray-500 mb-4 font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Journey Following Dreams
            </motion.p>
            <p className="font-mistuki text-base text-gray-400 italic">
              "Every story is a new adventure waiting to unfold"
            </p>
            <motion.div 
              className="font-amanojaku text-xs text-gray-300 mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ✨ Where stories come alive ✨
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-10 mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </div>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-pink-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}