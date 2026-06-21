import { Github, Instagram, Mail, Youtube, ExternalLink } from 'lucide-react';

export function SocialLinks() {
  const socials = [
    {
      name: 'GitHub',
      username: '@dionovatama',
      url: 'https://github.com/dionovatama',
      icon: Github,
      description: 'Check out my code repositories',
    },
    {
      name: 'Instagram',
      username: '@dionovatama_',
      url: 'https://www.instagram.com/dionovatama_?igsh=ZjF4enRoM2xkNXVw',
      icon: Instagram,
      description: 'Follow my tech journey',
    },
    {
      name: 'YouTube',
      username: '@novatama-tech',
      url: 'https://youtube.com/@novatama-tech?si=PGu9vL_Pbzhzp9Qi',
      icon: Youtube,
      description: 'Watch my project videos',
    },
    {
      name: 'Email',
      username: 'dionovatama11@gmail.com',
      url: 'mailto:dionovatama11@gmail.com',
      icon: Mail,
      description: 'Get in touch',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#00f0ff]/30 p-6 sm:p-8 lg:p-10 bg-[#0a0e14]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-[#00ff88] text-xs sm:text-sm tracking-[0.3em] mb-2">[ CONNECT ]</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">NETWORK.CONNECT</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {'>'} Establishing connections...
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="border border-[#00f0ff]/20 p-6 bg-[#0a0e14]/80 transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group flex items-start gap-4"
              >
                <div className="p-3 border border-[#00ff88]/30 bg-[#00ff88]/5 group-hover:bg-[#00ff88]/10 transition-all">
                  <social.icon className="w-6 h-6 text-[#00ff88] group-hover:text-[#00f0ff] transition-colors" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white text-base sm:text-lg group-hover:text-[#00f0ff] transition-colors">
                      {social.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00f0ff] transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-[#00ff88] text-sm mb-1 truncate">{social.username}</p>
                  <p className="text-gray-400 text-xs">{social.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="mt-8 pt-6 border-t border-[#00f0ff]/20">
            <p className="text-gray-400 text-sm text-center">
              <span className="text-[#00ff88]">{'>'}</span> Prefer email? Drop me a message at{' '}
              <a href="mailto:dionovatama11@gmail.com" className="text-[#00f0ff] hover:underline">
                dionovatama11@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
