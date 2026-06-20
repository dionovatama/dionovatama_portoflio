import { Shield, Wifi, Code, Lock } from 'lucide-react';

export function About() {
  const skills = [
    { icon: Wifi, name: 'Network Configuration', level: 85 },
    { icon: Code, name: 'Web Development', level: 75 },
    { icon: Shield, name: 'Cybersecurity & CTF', level: 70 },
    { icon: Lock, name: 'System Security', level: 65 },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#00f0ff]/30 p-6 sm:p-8 lg:p-10 bg-[#0a0e14]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {/* Section Header */}
          <div className="mb-8">
            <p className="text-[#00ff88] text-xs sm:text-sm tracking-[0.3em] mb-2">[ SECTION 01 ]</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">ABOUT.EXE</h2>
          </div>

          {/* Description */}
          <div className="mb-10">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Siswa SMK jurusan <span className="text-[#00f0ff]">Teknik Jaringan Komputer dan Telekomunikasi</span> dengan passion dalam bidang networking, web development, dan cybersecurity. 
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Fokus pada pengembangan skills di bidang infrastruktur jaringan, keamanan sistem, dan pembuatan aplikasi web modern. Aktif mengikuti kompetisi CTF dan terus mengasah kemampuan teknis.
            </p>
          </div>

          {/* Skills */}
          <div>
            <p className="text-[#00ff88] text-xs sm:text-sm mb-6 tracking-wider">{'>'} SKILL MATRIX</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="w-5 h-5 text-[#00f0ff] group-hover:text-[#00ff88] transition-colors" />
                    <span className="text-white text-sm sm:text-base">{skill.name}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="h-2 bg-[#1a1e24] border border-[#00f0ff]/20 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#00f0ff] to-[#00ff88] transition-all duration-500 group-hover:shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-[#00ff88] text-xs mt-1 block">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
