import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSlideInUp } from '../hooks/useAnimation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const location = useLocation();
  const headerRef = useSlideInUp({ duration: 800, distance: 20 });

  const isActive = (path: string) => location.pathname === path;

  return (
    <header ref={headerRef as any} className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-[#072048] mr-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L4 8V15C4 22.18 9.84 28.64 16 30C22.16 28.64 28 22.18 28 15V8L16 2Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M16 2L4 8V15C4 22.18 9.84 28.64 16 30C22.16 28.64 28 22.18 28 15V8L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M16 10L12 12V16C12 18.21 13.79 20.43 16 21C18.21 20.43 20 18.21 20 16V12L16 10Z" fill="currentColor"/>
              </svg>
            </span>
            <span className="text-gray-900">Cynea AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-[#072048] transition"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {productsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg py-2 border border-gray-100 animate-fadeIn"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link to="/products/ai-automation" className="block px-4 py-2 hover:bg-gray-50 transition transform hover:translate-x-1">
                    <div className="font-medium text-gray-900">AI & Automation Tools</div>
                    <div className="text-sm text-gray-500">Agentic AI solutions and productivity tools</div>
                  </Link>
                  <Link to="/products/blockchain-compliance" className="block px-4 py-2 hover:bg-gray-50 transition transform hover:translate-x-1">
                    <div className="font-medium text-gray-900">Blockchain Smart Contracts & Traceability</div>
                    <div className="text-sm text-gray-500">SaaS solutions for supply chain transparency</div>
                  </Link>
                  <Link to="/products/digital-finance" className="block px-4 py-2 hover:bg-gray-50 transition transform hover:translate-x-1">
                    <div className="font-medium text-gray-900">Digital Finance</div>
                    <div className="text-sm text-gray-500">Stablecoin payments and settlements</div>
                  </Link>
                  <Link to="/products/data-analytics" className="block px-4 py-2 hover:bg-gray-50 transition transform hover:translate-x-1">
                    <div className="font-medium text-gray-900">Data Analytics & Monetization</div>
                    <div className="text-sm text-gray-500">Turn verified data into revenue</div>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-[#072048] transition"
                onMouseEnter={() => setTrainingOpen(true)}
                onMouseLeave={() => setTrainingOpen(false)}
              >
                <span>AI Training</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {trainingOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg py-2 border border-gray-100 animate-fadeIn"
                  onMouseEnter={() => setTrainingOpen(true)}
                  onMouseLeave={() => setTrainingOpen(false)}
                >
                  <Link to="/training/career-growth" className="block px-4 py-2 hover:bg-gray-50 transition transform hover:translate-x-1">
                    <div className="font-medium text-gray-900">Career Growth Programs</div>
                    <div className="text-sm text-gray-500">AI Literacy & upskilling for individuals</div>
                  </Link>
                  <Link to="/training/b2b" className="block px-4 py-2 hover:bg-gray-50 transition transform hover:translate-x-1">
                    <div className="font-medium text-gray-900">Corporate Training</div>
                    <div className="text-sm text-gray-500">Business solutions and team upskilling</div>
                  </Link>
                  <Link to="/training/government" className="block px-4 py-2 hover:bg-gray-50 transition transform hover:translate-x-1">
                    <div className="font-medium text-gray-900">Public Sector</div>
                    <div className="text-sm text-gray-500">Government & non-profit programs</div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/use-cases" className={`${isActive('/use-cases') ? 'text-[#072048]' : 'text-gray-700'} hover:text-[#072048] transition`}>
              Use Cases
            </Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-[#072048]' : 'text-gray-700'} hover:text-[#072048] transition`}>
              About
            </Link>
            <Link to="/talent-hub" className={`${isActive('/talent-hub') ? 'text-[#072048]' : 'text-gray-700'} hover:text-[#072048] transition`}>
              Talent Hub
            </Link>
            <Link to="/resources" className={`${isActive('/resources') ? 'text-[#072048]' : 'text-gray-700'} hover:text-[#072048] transition`}>
              Industry Insights
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-[#eca52e] text-[#072048] px-4 py-2 rounded-lg hover:bg-[#d69429] transition transform hover:scale-105">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <div className="text-gray-900 mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  <Link to="/products/ai-automation" className="block text-gray-600 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                    AI & Automation Tools
                  </Link>
                  <Link to="/products/blockchain-compliance" className="block text-gray-600 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                    Blockchain Smart Contracts & Traceability
                  </Link>
                  <Link to="/products/digital-finance" className="block text-gray-600 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                    Digital Finance
                  </Link>
                  <Link to="/products/data-analytics" className="block text-gray-600 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                    Data Analytics & Monetization
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-gray-900 mb-2">AI Training</div>
                <div className="pl-4 space-y-2">
                  <Link to="/training/career-growth" className="block text-gray-600 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                    Career Growth Programs
                  </Link>
                  <Link to="/training/b2b" className="block text-gray-600 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                    Corporate Training
                  </Link>
                  <Link to="/training/government" className="block text-gray-600 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                    Public Sector
                  </Link>
                </div>
              </div>
              <Link to="/use-cases" className="block text-gray-700 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                Use Cases
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/talent-hub" className="block text-gray-700 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                Talent Hub
              </Link>
              <Link to="/resources" className="block text-gray-700 hover:text-[#072048]" onClick={() => setIsOpen(false)}>
                Industry Insights
              </Link>
              <Link to="/contact" className="block bg-[#eca52e] text-[#072048] px-4 py-2 rounded-lg hover:bg-[#d69429] transition text-center" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
