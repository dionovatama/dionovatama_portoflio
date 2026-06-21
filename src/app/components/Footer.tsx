import { Terminal, Github, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#00f0ff]/20 bg-[#0a0e14]/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-[#00ff88]" />
              <span className="text-white font-bold text-lg">PORTFOLIO.SYS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              TJKT Student passionate about networking, cybersecurity, and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#00f0ff] text-sm mb-4 tracking-wider">QUICK ACCESS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00ff88] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-[#00ff88]">{'>'}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#00f0ff] text-sm mb-4 tracking-wider">CONNECT</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/dionovatama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#00f0ff]/30 flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/60 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dionovatama_?igsh=ZjF4enRoM2xkNXVw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#00f0ff]/30 flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/60 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:dionovatama11@gmail.com"
                className="w-10 h-10 border border-[#00f0ff]/30 flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/60 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00f0ff]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              <span className="text-[#00ff88]">©</span> {currentYear} <span className="text-[#00f0ff]">DIO NOVATAMA</span>. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              <span className="text-[#00ff88]">{'>'}</span> Built with React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Terminal Effect */}
        <div className="mt-6 text-center">
          <p className="text-[#00ff88] text-xs font-mono opacity-50">
            [SYSTEM] Connection established • Uptime: 99.9% • Status: ONLINE
          </p>
        </div>
      </div>
    </footer>
  );
}
