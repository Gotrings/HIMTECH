import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }, 100); // Delay 100ms
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
  ];

  return (
    // Ganti backdrop-blur dengan background solid untuk performa lebih baik
    <nav className={`fixed w-full z-50 transition-colors duration-300 bg-white border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/HIMTECH/images/logo.png" 
            alt="HIMTECH Logo"
            className="h-12 md:h-14 w-auto"
          />
          <span className="font-bold text-xl tracking-tight">
            <span className="text-himtech-blue">HIM</span>
            <span className="text-himtech-red">TECH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-himtech-lightBlue",
                location.pathname === link.path 
                  ? "text-himtech-lightBlue" 
                  : "text-himtech-blue dark:text-white"
              )}
            >
              <span className="story-link">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-himtech-blue dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-himtech-blue dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-himtech-navy shadow-lg animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center justify-between py-2 text-base font-medium transition-colors",
                  location.pathname === link.path 
                    ? "text-himtech-lightBlue" 
                    : "text-himtech-blue dark:text-white"
                )}
              >
                {link.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
