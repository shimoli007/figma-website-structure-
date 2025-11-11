import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-blue-500 mr-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L4 8V15C4 22.18 9.84 28.64 16 30C22.16 28.64 28 22.18 28 15V8L16 2Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M16 2L4 8V15C4 22.18 9.84 28.64 16 30C22.16 28.64 28 22.18 28 15V8L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M16 10L12 12V16C12 18.21 13.79 20.43 16 21C18.21 20.43 20 18.21 20 16V12L16 10Z" fill="currentColor"/>
                </svg>
              </span>
              <span className="text-white">Cynea AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building AI + Blockchain infrastructure for emerging market SMEs. Powering trusted, data-driven, borderless trade ecosystems across UK-Emerging Markets corridors.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@cynea.ai" className="text-gray-400 hover:text-blue-500 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/ai-automation" className="hover:text-white transition">AI & Automation</Link></li>
              <li><Link to="/products/blockchain-compliance" className="hover:text-white transition">Blockchain & Compliance</Link></li>
              <li><Link to="/products/digital-finance" className="hover:text-white transition">Digital Finance</Link></li>
              <li><Link to="/products/data-analytics" className="hover:text-white transition">Data & Analytics</Link></li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-white mb-4">AI Training</h3>
            <ul className="space-y-2">
              <li><Link to="/training/career-growth" className="hover:text-white transition">Career Growth</Link></li>
              <li><Link to="/training/b2b" className="hover:text-white transition">Corporate Training</Link></li>
              <li><Link to="/training/government" className="hover:text-white transition">Public Sector</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/talent-hub" className="hover:text-white transition">Talent Hub</Link></li>
              <li><Link to="/use-cases" className="hover:text-white transition">Use Cases</Link></li>
              <li><Link to="/resources" className="hover:text-white transition">Industry Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cynea AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>UK • Nairobi • Zambia</span>
              </div>
              <Link to="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
