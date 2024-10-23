"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[13vh] max-h-[100px] px-[8%] flex justify-between items-center z-50 transition-all duration-500 bg-[#f6f9fe] shadow-lg">
      {/* Logo */}
      <div className="font-serif text-[30px] font-bold text-[#05555c] py-2 px-4 rounded-lg cursor-pointer">
        Tahirah
      </div>

      {/* Nav Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex items-center gap-6 md:gap-8 absolute md:relative top-[13vh] left-0 md:top-auto md:left-auto w-full md:w-auto bg-[#f6f9fe] md:bg-transparent flex-col md:flex-row py-5 md:py-0 transition-all duration-300`}
      >
        <li>
          <Link
            href="/"
            className="text-[#186f78] text-[15px] relative hover:text-[#05555c] transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-[#186f78] text-[15px] relative hover:text-[#05555c] transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="text-[#186f78] text-[15px] relative hover:text-[#05555c] transition-colors duration-300"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="text-[#186f78] text-[15px] relative hover:text-[#05555c] transition-colors duration-300"
          >
            Portfolio
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <Link href="/contact">
        <button className="hidden md:inline bg-[#05555c] text-[#f6f9fe] border border-transparent rounded-full text-[16px] py-2 px-4 tracking-wide transition-all duration-300 hover:bg-[#f6f9fe] hover:text-[#05555c] hover:border-[#05555c]">
          Contact
        </button>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div
        className="md:hidden flex flex-col justify-center items-center cursor-pointer space-y-2"
        onClick={toggleMenu}
      >
        <span className="block w-8 h-1 bg-[#05555c] rounded-lg"></span>
        <span className="block w-8 h-1 bg-[#05555c] rounded-lg"></span>
        <span className="block w-8 h-1 bg-[#05555c] rounded-lg"></span>
      </div>
    </nav>
  );
}
