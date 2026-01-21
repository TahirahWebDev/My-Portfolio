import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "UAARN AI Agent 🤖",
      description: "A sophisticated autonomous AI agent system developed for the GIAIC Quarter 4 track, focusing on cloud-applied behaviors.",
      tags: ["Agentic AI", "Python", "Cloud"],
      github: "https://github.com/TahirahWebDev/UAARN",
      demo: "https://www.uaarn.com/",
    },
    {
      title: "Job Assistant AI",
      description: "An intelligent AI-powered assistant designed to automate job search tasks and optimize application workflows.",
      tags: ["Prompt Eng.", "FastAPI", "Next.js"],
      github: "https://github.com/TahirahWebDev/job-assistant-v1",
      demo: "https://job-assistant-v1.vercel.app/",
    },
    {
      title: "FocusFlow 🚀",
      description: "A productivity-focused application developed during Phase 2 of Hackathon 2. Optimized for seamless task management.",
      tags: ["Hackathon", "Next.js", "TypeScript"],
      github: "https://github.com/TahirahWebDev/hackathon2-phase2",
      demo: "https://todo-app-by-tahirah.vercel.app/",
    },
    {
      title: "Todo CLI System",
      description: "A robust command-line todo application exploring backend logic with TypeScript and API integrations.",
      tags: ["Node.js", "CLI", "TypeScript"],
      github: "https://github.com/TahirahWebDev/hackathon2-phase1",
      demo: "https://github.com/TahirahWebDev/hackathon2-phase1",
    },
    {
      title: "Furniro",
      description: "An interactive browser-based logic game built to master state management and DOM manipulation.",
      tags: ["TypeScript", "Logic", "Tailwind CSS"],
      github: "https://github.com/TahirahWebDev/hackathon-furniro",
      demo: "https://hackathon-furniro.vercel.app",
    },
    {
      title: "Fiverr Clone UI",
      description: "A detailed frontend replica of the Fiverr marketplace focusing on complex grid layouts and responsiveness.",
      tags: ["HTML", "CSS", "Frontend"],
      github: "https://github.com/TahirahWebDev/Fiverr",
      demo: "https://tahirahroohi271.github.io/Fiverr/", // Link to your deployed GitHub Page
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">

      <section className="max-w-7xl mx-auto py-32 px-6">
        {/* Header */}
<div className="mb-16 text-center"> {/* Changed to text-center */}
  <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Projects</h1>
  <div className="h-1 w-20 bg-[#05555c] rounded-full mb-6 mx-auto"></div> {/* Added mx-auto */}
  <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mx-auto"> {/* Added mx-auto */}
    A showcase of my journey through <strong>Full Stack Development</strong> and
    <strong> Cloud Applied Agentic AI</strong>.
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all hover:border-[#2dd4bf]/40 hover:bg-slate-900/60 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#2dd4bf] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="View Source Code"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="View Live Site"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-slate-800/80 text-slate-300 border border-slate-700 group-hover:border-[#2dd4bf]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;