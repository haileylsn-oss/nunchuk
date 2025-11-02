import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from '../../assets/logo.png'

const Hero = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out h-[74px] hover:duration-300 bg-white bg-opacity-0 hover:bg-opacity-100 shadow-sm">
      <div className="max-w-full mx-auto px-4 md:px-8 xl:px-[50px] flex justify-between items-center h-full xl:pr-12 w-full">
        {/* Logo */}
        <Link to="/wallet" className="flex-shrink-0 w-[202px]">
       <img src={logo} alt="" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center font-semibold h-full space-x-10">
          {/* Services Dropdown */}
          <div
            className="relative group cursor-pointer h-full flex items-center border-b-2 border-transparent hover:border-teal-500"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1">
              Services <ChevronDown className={`transition ${servicesOpen ? "rotate-180" : ""}`} />
            </div>
            {servicesOpen && (
              <div className="absolute left-0 top-[calc(100%+2px)] w-52 bg-gray-100 rounded-b-lg font-medium shadow-lg">
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">For individuals</Link>
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">For families & groups</Link>
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">For advisors</Link>
              </div>
            )}
          </div>

          <Link to="/wallet" className="border-b-2 border-transparent hover:border-teal-500 h-full flex items-center">How it works</Link>
          <Link to="/wallet" className="border-b-2 border-transparent hover:border-teal-500 h-full flex items-center">Inheritance planning</Link>
          <Link to="/wallet" className="border-b-2 border-transparent hover:border-teal-500 h-full flex items-center">About us</Link>

          {/* Resources Dropdown */}
          <div
            className="relative group cursor-pointer h-full flex items-center border-b-2 border-transparent hover:border-teal-500"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <div className="flex items-center gap-1">
              Resources <ChevronDown className={`transition ${resourcesOpen ? "rotate-180" : ""}`} />
            </div>
            {resourcesOpen && (
              <div className="absolute left-0 top-[calc(100%+2px)] w-52 bg-gray-100 rounded-b-lg font-medium shadow-lg">
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">Claiming inheritance</Link>
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">Blog</Link>
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">Developers</Link>
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">TAPSIGNER</Link>
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">Wallet recovery</Link>
                <Link to="/wallet" className="block py-3.5 px-5 hover:bg-gray-200">Miniscript recovery</Link>
              </div>
            )}
          </div>

          <Link to="/wallet" className="border-b-2 border-transparent hover:border-teal-500 h-full flex items-center">FAQ</Link>
        </nav>

        {/* Sign In Button (Desktop) */}
        <div className="hidden lg:flex w-[102px] justify-end items-center h-full">
          <Link to="/wallet" className="w-full">
            <button className="font-semibold rounded-[44px] h-12 px-6 text-center bg-black text-white hover:bg-gray-700 w-full">
              Sign in
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block lg:hidden w-[56px] h-[56px] text-teal-600"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 10H18V8H0V10ZM0 0V2H18V0H0Z" fill="currentColor" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[74px] left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-lg font-semibold">
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>How it works</Link>
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>Inheritance planning</Link>
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>About us</Link>
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>Resources</Link>
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>
              <button className="font-semibold rounded-[44px] h-12 px-6 bg-teal-600 text-white hover:bg-teal-700">
                Sign in
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Hero;
