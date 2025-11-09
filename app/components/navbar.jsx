"use client";
// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#0d1224] border-b border-[#1a1443] shadow-lg">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-white text-2xl font-semibold tracking-wide no-underline flex items-center gap-2">
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Diptadeep</span>
            <span className="text-xs px-2 py-1 rounded-full border border-[#353951] text-[#d3d8e8]">Portfolio</span>
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a 
              href="#about" 
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) {
                  const navbarHeight = 80; // Approximate navbar height
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('experience');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('skills');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('education');
                if (element) {
                  const navbarHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;