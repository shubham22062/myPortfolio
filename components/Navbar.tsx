"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // apply theme globally
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // load saved theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center">
      <nav className="border rounded-xl border-black mt-4 w-150 h-15 bg-black/85 backdrop-blur-md p-2">
        
        <div className="flex gap-6 p-1 items-center">

          <img src="/hacker.svg" alt="logo" className="h-8 w-8" />

          <Link to="home" smooth duration={500} spy offset={-100}
            className="text-white hover:underline cursor-pointer">
            Home
          </Link>

          <Link to="projects" smooth duration={500} spy offset={-100}
            className="text-white hover:underline cursor-pointer">
            Projects
          </Link>

          <Link to="experience" smooth duration={500} spy offset={-100}
            className="text-white hover:underline cursor-pointer">
            Experience
          </Link>

          {/* GitHub */}
          <a href="https://github.com/shubham22062" target="_blank" rel="noopener noreferrer">
            <img
              src="/github.svg"
              alt="github"
              className="h-7 w-7 bg-white rounded-full transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Resume */}
          <div className="border-r border-gray-100 pr-4 flex items-center">
            <a
              href="https://drive.google.com/file/d/1sAP8MyrbRANs-Cwxi_VY3onyfLw5Y60C/view?usp=drive_link"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7 text-white transition-transform duration-300 hover:scale-105"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </a>
          </div>

          {/* Contact */}
          <Link
            to="contact"
            smooth
            duration={500}
            spy
            offset={-100}
            className="border border-gray-200 bg-white text-black rounded-md px-2 py-1 transition-transform duration-300 hover:scale-105"
          >
            Contact
          </Link>

          {/* THEME TOGGLE ICON */}
          <button onClick={() => setDark(!dark)} className="ml-auto">

            {!dark ? (
              // MOON ICON
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-white transition-transform duration-300 hover:scale-105"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              // SUN ICON
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-white transition-transform duration-300 hover:scale-105"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}

          </button>

        </div>
      </nav>
    </div>
  );
}