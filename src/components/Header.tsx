import React, { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <h1 className={`ml-2 text-xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>AIVAC</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['home', 'about', 'history', 'what-we-do', 'why-aivac', 'how-it-works', 'features', 'prototype', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-blue-500 transition-colors ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.replace(/-/g, ' ')}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
          ) : (
            <MenuIcon className={`h-6 w-6 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <ul className="py-4">
            {['home', 'about', 'history', 'what-we-do', 'why-aivac', 'how-it-works', 'features', 'prototype', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.replace(/-/g, ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;