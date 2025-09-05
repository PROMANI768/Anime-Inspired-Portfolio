import React, { useState, useRef, useEffect } from 'react';

interface VideoHandlerProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  children?: React.ReactNode;
  onLoadStart?: () => void;
  onError?: () => void;
}

export function VideoHandler({
  src,
  fallbackSrc,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster,
  children,
  onLoadStart,
  onError
}: VideoHandlerProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      setIsLoading(true);
      onLoadStart?.();
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      if (autoPlay) {
        video.play().catch(() => {
          // Silent fail for autoplay restrictions
        });
      }
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      onError?.();
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [autoPlay, onLoadStart, onError]);

  if (hasError && !fallbackSrc) {
    return (
      <div className={`bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center ${className}`}>
        {children || <div className="text-gray-400 text-sm">Video unavailable</div>}
      </div>
    );
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className={className}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
      >
        <source src={hasError && fallbackSrc ? fallbackSrc : src} type="video/mp4" />
        <source src={(hasError && fallbackSrc ? fallbackSrc : src).replace('.mp4', '.webm')} type="video/webm" />
        
        {/* Fallback content for browsers that don't support video */}
        <div className={`bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center ${className}`}>
          {children || <div className="text-gray-400 text-sm">Video not supported</div>}
        </div>
      </video>
      
      {isLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center ${className}`}>
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-pink-300 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
}