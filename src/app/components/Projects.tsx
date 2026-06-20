import { Github, ExternalLink, Folder } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Network Monitoring Dashboard',
      description: 'Real-time network monitoring tool dengan visualisasi data traffic dan alert system untuk monitoring infrastruktur jaringan.',
      tags: ['Python', 'React', 'WebSocket'],
      github: 'https://github.com/yourusername/network-monitor',
      demo: null,
    },
    {
      title: 'CTF Writeup Collection',
      description: 'Dokumentasi lengkap writeup CTF competition dari berbagai platform (HackTheBox, TryHackMe, PicoCTF).',
      tags: ['Cybersecurity', 'Pentesting', 'Linux'],
      github: 'https://github.com/yourusername/ctf-writeups',
      demo: null,
    },
    {
      title: 'WiFi Security Analyzer',
      description: 'Tools untuk menganalisis keamanan jaringan WiFi, mendeteksi vulnerability, dan memberikan rekomendasi security.',
      tags: ['Python', 'Scapy', 'Security'],
      github: 'https://github.com/yourusername/wifi-analyzer',
      demo: null,
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio dengan tema cybersecurity dan terminal aesthetic, built with React dan Tailwind CSS.',
      tags: ['React', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#00f0ff]/30 p-6 sm:p-8 lg:p-10 bg-[#0a0e14]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-[#00ff88] text-xs sm:text-sm tracking-[0.3em] mb-2">[ PROJECT ARCHIVE ]</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">REPOSITORY.LIST</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {'>'} Accessing project database...
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-[#00f0ff]/20 p-6 bg-[#0a0e14]/80 transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-8 h-8 text-[#00ff88] group-hover:text-[#00f0ff] transition-colors" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00f0ff] transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00f0ff] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-white text-lg sm:text-xl mb-3 group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[#00ff88] text-xs px-2 py-1 border border-[#00ff88]/30 bg-[#00ff88]/5 hover:bg-[#00ff88]/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
