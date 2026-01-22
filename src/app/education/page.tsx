import { FaGraduationCap, FaAward, FaCode } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      institution: "GIAIC (Governor Initiative)",
      degree: "Cloud Applied Agentic AI",
      duration: "2025 - Present",
      details: "Currently specializing in Quarter 4, focusing on building autonomous AI agents, multi-agent systems, and scalable cloud architectures.",
      status: "Quarter 4",
      icon: <FaGraduationCap />
    },
    {
      institution: "Sindh Board",
      degree: "Class XI (Computer Science)",
      duration: "2025 - Present",
      details: "Pursuing Higher Secondary School Certificate with a focus on core scientific and technical subjects.",
      status: "In Progress",
      icon: <FaGraduationCap />
    },
    {
      institution: "Sindh Board",
      degree: "Matriculation (Science Group)",
      duration: "Completed 2025",
      details: "Successfully completed secondary education with an A-1 Grade, demonstrating excellence in science and mathematics.",
      status: "A-1 Grade",
      icon: <FaAward />
    },
    {
      institution: "Saylani Mass IT Training (SMIT)",
      degree: "Web & Mobile App Development",
      duration: "Completed 2024",
      details: "Gained a strong foundation in modern web technologies including HTML5, CSS3, JavaScript, and responsive design.",
      status: "Certified",
      icon: <FaCode />
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">

      
      <section className="max-w-6xl mx-auto py-32 px-6">
        <header className="text-center mb-20">
          <h2 className="text-[#2dd4bf] font-mono tracking-widest text-sm uppercase mb-2">My Background</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Academic <span className="text-[#05555c]">Journey</span></h1>
          <div className="h-1 w-20 bg-[#05555c] rounded-full mb-6 mx-auto"></div>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A chronological look at my evolution from a Web Developer to an AI Specialist.
          </p>
        </header>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Line - Hidden on very small screens, centered on MD+ */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-slate-800 to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty space for alternating desktop view */}
                <div className="hidden md:block w-1/2"></div>

                {/* Icon Dot - Fixed positioning for mobile and desktop */}
                <div className="absolute left-4 md:left-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 text-[#2dd4bf] transform -translate-x-1/2 transition-all group-hover:border-[#2dd4bf] shadow-xl z-10">
                  {edu.icon}
                </div>

                {/* Content Card - Added ml-12 for mobile to clear the icon */}
                <div className="ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[42%] p-6 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-[#2dd4bf]/30 transition-all shadow-lg group">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                    <span className="text-[#2dd4bf] font-mono text-xs font-bold">{edu.duration}</span>
                    <span className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] uppercase font-bold tracking-widest border border-slate-700">
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight">{edu.degree}</h3>
                  <p className="text-[#05555c] font-medium mb-4">{edu.institution}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;