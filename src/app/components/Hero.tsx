import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export function Hero() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="border border-[#00f0ff]/30 p-6 sm:p-8 lg:p-12 bg-[#0a0e14]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-[#00f0ff]/20">
            <Terminal className="w-5 h-5 text-[#00ff88]" />
            <span className="text-[#00ff88] text-sm">~/portfolio</span>
          </div>

          {/* Status Badge */}
          <div className="mb-6 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-[#00ff88]' : 'bg-[#00ff88]/30'} transition-all duration-300`}></span>
            <span className="text-[#00ff88] text-xs sm:text-sm tracking-wider">
              {isOnline ? '● SYSTEM ONLINE' : '○ SYSTEM ONLINE'}
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#00ff88] text-xs sm:text-sm mb-2 tracking-wider">{'>'} INITIALIZING...</p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                NAMA ANDA
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-[#00f0ff] text-sm sm:text-base lg:text-lg tracking-wide">
                TJKT Student | Network & Web Enthusiast
              </p>
              <p className="text-gray-400 text-xs sm:text-sm max-w-2xl">
                Building secure networks and crafting digital experiences. Passionate about cybersecurity, networking infrastructure, and modern web development.
              </p>
            </div>

            {/* Typing Effect */}
            <div className="mt-8 pt-6 border-t border-[#00f0ff]/20">
              <p className="text-[#00ff88] text-xs sm:text-sm font-mono">
                <span className="opacity-50">$</span> cat introduction.txt
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 animate-pulse">
                Welcome to my digital workspace_
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
