import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">

      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-20 pt-32 gap-12">

        {/* Profile Image Container */}
        <div className="relative group w-full md:w-[400px]">
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2dd4bf] to-[#05555c] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <Image
              src="/Profile.png"
              alt="Tahirah Roohi"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              priority
            />
          </div>

          {/* Floating Social Icons */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-800 shadow-2xl">
             <a href="https://www.linkedin.com/in/tahirah-roohi" target="_blank" rel="noopener noreferrer" className="text-[#2dd4bf] hover:scale-125 transition-transform"><FaLinkedinIn size={22}/></a>
             <a href="https://github.com/TahirahWebDev" target="_blank" rel="noopener noreferrer" className="text-[#2dd4bf] hover:scale-125 transition-transform"><FaGithub size={22}/></a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2dd4bf] hover:scale-125 transition-transform"><FaTwitter size={22}/></a>
          </div>
        </div>

        {/* Description Content - FIXED ALIGNMENT */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-[#2dd4bf] font-mono tracking-widest text-sm uppercase">About Me</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white">Tahirah Roohi</h1>
            <p className="text-xl text-slate-400 font-medium">Cloud Applied Agentic AI Specialist</p>
          </div>

          <p className="text-slate-400 leading-relaxed text-lg max-w-2xl mx-auto md:mx-0">
            I am a developer deeply immersed in the <strong>GIAIC AI & Computing</strong> program, currently mastering
            Quarter 4's <strong>Agentic AI</strong> track. My work focuses on building autonomous AI agents and
            scalable cloud architectures using <strong>Python, FastAPI, Docker, and Next.js</strong>.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-slate-800">
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Status</span>
              <span className="text-white">GIAIC Q4 Student</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Experience</span>
              <span className="text-white">1+ Year in Web Dev</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Email</span>
              <span className="text-white text-sm md:text-base">roohitahirah@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Focus</span>
              <span className="text-white">Autonomous AI Agents</span>
            </div>
          </div>

          {/* Download Resume Button - FIXED FUNCTIONALITY */}
          <div className="pt-4">
            <a
              href="/Tahirah_Roohi_CV.pdf"
              download="Tahirah_Roohi_CV.pdf"
              className="inline-block"
            >
              <button className="px-10 py-4 bg-gradient-to-r from-[#05555c] to-[#186f78] text-white rounded-xl font-bold shadow-lg hover:shadow-[#2dd4bf]/20 transition-all hover:-translate-y-1 active:scale-95">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;