import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "GIAIC Peer",
      role: "AI Developer",
      text: "Tahirah's work on the UAARN AI Agent was impressive. Her understanding of autonomous workflows and FastAPI is far ahead of the curve."
    },
    {
      name: "Hackathon Lead",
      role: "Full Stack Engineer",
      text: "Collaborating on FocusFlow was a great experience. Tahirah's ability to handle complex TypeScript logic while maintaining a clean UI is remarkable."
    },
    {
      name: "Open Source Contributor",
      role: "Backend Specialist",
      text: "I reviewed her Todo CLI project; the code structure and handling of CORS issues showed a very professional approach to development."
    }
  ];

  return (
    <section className="py-24 bg-[#020617] px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-[#2dd4bf] font-mono tracking-widest text-sm uppercase mb-2">Social Proof</h2>
          <h1 className="text-4xl font-black text-white italic">Client & <span className="text-[#05555c] not-italic">Peer Reviews</span></h1>
          <div className="h-1 w-20 bg-[#05555c] rounded-full mt-4 mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm hover:border-[#2dd4bf]/30 transition-all group">
              <FaQuoteLeft className="text-[#05555c] text-3xl mb-6 group-hover:text-[#2dd4bf] transition-colors" />
              <p className="text-slate-400 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-[#2dd4bf] text-xs font-mono uppercase tracking-tighter">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;