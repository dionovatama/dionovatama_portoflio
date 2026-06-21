import { Shield, Wifi, Server, Terminal, MapPin, Mail } from 'lucide-react';

export function About() {
  const skillGroups = [
    {
      icon: Wifi,
      title: 'Networking',
      items: ['Mikrotik & Winbox', 'Routing (Static, RIP, OSPF, EIGRP)', 'Switching & VLAN', 'LAN Cable (UTP)'],
    },
    {
      icon: Server,
      title: 'Server & Virtualization',
      items: ['Linux (Ubuntu, Debian, Kali)', 'Proxmox VE', 'VirtualBox', 'Remote Server (SSH)'],
    },
    {
      icon: Shield,
      title: 'Security & Tools',
      items: ['Network Security Hardening', 'Git & GitHub', 'Basic Backend Programming', 'Microsoft Office'],
    },
    {
      icon: Terminal,
      title: 'Soft Skill',
      items: ['Kerja sama tim', 'Troubleshooting', 'Cepat beradaptasi & belajar hal baru'],
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#00f0ff]/30 p-6 sm:p-8 lg:p-10 bg-[#0a0e14]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {/* Section Header */}
          <div className="mb-6">
            <p className="text-[#00ff88] text-xs sm:text-sm tracking-[0.3em] mb-2">[ SECTION 01 ]</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">ABOUT.EXE</h2>
          </div>

          {/* Contact badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#00ff88] border border-[#00ff88]/30 bg-[#00ff88]/5 px-3 py-1.5">
              <MapPin className="w-3.5 h-3.5" /> Bandung, Jawa Barat
            </span>
            <a
              href="mailto:dionovatama11@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#00ff88] border border-[#00ff88]/30 bg-[#00ff88]/5 px-3 py-1.5 hover:border-[#00ff88]/60 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> dionovatama11@gmail.com
            </a>
          </div>

          {/* Description */}
          <div className="mb-10">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Siswa SMKN 2 Baleendah jurusan <span className="text-[#00f0ff]">Teknik Jaringan Komputer dan Telekomunikasi</span> dengan minat pada bidang jaringan komputer, administrasi server, manajemen jaringan, dan keamanan jaringan.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Memiliki kemampuan dalam konfigurasi jaringan menggunakan Mikrotik, troubleshooting perangkat komputer, serta implementasi keamanan pada layanan server Linux. Mampu bekerja sama dalam tim dan memiliki semangat belajar yang tinggi untuk mengembangkan kemampuan di bidang Teknologi Informasi.
            </p>
          </div>

          {/* Skills */}
          <div>
            <p className="text-[#00ff88] text-xs sm:text-sm mb-6 tracking-wider">{'>'} SKILL MATRIX</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map((group, index) => (
                <div key={index} className="group border border-[#00f0ff]/10 p-4 hover:border-[#00f0ff]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <group.icon className="w-5 h-5 text-[#00f0ff] group-hover:text-[#00ff88] transition-colors" />
                    <span className="text-white text-sm sm:text-base">{group.title}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                        <span className="text-[#00ff88] mt-0.5">{'>'}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
