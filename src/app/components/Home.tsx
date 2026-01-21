import Career from '../components/Career';

export default function Home() {
  return (
    <main className="min-h-screen pt-40 bg-[#020617] text-slate-200 selection:bg-[#186f78] selection:text-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Animated Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#05555c] opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#186f78] opacity-10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#186f78]/30 bg-[#186f78]/10 text-[#2dd4bf] text-sm font-medium tracking-wider uppercase">
             Available for Freelance & AI Projects
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            Tahirah <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#05555c]">Roohi</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Architecting the future with <span className="text-white font-medium">Cloud Applied Agentic AI</span>. 
            I build intelligent, scalable systems using Next.js, FastAPI, and Docker.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <button className="px-8 py-4 bg-[#05555c] text-white rounded-2xl font-bold shadow-[0_0_20px_rgba(5,85,92,0.4)] hover:shadow-[0_0_30px_rgba(5,85,92,0.6)] hover:-translate-y-1 transition-all duration-300">
              Explore Projects
            </button>
            <button className="px-8 py-4 border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-slate-800 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Floating Career Stats Component */}
        <div className="w-full max-w-5xl mt-20">
            <Career />
        </div>
      </div>
    </main>
  );
}