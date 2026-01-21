import Navbar from "../components/Navbar";
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
      <Navbar />
      
      <section className="max-w-4xl mx-auto py-32 px-6">
        <header className="text-center mb-20">
          <h2 className="text-[#2dd4bf] font-mono tracking-widest text-sm uppercase mb-2">My Background</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Academic <span className="text-[#05555c]">Journey</span></h1>
          <div className="h-1 w-20 bg-[#05555c] rounded-full mb-6 mx-auto"></div>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A chronological look at my evolution from a Web Developer to an AI Specialist.
          </p>
        </header>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {education.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Icon Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 text-[#2dd4bf] absolute left-0 md:left-1/2 md:-ml-5 transition-all group-hover:border-[#2dd4bf] shadow-xl z-10">
                {edu.icon}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-[#2dd4bf]/30 transition-all shadow-lg">
                <div className="flex justify-between items-start mb-2">
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
      </section>
    </main>
  );
};

export default Education;