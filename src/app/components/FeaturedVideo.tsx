import { Play, ExternalLink } from 'lucide-react';

export function FeaturedVideo() {
  const channelUrl = 'https://youtube.com/@novatama-tech?si=PGu9vL_Pbzhzp9Qi';

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#00f0ff]/30 p-6 sm:p-8 lg:p-10 bg-[#0a0e14]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {/* Section Header */}
          <div className="mb-8">
            <p className="text-[#00ff88] text-xs sm:text-sm tracking-[0.3em] mb-2">[ VIDEO LOG ]</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">FEATURED.MP4</h2>
          </div>

          {/* CTA Card to Channel (replace later with embedded video) */}
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group border border-[#00f0ff]/30 bg-[#0a0e14] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6
              transition-all duration-300 hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] cursor-pointer text-left"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border border-[#00ff88]/40 bg-[#00ff88]/5
                group-hover:border-[#00ff88] group-hover:shadow-[0_0_16px_rgba(0,255,136,0.3)] transition-all duration-300 flex-shrink-0">
                <Play className="w-6 h-6 text-[#00ff88] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white font-bold text-base sm:text-lg mb-1 tracking-wide">
                  Tonton di YouTube Channel saya
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  @novatama-tech — dokumentasi & showcase project networking, web dev, dan cybersecurity
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#00f0ff] text-sm tracking-widest flex-shrink-0">
              <span className="hidden sm:inline opacity-60 group-hover:opacity-100 transition-opacity">OPEN_CHANNEL</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>

          <p className="mt-4 text-[10px] sm:text-xs text-[#00f0ff]/30 tracking-widest text-right">
            $ open ./youtube-channel --tag novatama-tech
          </p>
        </div>
      </div>
    </section>
  );
}
