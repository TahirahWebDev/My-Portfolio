"use client";
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Capture the form reference immediately to avoid the 'null' reset error
    const form = event.currentTarget; 
    const formData = new FormData(form);

    // Your Web3Forms Access Key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        form.reset(); // Safely reset the form using the captured reference
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">

      <section className="max-w-7xl mx-auto py-32 px-6">
        {/* Centered Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-[#2dd4bf] font-mono tracking-widest text-sm uppercase mb-2">Connection</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white italic">
            Get In <span className="text-[#05555c] not-italic">Touch</span>
          </h1>
          <div className="h-1 w-20 bg-[#05555c] rounded-full mt-4 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss the future of <strong>Agentic AI</strong>? 
            Let&apos;s build something intelligent together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">

          {/* Left Column: Contact Info & Socials */}
          <div className="flex-[40%] p-8 md:p-12 bg-gradient-to-br from-slate-900 to-[#020617]">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[#2dd4bf] group-hover:bg-[#05555c] group-hover:text-white transition-all">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">Email Me</p>
                      <p className="text-slate-200">roohitahirah@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[#2dd4bf] group-hover:bg-[#05555c] group-hover:text-white transition-all">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                      <p className="text-slate-200">Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Social Ecosystem</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebookF />, link: "https://web.facebook.com/profile.php?id=100094042236553" },
                    { icon: <FaTwitter />, link: "https://twitter.com/Tahirah_webDev" },
                    { icon: <FaInstagram />, link: "https://instagram.com/tahirah_roohi" },
                    { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/tahirah-roohi/" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#05555c] hover:text-white hover:-translate-y-1 transition-all shadow-lg"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="flex-[60%] p-8 md:p-12">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-700 py-3 text-white outline-none focus:border-[#2dd4bf] transition-all"
                  />
                  <label className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2dd4bf] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-700 py-3 text-white outline-none focus:border-[#2dd4bf] transition-all"
                  />
                  <label className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2dd4bf] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group pt-4">
                <textarea
                  name="message"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-slate-700 py-3 min-h-[150px] text-white outline-none focus:border-[#2dd4bf] transition-all resize-none"
                />
                <label className="absolute left-0 top-7 text-slate-500 text-sm transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#2dd4bf] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                  Project Details / Message
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#05555c] to-[#186f78] text-white rounded-xl font-bold tracking-widest hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-50"
              >
                SEND MESSAGE
              </button>
              
              {/* Submission Result Message */}
              {result && (
                <p className={`text-center mt-4 font-bold ${result.includes("Successfully") ? "text-[#2dd4bf]" : "text-red-500"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;