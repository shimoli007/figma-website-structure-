import { Link } from 'react-router-dom';
import { FileText, BookOpen, Newspaper, Video, Download, ArrowRight } from 'lucide-react';

export function Resources() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Resources & Insights</h1>
            <p className="text-gray-300 text-lg mb-8">
              Explore our library of guides, research, and industry insights on AI, blockchain, and digital trade for emerging markets.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start with our most popular guides and reports
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-gray-600 mb-2">Whitepaper</div>
              <h3 className="text-gray-900 mb-3">Complete Guide to EUDR Compliance for Emerging Market Exporters</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Everything you need to know about the EU Deforestation Regulation, what it means for your business, and how to achieve compliance.
              </p>
              <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                <Download className="w-4 h-4 mr-1" />
                Download PDF
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-gray-600 mb-2">Guide</div>
              <h3 className="text-gray-900 mb-3">SME's Handbook to AI Automation</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Practical guide for small businesses looking to implement AI tools without technical expertise or large budgets.
              </p>
              <button className="text-green-600 hover:text-green-700 inline-flex items-center">
                <Download className="w-4 h-4 mr-1" />
                Download PDF
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-gray-600 mb-2">Research Report</div>
              <h3 className="text-gray-900 mb-3">State of Digital Trade in Africa 2025</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Annual report on trends, challenges, and opportunities in Africa's digital trade ecosystem.
              </p>
              <button className="text-purple-600 hover:text-purple-700 inline-flex items-center">
                <Download className="w-4 h-4 mr-1" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fresh perspectives on AI, blockchain, and emerging market innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>Blog Post • 5 min read</span>
              </div>
              <h3 className="text-gray-900 mb-3">Why Stablecoins Are Essential for Emerging Market Exporters</h3>
              <p className="text-gray-600 mb-4 text-sm">
                How currency volatility erodes profit margins and why stablecoin infrastructure offers a better solution than traditional forex hedging.
              </p>
              <Link to="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm">
                Read More <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>Blog Post • 7 min read</span>
              </div>
              <h3 className="text-gray-900 mb-3">Building AI-Ready Teams: Lessons from 250+ Government Officials</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Key insights from our partnership with Kenya School of Government on what it takes to prepare organizations for AI adoption.
              </p>
              <Link to="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm">
                Read More <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>Blog Post • 6 min read</span>
              </div>
              <h3 className="text-gray-900 mb-3">Blockchain Traceability: Beyond the Hype</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Real-world implementation lessons from helping coffee and cocoa exporters achieve EUDR compliance with blockchain.
              </p>
              <Link to="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm">
                Read More <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>Blog Post • 4 min read</span>
              </div>
              <h3 className="text-gray-900 mb-3">The Hidden Value in Your Business Data</h3>
              <p className="text-gray-600 mb-4 text-sm">
                How SMEs are monetizing verified operational data while maintaining privacy and control.
              </p>
              <Link to="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm">
                Read More <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers & Research */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Whitepapers & Research</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In-depth analysis and thought leadership
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-between">
              <div className="flex items-start">
                <FileText className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-900 mb-1">AI + Blockchain Convergence for Emerging Markets</h4>
                  <p className="text-gray-600 text-sm">Technical whitepaper on infrastructure design for low-connectivity environments</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 inline-flex items-center flex-shrink-0 ml-4">
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-between">
              <div className="flex items-start">
                <FileText className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-900 mb-1">Carbon Border Adjustment Mechanism (CBAM) Implementation Guide</h4>
                  <p className="text-gray-600 text-sm">Step-by-step guide for emerging market manufacturers exporting to EU</p>
                </div>
              </div>
              <button className="text-green-600 hover:text-green-700 inline-flex items-center flex-shrink-0 ml-4">
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-between">
              <div className="flex items-start">
                <FileText className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-900 mb-1">The SME Data Economy: Monetizing Verified Business Insights</h4>
                  <p className="text-gray-600 text-sm">Research on emerging data marketplaces and privacy-preserving monetization</p>
                </div>
              </div>
              <button className="text-purple-600 hover:text-purple-700 inline-flex items-center flex-shrink-0 ml-4">
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos & Webinars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Videos & Webinars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch and learn from our expert sessions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48 flex items-center justify-center">
                <Video className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">Webinar Recording • 45 min</div>
                <h4 className="text-gray-900 mb-2">Getting Started with AI Automation for SMEs</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Live demo and Q&A on implementing your first AI agents
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm">Watch Now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-green-600 to-emerald-800 h-48 flex items-center justify-center">
                <Video className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">Tutorial • 20 min</div>
                <h4 className="text-gray-900 mb-2">Setting Up Blockchain Traceability</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step walkthrough for supply chain tracking
                </p>
                <button className="text-green-600 hover:text-green-700 text-sm">Watch Now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-800 h-48 flex items-center justify-center">
                <Video className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">Webinar Recording • 60 min</div>
                <h4 className="text-gray-900 mb-2">National AI Strategy Development</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Insights from our government partnerships in Kenya and Zambia
                </p>
                <button className="text-purple-600 hover:text-purple-700 text-sm">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Media Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cynea AI in the news
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-gray-900 mb-2">TechCrunch Africa</div>
              <p className="text-gray-600 text-sm">"AI infrastructure for emerging markets"</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-gray-900 mb-2">Financial Times</div>
              <p className="text-gray-600 text-sm">"Blockchain traceability for compliance"</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-gray-900 mb-2">The Africa Report</div>
              <p className="text-gray-600 text-sm">"Government AI partnerships"</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-gray-900 mb-2">Bloomberg</div>
              <p className="text-gray-600 text-sm">"Stablecoins for emerging market trade"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Want to Contribute to Our Blog?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            We're always looking for guest contributors with expertise in AI, blockchain, and emerging market innovation.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
