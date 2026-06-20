import { Play } from 'lucide-react';

export function FeaturedVideo() {
  // Replace with actual YouTube video ID
  const videoId = 'dQw4w9WgXcQ';

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#00f0ff]/30 p-6 sm:p-8 lg:p-10 bg-[#0a0e14]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {/* Section Header */}
          <div className="mb-8">
            <p className="text-[#00ff88] text-xs sm:text-sm tracking-[0.3em] mb-2">[ VIDEO LOG ]</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">FEATURED.MP4</h2>
          </div>

          {/* Video Container */}
          <div className="relative group">
            <div className="border border-[#00f0ff]/30 overflow-hidden bg-black transition-all duration-300 group-hover:border-[#00f0ff]/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4 flex items-start gap-3">
              <Play className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white text-base sm:text-lg mb-1">My Latest Project Showcase</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Demonstrasi project terbaru saya di bidang networking dan cybersecurity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
