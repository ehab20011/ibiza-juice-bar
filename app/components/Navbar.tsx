"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-white/100"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">IBIZA JUICE BAR</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/menu" className="text-gray-800 hover:text-yellow-600 transition-colors font-medium">
            Menu
          </Link>
          <Link href="/gallery" className="text-gray-800 hover:text-yellow-600 transition-colors font-medium">
            Gallery
          </Link>
          <Link 
            href="https://www.seamless.com/menu/ibiza-juice-bar-32-04b-30th-ave-queens/2299950"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <Link href="/menu" className="text-gray-800 hover:text-yellow-600 transition-colors font-medium">
            Menu
          </Link>
          <Link href="/gallery" className="text-gray-800 hover:text-yellow-600 transition-colors font-medium">
            Gallery
          </Link>
          <Link 
            href="https://www.seamless.com/menu/ibiza-juice-bar-32-04b-30th-ave-queens/2299950"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
