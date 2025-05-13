import { useState, useEffect } from 'react';

export const LoadingSpinner= () => { 
  const [progress, setProgress] = useState(0);
  
  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Creative Pulse Loading Animation */}
      <div className="flex items-center justify-center py-12">
        <div className="relative">
          {/* Outer ring - using #d2c8c8 for light color */}
          <div className="w-20 h-20 border-4 border-[#d2c8c8] rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#a3816a] rounded-full animate-pulse"></div>
          </div>
          
          {/* Inner circle - using #0a065d for dark accent */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[#0a065d] rounded-full animate-ping"></div>
          </div>
          
          {/* Loading dots - using #a3816a for medium color */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-2 h-2 bg-[#a3816a] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-[#a3816a] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-[#a3816a] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-center">
        <p className="text-[#0a065d] text-lg font-medium animate-pulse">
          Loading...
        </p>
        <div className="mt-2 flex justify-center space-x-1">
          <div className="w-1 h-1 bg-[#a3816a] rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="w-1 h-1 bg-[#a3816a] rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
          <div className="w-1 h-1 bg-[#a3816a] rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>
      
      {/* Progress bar using all three colors */}
      <div className="w-full bg-[#d2c8c8] rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#a3816a] to-[#0a065d] rounded-full"
          style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
}
