import { ArrowLeft, Play, ExternalLink } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  tags: string[];
}

const videos: VideoItem[] = [
  {
    id: '01',
    title: 'Project Network Setup',
    description: 'Konfigurasi jaringan LAN/WAN menggunakan Cisco Packet Tracer',
    youtubeId: 'dQw4w9WgXcQ',
    tags: ['networking', 'cisco', 'VLAN'],
  },
  {
    id: '02',
    title: 'Web Vulnerability Demo',
    description: 'Demonstrasi celah keamanan web dasar dan cara mitigasinya',
    youtubeId: 'dQw4w9WgXcQ',
    tags: ['cybersecurity', 'web', 'OWASP'],
  },
  {
    id: '03',
    title: 'Final Project Showcase',
    description: 'Presentasi proyek akhir semester jurusan TJKT',
    youtubeId: 'dQw4w9WgXcQ',
    tags: ['project', 'showcase'],
  },
];

interface Props {
  onBack: () => void;
}

export function VideoProjects({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#0a0e14] font-['JetBrains_Mono',_monospace] text-[#00f0ff] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Back button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 mb-10 text-[#00f0ff]/60 hover:text-[#00f0ff] text-xs sm:text-sm tracking-widest transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          cd ../ &nbsp;// back to home
        </button>

        {/* Header */}
        <div className="mb-10 border-b border-[#00f0ff]/20 pb-6">
          <p className="text-[#00ff88] text-xs tracking-[0.3em] mb-2">[ VIDEO LOG ]</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            VIDEO.PROJECTS
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3">
            // {videos.length} entries found — dokumentasi project &amp; showcase
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="border border-[#00f0ff]/30 bg-[#0a0e14]/60 overflow-hidden
                transition-all duration-300 hover:border-[#00f0ff]/70 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              {/* Thumbnail / embed */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Scan line overlay */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,240,255,0.02) 3px, rgba(0,240,255,0.02) 4px)" }} />
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="text-[#00ff88]/50 text-xs mt-1 flex-shrink-0">[{video.id}]</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1 truncate">{video.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{video.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {video.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-[#00ff88]/70 border border-[#00ff88]/20 px-2 py-0.5 tracking-wider">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-[10px] text-[#00f0ff]/20 tracking-widest">
          // end of video_log — {videos.length} records
        </p>
      </div>
    </div>
  );
}
