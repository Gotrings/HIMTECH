import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-himtech-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="HIMTECH Logo"
              className="h-12 md:h-14 w-auto"
            />
            <span className="font-bold text-xl tracking-tight">
              <span className="text-white">HIM</span>
              <span className="text-himtech-red">TECH</span>
            </span>
          </Link>
          </div>
          <p className="text-gray-300 mb-6 max-w-md">
            Capturing moments and memories from our technology events, workshops, and 
            gatherings. HIMTECH celebrates innovation and connection through our stories.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/himtech.metaindustri/" className="text-gray-300 hover:text-himtech-lightBlue transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="humas@politeknikmeta.ac.id" className="text-gray-300 hover:text-himtech-lightBlue transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-gray-300 hover:text-himtech-lightBlue flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-300 hover:text-himtech-lightBlue flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" />
                <span>Photo Gallery</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-himtech-lightBlue flex items-center transition-colors">
                <ChevronRight className="h-4 w-4 mr-1" />
                <span>About Us</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-4">Contact</h3>
          <address className="not-italic text-gray-300 space-y-3">
            <p>HIMTECH Organization</p>
            <p>Politeknik Meta Industri Cikarang</p>
            <p>Building 1, Floor 1,2,3</p>
            <p className="text-himtech-lightBlue mt-4">humas@politeknikmeta.ac.id</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-700/50">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} HIMTECH. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
