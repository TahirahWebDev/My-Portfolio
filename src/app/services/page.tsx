import { FaRobot, FaCode, FaCloud } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Agentic AI Solutions",
      icon: <FaRobot />,
      description: "Developing autonomous AI agents and intelligent workflows using the GIAIC Quarter 4 stack. I build systems that don't just chat, but execute tasks.",
      stats: "AI Agent Specialist",
      glow: "group-hover:shadow-[#2dd4bf]/20"
    },
    {
      title: "Full Stack Development",
      icon: <FaCode />,
      description: "Building robust, scalable web applications with Next.js and TypeScript. I specialize in high-performance frontends that connect seamlessly to AI backends.",
      stats: "Next.js & Tailwind Expert",
      glow: "group-hover:shadow-blue-500/20"
    },
    {
      title: "Cloud & API Engineering",
      icon: <FaCloud />,
      description: "Designing high-speed APIs with FastAPI and containerizing applications with Docker for seamless deployment on cloud platforms like Hugging Face.",
      stats: "Docker & FastAPI Specialist",
      glow: "group-hover:shadow-purple-500/20"
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">

      <section className="max-w-7xl mx-auto py-32 px-6">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[#2dd4bf] font-mono tracking-widest text-sm uppercase">Capabilities</h2>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#05555c]">Services</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Leveraging cutting-edge AI and Cloud technologies to build the next generation of digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#2dd4bf]/50 shadow-2xl ${service.glow}`}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-[#2dd4bf] text-3xl mb-6 group-hover:bg-[#05555c] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Bottom Badge */}
              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4bf]">
                  {service.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;