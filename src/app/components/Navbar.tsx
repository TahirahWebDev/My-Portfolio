"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full h-[10vh] px-[8%] flex justify-between items-center z-[100] transition-all duration-300 ${
      scrolled 
        ? "bg-[#020617]/80 backdrop-blur-lg border-b border-slate-800" 
        : "bg-transparent"
    }`}>
      
      {/* Logo Image - REPLACED TEXT */}
      <Link href="/" className="relative h-10 w-32 md:h-12 md:w-40 transition-transform hover:scale-105 active:scale-95">
        <Image
          src="/favicon.png" // Ensure your logo file is in the 'public' folder
          alt="Tahirah Roohi Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#2dd4bf] ${
                  isActive ? "text-[#2dd4bf]" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Action Button */}
      <div className="flex items-center gap-6">
        <Link href="/contact" className="hidden md:block">
          <button className="bg-[#05555c] text-white px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all hover:bg-[#186f78] hover:shadow-[0_0_20px_rgba(5,85,92,0.3)] active:scale-95">
            Hire Me
          </button>
        </Link>

        {/* Hamburger Menu Icon */}
        <button 
          className="md:hidden text-white flex flex-col gap-1.5 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#020617] z-[-1] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-white hover:text-[#2dd4bf]"
          >
            {link.name}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
          <button className="mt-4 bg-[#05555c] text-white px-10 py-4 rounded-2xl font-bold">
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  );
}