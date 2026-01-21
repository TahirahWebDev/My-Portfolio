import { 
  SiNextdotjs, SiFastapi, SiDocker, SiTypescript, 
  SiTailwindcss, SiPython, SiPostgresql, SiGithub,
  SiNodedotjs, SiExpress, SiFigma
} from "react-icons/si";
import { FaBrain, FaTerminal, FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    { name: "Full Stack Dev", icon: <FaLaptopCode />, level: "Professional" },
    { name: "Agentic AI", icon: <FaBrain />, level: "Specialist" },
    { name: "Node.js", icon: <SiNodedotjs />, level: "Backend" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Frontend" },
    { name: "FastAPI", icon: <SiFastapi />, level: "Backend" },
    { name: "Frontend Dev", icon: <FaCode />, level: "Specialist" },
    { name: "Backend Dev", icon: <FaServer />, level: "Specialist" },
    { name: "TypeScript", icon: <SiTypescript />, level: "Language" },
    { name: "Python", icon: <SiPython />, level: "Language" },
    { name: "Docker", icon: <SiDocker />, level: "DevOps" },
    { name: "Prompt Eng.", icon: <FaTerminal />, level: "AI Skills" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Database" },
  ];

  return (
    <section className="py-24 bg-[#020617] px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-[#2dd4bf] font-mono tracking-widest text-sm uppercase mb-2 tracking-[0.2em]">Technical Arsenal</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#05555c]">Competencies</span>
          </h1>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skillCategories.map((skill, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-[#2dd4bf]/40 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm"
            >
              <div className="text-4xl text-slate-400 group-hover:text-[#2dd4bf] group-hover:scale-110 transition-all duration-300 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight group-hover:text-white transition-colors">{skill.name}</h3>
              <span className="text-slate-500 text-[10px] font-mono mt-2 uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;