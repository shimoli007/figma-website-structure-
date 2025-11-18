import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Cpu, Shield, TrendingUp, DollarSign, Network, CheckCircle, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEntranceSequence, useScrollAnimation, useHoverLift, useHoverScale } from '../hooks/useAnimations';

export function Home() {
  // Hero entrance animation
  const heroRef = useEntranceSequence(true);

  // Scroll animations for different sections
  useScrollAnimation('.animate-on-scroll', {
    animationType: 'fadeInUp',
    threshold: 0.2,
    duration: 800,
  });

  useScrollAnimation('.animate-scale', {
    animationType: 'scaleIn',
    threshold: 0.2,
    duration: 600,
  });

  // Hover effects for cards
  useHoverLift('.card-hover', -8, 300);
  useHoverScale('.btn-hover-scale', 1.02, 200);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white gradient-animated overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                data-animate="subtitle"
                className="inline-block bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full mb-6 glass"
              >
                <span className="text-sm">AI + Blockchain Infrastructure for Emerging Markets</span>
              </div>
              <h1 data-animate="title" className="text-white mb-6">
                Empowering SMEs with AI & Blockchain
              </h1>
              <p data-animate="description" className="text-blue-100 text-lg mb-8">
                Complete infrastructure stack for emerging market SMEs to compete globally. Train your team, digitize operations, automate workflows, trace products, and access digital finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  data-animate="cta"
                  to="/contact"
                  className="btn-hover-scale btn-hover-lift inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-smooth shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  data-animate="cta"
                  to="/use-cases"
                  className="btn-hover-scale btn-hover-lift inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-smooth"
                >
                  View Use Cases
                </Link>
              </div>
              <div data-animate="subtitle" className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-blue-100 text-sm">Trusted by</div>
                  <div className="text-white font-semibold">Government Partners</div>
                </div>
                <div className="border-l border-blue-400 h-12"></div>
                <div>
                  <div className="text-blue-100 text-sm">Supporting</div>
                  <div className="text-white font-semibold">100+ SMEs</div>
                </div>
              </div>
            </div>
            <div
              data-animate="image"
              className="relative bg-white p-8 rounded-lg shadow-2xl section-elevated gpu-accelerated"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#eca52e] text-white px-4 py-2 rounded-lg text-center shadow-md hover:shadow-lg transition-smooth transform hover:scale-105 cursor-default">
                      <div className="text-sm font-semibold">Train</div>
                    </div>
                    <div className="text-gray-400 text-2xl">→</div>
                    <div className="bg-[#5b1fa3] text-white px-4 py-2 rounded-lg text-center shadow-md hover:shadow-lg transition-smooth transform hover:scale-105 cursor-default">
                      <div className="text-sm font-semibold">Digitize</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#9333ea] text-white px-4 py-2 rounded-lg text-center shadow-md hover:shadow-lg transition-smooth transform hover:scale-105 cursor-default">
                      <div className="text-sm font-semibold">Automate</div>
                    </div>
                    <div className="text-gray-400 text-2xl">→</div>
                    <div className="bg-[#072048] text-white px-4 py-2 rounded-lg text-center shadow-md hover:shadow-lg transition-smooth transform hover:scale-105 cursor-default">
                      <div className="text-sm font-semibold">Trace</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#5b1fa3] text-white px-4 py-2 rounded-lg text-center shadow-md hover:shadow-lg transition-smooth transform hover:scale-105 cursor-default">
                      <div className="text-sm font-semibold">Finance</div>
                    </div>
                    <div className="text-gray-400 text-2xl">→</div>
                    <div className="bg-[#eca52e] text-white px-4 py-2 rounded-lg text-center shadow-md hover:shadow-lg transition-smooth transform hover:scale-105 cursor-default">
                      <div className="text-sm font-semibold">Monetize</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-gray-900 mb-4">Complete Infrastructure Stack</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're not just a platform or tool—we're the full infrastructure that emerging market SMEs need to compete in the global economy. From AI training to digital finance, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Train */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth gpu-accelerated animate-on-scroll">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-smooth hover:bg-blue-200">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-semibold">Train</h3>
              <p className="text-gray-600 mb-4">
                AI readiness programs for teams, from government ministries to corporate enterprises and marketing professionals.
              </p>
              <Link to="/training/b2b" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth hover:gap-2 group">
                Explore Training
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Digitize */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth gpu-accelerated animate-on-scroll">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-smooth hover:bg-green-200">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-semibold">Digitize</h3>
              <p className="text-gray-600 mb-4">
                Transform paper-based operations into structured digital data ready for AI automation and analysis.
              </p>
              <Link to="/products/ai-automation" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth hover:gap-2 group">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Automate */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth gpu-accelerated animate-on-scroll">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-smooth hover:bg-purple-200">
                <Network className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-semibold">Automate</h3>
              <p className="text-gray-600 mb-4">
                AI agents and smart workflows that handle repetitive tasks, from customer service to inventory management.
              </p>
              <Link to="/products/ai-automation" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth hover:gap-2 group">
                View Solutions
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trace */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth gpu-accelerated animate-on-scroll">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-smooth hover:bg-orange-200">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-semibold">Trace</h3>
              <p className="text-gray-600 mb-4">
                Blockchain-powered supply chain traceability for EUDR, CBAM compliance, and ESG reporting.
              </p>
              <Link to="/products/blockchain-compliance" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth hover:gap-2 group">
                Explore Compliance
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Finance */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth gpu-accelerated animate-on-scroll">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-smooth hover:bg-teal-200">
                <DollarSign className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-semibold">Finance</h3>
              <p className="text-gray-600 mb-4">
                Stablecoin payments and cross-border settlements that bypass currency volatility and high fees.
              </p>
              <Link to="/products/digital-finance" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth hover:gap-2 group">
                Access Finance
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Monetize */}
            <div className="card-hover bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth gpu-accelerated animate-on-scroll">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-smooth hover:bg-indigo-200">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-semibold">Monetize</h3>
              <p className="text-gray-600 mb-4">
                Turn your verified business data into insights that banks, corporates, and donors will pay for.
              </p>
              <Link to="/products/data-analytics" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth hover:gap-2 group">
                Discover Analytics
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-gray-900 mb-6">Why Cynea AI is Different</h2>
              <p className="text-gray-600 mb-8">
                We're the only platform converging AI, blockchain, and stablecoin infrastructure specifically designed for emerging market SMEs—backed by government partnerships and proven commercial traction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-gray-900 font-semibold">Government-Anchored Trust</h4>
                    <p className="text-gray-600">Partnerships with Kenya School of Government and Zambian National Government validate our approach and ensure compliance.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-gray-900 font-semibold">UK-Emerging Markets Expertise</h4>
                    <p className="text-gray-600">Deep understanding of cross-border trade challenges and regulatory requirements between emerging markets and developed economies, with UK-anchored operations.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-gray-900 font-semibold">Full-Stack Integration</h4>
                    <p className="text-gray-600">Unlike point solutions, we integrate training, operations, compliance, and finance into one seamless ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-gray-900 font-semibold">Ethical AI & Compliance First</h4>
                    <p className="text-gray-600">Built-in EUDR, CBAM, and ESG compliance tools ensure your business meets international standards from day one.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631864031824-d636e1dc5292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYyNDc0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Blockchain and digital infrastructure"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-smooth transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-white mb-4">Trusted by Leaders Across Sectors</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              From government institutions to innovative SMEs, Cynea AI is powering digital transformation across UK-Emerging Markets corridors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-dark p-8 rounded-xl card-hover gpu-accelerated animate-scale">
              <Award className="w-12 h-12 text-blue-200 mb-4" />
              <h3 className="text-white mb-2 font-semibold">Government Partnerships</h3>
              <p className="text-blue-100">
                Official training partner of Kenya School of Government and Zambian National Government for AI workforce development.
              </p>
            </div>
            <div className="glass-dark p-8 rounded-xl card-hover gpu-accelerated animate-scale">
              <Award className="w-12 h-12 text-blue-200 mb-4" />
              <h3 className="text-white mb-2 font-semibold">Commercial Traction</h3>
              <p className="text-blue-100">
                Supporting SMEs across agriculture, coffee exports, food innovation, and multiple other verticals with proven results.
              </p>
            </div>
            <div className="glass-dark p-8 rounded-xl card-hover gpu-accelerated animate-scale">
              <Award className="w-12 h-12 text-blue-200 mb-4" />
              <h3 className="text-white mb-2 font-semibold">Top Talent Network</h3>
              <p className="text-blue-100">
                Cynea Talent Hub nurtures the top 5% of emerging market tech talent to power innovation globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections for Different Audiences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-gray-900 mb-4">Choose Your Path Forward</h2>
            <p className="text-gray-600">
              Whether you're an SME, government institution, enterprise, or marketing professional, we have solutions tailored for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition-smooth card-hover gpu-accelerated animate-scale">
              <h4 className="text-gray-900 mb-2 font-semibold">For SMEs</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Get the full infrastructure to compete globally
              </p>
              <Link to="/products/ai-automation" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth group">
                Explore Products
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition-smooth card-hover gpu-accelerated animate-scale">
              <h4 className="text-gray-900 mb-2 font-semibold">For Government</h4>
              <p className="text-gray-600 mb-4 text-sm">
                National AI workforce development programs
              </p>
              <Link to="/training/government" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth group">
                View Programs
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition-smooth card-hover gpu-accelerated animate-scale">
              <h4 className="text-gray-900 mb-2 font-semibold">For Enterprises</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Corporate AI readiness and upskilling
              </p>
              <Link to="/training/b2b" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth group">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition-smooth card-hover gpu-accelerated animate-scale">
              <h4 className="text-gray-900 mb-2 font-semibold">For Marketers</h4>
              <p className="text-gray-600 mb-4 text-sm">
                AI automation for marketing campaigns
              </p>
              <Link to="/training/marketing" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium transition-smooth group">
                Join Academy
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8">
            Join the SMEs, governments, and enterprises already building the future of borderless trade with Cynea AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-hover-scale btn-hover-lift inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-smooth shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/resources"
              className="btn-hover-scale btn-hover-lift inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-smooth"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
