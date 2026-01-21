import { FaRobot, FaCode, FaServer } from 'react-icons/fa';

export default function Career() {
  const stats = [
    {
      icon: <FaRobot />,
      title: "Agentic AI",
      desc: "GIAIC Q4 Specialist",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: <FaCode />,
      title: "Full Stack",
      desc: "Next.js & FastAPI",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: <FaServer />,
      title: "Cloud Native",
      desc: "Docker & Deployment",
      color: "from-purple-500/20 to-pink-500/20"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="relative group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl transition-all hover:border-[#2dd4bf]/50"
        >
          {/* Subtle hover gradient */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${stat.color} transition-opacity duration-500`}></div>
          
          <div className="relative z-10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-[#2dd4bf] text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{stat.title}</h3>
            <p className="text-slate-400 text-sm font-medium">{stat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}