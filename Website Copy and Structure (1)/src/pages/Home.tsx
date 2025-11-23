import { Link } from 'react-router-dom';
import { Database, Cpu, Shield, TrendingUp, DollarSign, Network, CheckCircle, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { HeroSection } from '../components/HeroSection';

export function Home() {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Modern Hero Section with Animations */}
      <HeroSection
        title="Empowering SMEs with AI & Blockchain"
        subtitle="Complete infrastructure stack for emerging market SMEs to compete globally. Train your team, digitize operations, automate workflows, trace products, and access digital finance."
        primaryCTA={{ text: 'Get Started', to: '/contact' }}
        secondaryCTA={{ text: 'View Use Cases', to: '/use-cases' }}
        stats={[
          { label: 'Trusted by', value: 'Government Partners' },
          { label: 'Supporting', value: '100+ SMEs' },
        ]}
      />

      {/* Infrastructure Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Complete Infrastructure Stack</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're not just a platform or tool—we're the full infrastructure that emerging market SMEs need to compete in the global economy. From AI training to digital finance, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Train */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Train</h3>
              <p className="text-gray-600 mb-4">
                AI readiness programs for teams, from government ministries to corporate enterprises and marketing professionals.
              </p>
              <Link to="/training/b2b" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Explore Training <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Digitize */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Digitize</h3>
              <p className="text-gray-600 mb-4">
                Transform paper-based operations into structured digital data ready for AI automation and analysis.
              </p>
              <Link to="/products/ai-automation" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Automate */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Automate</h3>
              <p className="text-gray-600 mb-4">
                AI agents and smart workflows that handle repetitive tasks, from customer service to inventory management.
              </p>
              <Link to="/products/ai-automation" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                View Solutions <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Trace */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Trace</h3>
              <p className="text-gray-600 mb-4">
                Blockchain-powered supply chain traceability for EUDR, CBAM compliance, and ESG reporting.
              </p>
              <Link to="/products/blockchain-compliance" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Explore Compliance <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Finance */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Finance</h3>
              <p className="text-gray-600 mb-4">
                Stablecoin payments and cross-border settlements that bypass currency volatility and high fees.
              </p>
              <Link to="/products/digital-finance" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Access Finance <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Monetize */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Monetize</h3>
              <p className="text-gray-600 mb-4">
                Turn your verified business data into insights that banks, corporates, and donors will pay for.
              </p>
              <Link to="/products/data-analytics" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Discover Analytics <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Why Cynea AI is Different</h2>
              <p className="text-gray-600 mb-8">
                We're the only platform converging AI, blockchain, and stablecoin infrastructure specifically designed for emerging market SMEs—backed by government partnerships and proven commercial traction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Government-Anchored Trust</h4>
                    <p className="text-gray-600">Partnerships with Kenya School of Government and Zambian National Government validate our approach and ensure compliance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">UK-Emerging Markets Expertise</h4>
                    <p className="text-gray-600">Deep understanding of cross-border trade challenges and regulatory requirements between emerging markets and developed economies, with UK-anchored operations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Full-Stack Integration</h4>
                    <p className="text-gray-600">Unlike point solutions, we integrate training, operations, compliance, and finance into one seamless ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Ethical AI & Compliance First</h4>
                    <p className="text-gray-600">Built-in EUDR, CBAM, and ESG compliance tools ensure your business meets international standards from day one.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1631864031824-d636e1dc5292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYyNDc0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Blockchain and digital infrastructure"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Trusted by Leaders Across Sectors</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              From government institutions to innovative SMEs, Cynea AI is powering digital transformation across UK-Emerging Markets corridors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-700 bg-opacity-50 p-8 rounded-xl">
              <Award className="w-12 h-12 text-blue-200 mb-4" />
              <h3 className="text-white mb-2">Government Partnerships</h3>
              <p className="text-blue-100">
                Official training partner of Kenya School of Government and Zambian National Government for AI workforce development.
              </p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-8 rounded-xl">
              <Award className="w-12 h-12 text-blue-200 mb-4" />
              <h3 className="text-white mb-2">Commercial Traction</h3>
              <p className="text-blue-100">
                Supporting SMEs across agriculture, coffee exports, food innovation, and multiple other verticals with proven results.
              </p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-8 rounded-xl">
              <Award className="w-12 h-12 text-blue-200 mb-4" />
              <h3 className="text-white mb-2">Top Talent Network</h3>
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
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Choose Your Path Forward</h2>
            <p className="text-gray-600">
              Whether you're an SME, government institution, enterprise, or marketing professional, we have solutions tailored for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition">
              <h4 className="text-gray-900 mb-2">For SMEs</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Get the full infrastructure to compete globally
              </p>
              <Link to="/products/ai-automation" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Explore Products <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition">
              <h4 className="text-gray-900 mb-2">For Government</h4>
              <p className="text-gray-600 mb-4 text-sm">
                National AI workforce development programs
              </p>
              <Link to="/training/government" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                View Programs <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition">
              <h4 className="text-gray-900 mb-2">For Enterprises</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Corporate AI readiness and upskilling
              </p>
              <Link to="/training/b2b" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-600 transition">
              <h4 className="text-gray-900 mb-2">For Marketers</h4>
              <p className="text-gray-600 mb-4 text-sm">
                AI automation for marketing campaigns
              </p>
              <Link to="/training/marketing" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Join Academy <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8">
            Join the SMEs, governments, and enterprises already building the future of borderless trade with Cynea AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/resources" 
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
