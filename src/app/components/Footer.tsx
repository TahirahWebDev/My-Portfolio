import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { FaGithub, FaLinkedinIn, FaTwitter, FaCode, FaRobot } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020617] border-t border-slate-800 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section with Image Logo */}
        <div className="space-y-6">
          <Link href="/" className="relative block h-12 w-40 transition-transform hover:scale-105">
            <Image
              src="/favicon.png" // Ensure this matches the filename in your public folder
              alt="Tahirah Roohi Logo"
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Full Stack AI Developer specializing in Cloud Applied Agentic AI. 
            Building the future of autonomous systems and modern web architectures.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/TahirahWebDev" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#2dd4bf] transition-all">
              <FaGithub size={20}/>
            </a>
            <a href="https://linkedin.com/in/tahirah-roohi/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#2dd4bf] transition-all">
              <FaLinkedinIn size={20}/>
            </a>
            <a href="https://twitter.com/Tahirah_webDev" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#2dd4bf] transition-all">
              <FaTwitter size={20}/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="text-slate-400 hover:text-[#2dd4bf] transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-slate-400 hover:text-[#2dd4bf] transition-colors">About Me</Link></li>
            <li><Link href="/portfolio" className="text-slate-400 hover:text-[#2dd4bf] transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="text-slate-400 hover:text-[#2dd4bf] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Specialization */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Focus Areas</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2 text-slate-400">
              <FaRobot className="text-[#05555c]" /> Agentic AI Agents
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <FaCode className="text-[#05555c]" /> Next.js & FastAPI
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <FaCode className="text-[#05555c]" /> Docker & Cloud
            </li>
          </ul>
        </div>

        {/* Status Section */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Current Status</h4>
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
            <p className="text-xs text-[#2dd4bf] font-mono mb-1">● Active</p>
            <p className="text-slate-300 text-sm font-medium">GIAIC Quarter 4 Student</p>
            <p className="text-slate-500 text-xs mt-1 italic">Cloud Applied Agentic AI Track</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs text-center md:text-left">
          © {currentYear} <span className="text-slate-300">Tahirah Roohi</span>. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;