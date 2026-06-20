import { Github, ExternalLink, Folder, ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Network Monitoring Dashboard',
    description: 'Real-time network monitoring tool dengan visualisasi data traffic dan alert system untuk monitoring infrastruktur jaringan.',
    tags: ['Python', 'React', 'WebSocket'],
    github: 'https://github.com/yourusername/network-monitor',
    demo: null,
  },
  {
    id: '02',
    title: 'CTF Writeup Collection',
    description: 'Dokumentasi lengkap writeup CTF competition dari berbagai platform (HackTheBox, TryHackMe, PicoCTF).',
    tags: ['Cybersecurity', 'Pentesting', 'Linux'],
    github: 'https://github.com/yourusername/ctf-writeups',
    demo: null,
  },
  {
    id: '03',
    title: 'WiFi Security Analyzer',
    description: 'Tools untuk menganalisis keamanan jaringan WiFi, mendeteksi vulnerability, dan memberikan rekomendasi security.',
    tags: ['Python', 'Scapy', 'Security'],
    github: 'https://github.com/yourusername/wifi-analyzer',
    demo: null,
  },
  {
    id: '04',
    title: 'Portfolio Website',
    description: 'Personal portfolio dengan tema cybersecurity dan terminal aesthetic, built with React dan Tailwind CSS.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.com',
  },
  {
    id: '05',
    title: 'Packet Sniffer CLI',
    description: 'Command-line tool untuk menangkap dan menganalisis paket jaringan secara real-time.',
    tags: ['Python', 'Networking', 'CLI'],
    github: 'https://github.com/yourusername/packet-sniffer',
    demo: null,
  },
  {
    id: '06',
    title: 'Mikrotik Auto Config',
    description: 'Script otomasi konfigurasi router Mikrotik menggunakan API untuk deployment jaringan skala besar.',
    tags: ['Mikrotik', 'Python', 'API'],
    github: 'https://github.com/yourusername/mikrotik-auto',
    demo: null,
  },
];

interface Props {
  onBack: () => void;
}

export function AllProjects({ onBack }: Props) {
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
          <p className="text-[#00ff88] text-xs tracking-[0.3em] mb-2">[ PROJECT ARCHIVE ]</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            ALL.PROJECTS
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3">
            // {projects.length} repositories found
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-[#00f0ff]/20 p-6 bg-[#0a0e14]/80 transition-all duration-300
                hover:border-[#00f0ff]/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Folder className="w-7 h-7 text-[#00ff88] group-hover:text-[#00f0ff] transition-colors" />
                  <span className="text-[#00ff88]/40 text-xs">[{project.id}]</span>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white text-base sm:text-lg mb-2 group-hover:text-[#00f0ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag}
                    className="text-[#00ff88] text-xs px-2 py-1 border border-[#00ff88]/30 bg-[#00ff88]/5 hover:bg-[#00ff88]/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-[10px] text-[#00f0ff]/20 tracking-widest">
          // end of project_archive — {projects.length} records
        </p>
      </div>
    </div>
  );
}
