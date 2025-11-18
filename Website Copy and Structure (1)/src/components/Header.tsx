import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-lg border-b border-[#E2E8F0] sticky top-0 z-50 shadow-sm">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-[#6C2BD9] mr-3 transition-transform duration-300 group-hover:scale-110">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L4 8V15C4 22.18 9.84 28.64 16 30C22.16 28.64 28 22.18 28 15V8L16 2Z" fill="url(#gradient1)" fillOpacity="0.2"/>
                <path d="M16 2L4 8V15C4 22.18 9.84 28.64 16 30C22.16 28.64 28 22.18 28 15V8L16 2Z" stroke="url(#gradient2)" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M16 10L12 12V16C12 18.21 13.79 20.43 16 21C18.21 20.43 20 18.21 20 16V12L16 10Z" fill="url(#gradient3)"/>
                <defs>
                  <linearGradient id="gradient1" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6C2BD9"/>
                    <stop offset="1" stopColor="#A855F7"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6C2BD9"/>
                    <stop offset="1" stopColor="#06B6D4"/>
                  </linearGradient>
                  <linearGradient id="gradient3" x1="12" y1="10" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7"/>
                    <stop offset="1" stopColor="#06B6D4"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-[#0F172A] text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Cynea AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-[#475569] hover:text-[#6C2BD9] transition-colors duration-200 font-medium"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              {productsOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl py-3 border-2 border-[#E2E8F0] animate-fade-in"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link to="/products/ai-automation" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#6C2BD9]/5 hover:to-transparent transition-all">
                    <div className="font-semibold text-[#0F172A] mb-1">AI & Automation Tools</div>
                    <div className="text-sm text-[#64748B]">Agentic AI solutions and productivity tools</div>
                  </Link>
                  <Link to="/products/blockchain-compliance" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#06B6D4]/5 hover:to-transparent transition-all">
                    <div className="font-semibold text-[#0F172A] mb-1">Blockchain & Traceability</div>
                    <div className="text-sm text-[#64748B]">Supply chain transparency solutions</div>
                  </Link>
                  <Link to="/products/digital-finance" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#A855F7]/5 hover:to-transparent transition-all">
                    <div className="font-semibold text-[#0F172A] mb-1">Digital Finance</div>
                    <div className="text-sm text-[#64748B]">Stablecoin payments and settlements</div>
                  </Link>
                  <Link to="/products/data-analytics" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#FF6B35]/5 hover:to-transparent transition-all">
                    <div className="font-semibold text-[#0F172A] mb-1">Data Analytics & Monetization</div>
                    <div className="text-sm text-[#64748B]">Turn verified data into revenue</div>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-[#475569] hover:text-[#6C2BD9] transition-colors duration-200 font-medium"
                onMouseEnter={() => setTrainingOpen(true)}
                onMouseLeave={() => setTrainingOpen(false)}
              >
                <span>AI Training</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              {trainingOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl py-3 border-2 border-[#E2E8F0] animate-fade-in"
                  onMouseEnter={() => setTrainingOpen(true)}
                  onMouseLeave={() => setTrainingOpen(false)}
                >
                  <Link to="/training/career-growth" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#6C2BD9]/5 hover:to-transparent transition-all">
                    <div className="font-semibold text-[#0F172A] mb-1">Career Growth Programs</div>
                    <div className="text-sm text-[#64748B]">AI Literacy & upskilling for individuals</div>
                  </Link>
                  <Link to="/training/b2b" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#06B6D4]/5 hover:to-transparent transition-all">
                    <div className="font-semibold text-[#0F172A] mb-1">Corporate Training</div>
                    <div className="text-sm text-[#64748B]">Business solutions and team upskilling</div>
                  </Link>
                  <Link to="/training/government" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#A855F7]/5 hover:to-transparent transition-all">
                    <div className="font-semibold text-[#0F172A] mb-1">Public Sector</div>
                    <div className="text-sm text-[#64748B]">Government & non-profit programs</div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/use-cases" className={`${isActive('/use-cases') ? 'text-[#6C2BD9]' : 'text-[#475569]'} hover:text-[#6C2BD9] transition-colors duration-200 font-medium`}>
              Use Cases
            </Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-[#6C2BD9]' : 'text-[#475569]'} hover:text-[#6C2BD9] transition-colors duration-200 font-medium`}>
              About
            </Link>
            <Link to="/talent-hub" className={`${isActive('/talent-hub') ? 'text-[#6C2BD9]' : 'text-[#475569]'} hover:text-[#6C2BD9] transition-colors duration-200 font-medium`}>
              Talent Hub
            </Link>
            <Link to="/resources" className={`${isActive('/resources') ? 'text-[#6C2BD9]' : 'text-[#475569]'} hover:text-[#6C2BD9] transition-colors duration-200 font-medium`}>
              Resources
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white font-semibold hover:shadow-lg hover:shadow-[#6C2BD9]/30 transition-all duration-300 hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#475569] hover:text-[#6C2BD9] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-white z-40 animate-fade-in overflow-y-auto">
            <div className="px-6 py-8 space-y-6">
              <div>
                <div className="text-[#0F172A] font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Products</div>
                <div className="pl-4 space-y-3">
                  <Link to="/products/ai-automation" className="block text-[#64748B] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    AI & Automation Tools
                  </Link>
                  <Link to="/products/blockchain-compliance" className="block text-[#64748B] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    Blockchain & Traceability
                  </Link>
                  <Link to="/products/digital-finance" className="block text-[#64748B] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    Digital Finance
                  </Link>
                  <Link to="/products/data-analytics" className="block text-[#64748B] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    Data Analytics
                  </Link>
                </div>
              </div>
              <div className="border-t border-[#E2E8F0] pt-6">
                <div className="text-[#0F172A] font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>AI Training</div>
                <div className="pl-4 space-y-3">
                  <Link to="/training/career-growth" className="block text-[#64748B] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    Career Growth Programs
                  </Link>
                  <Link to="/training/b2b" className="block text-[#64748B] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    Corporate Training
                  </Link>
                  <Link to="/training/government" className="block text-[#64748B] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    Public Sector
                  </Link>
                </div>
              </div>
              <div className="border-t border-[#E2E8F0] pt-6 space-y-4">
                <Link to="/use-cases" className="block text-[#475569] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                  Use Cases
                </Link>
                <Link to="/about" className="block text-[#475569] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link to="/talent-hub" className="block text-[#475569] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                  Talent Hub
                </Link>
                <Link to="/resources" className="block text-[#475569] hover:text-[#6C2BD9] font-medium transition-colors" onClick={() => setIsOpen(false)}>
                  Resources
                </Link>
              </div>
              <div className="border-t border-[#E2E8F0] pt-6">
                <Link to="/contact" className="block text-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white font-bold shadow-lg shadow-[#6C2BD9]/30" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
