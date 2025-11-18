import { Link } from 'react-router-dom';
import { Shield, Scan, FileCheck, Globe, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function BlockchainCompliance() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#06B6D4] to-[#22D3EE] text-white py-32">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-gradient-to-r from-[#06B6D4]/20 to-[#22D3EE]/20 border border-[#06B6D4]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm text-[#E0F2FE]">Blockchain Smart Contracts & Traceability</span>
            </div>
            <h1 className="text-white mb-6 text-5xl font-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Trace Every Step, Meet Every Standard</h1>
            <p className="text-[#CBD5E1] text-lg mb-8">
              SaaS-powered blockchain traceability solutions for supply chain transparency. Ensure EUDR, CBAM compliance, and ESG reporting—building trust with international buyers and regulators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-[#06B6D4] px-6 py-3 rounded-lg hover:bg-gradient-to-br from-[#06B6D4]/5 to-[#22D3EE]/10 transition"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/use-cases" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#06B6D4] transition"
              >
                See It In Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NjI0MjEzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Supply chain and logistics"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Export Compliance Made Simple</h2>
              <p className="text-gray-600 mb-6">
                New EU regulations (EUDR, CBAM) require complete supply chain transparency. Without proof of sustainable sourcing and carbon tracking, your exports could be rejected.
              </p>
              <p className="text-gray-600 mb-6">
                Our blockchain platform creates an immutable record of your product journey from farm to port, automatically generating the compliance documentation international buyers demand.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">EU-Ready Compliance</h4>
                    <p className="text-gray-600">Automated EUDR and CBAM documentation that meets all regulatory requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Build Buyer Trust</h4>
                    <p className="text-gray-600">Verifiable proof of origin and sustainable practices that win premium contracts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Complete Traceability Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From farm gate to export, every transaction recorded on blockchain for permanent, tamper-proof transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Shield className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">Supply Chain Traceability</h3>
              <p className="text-gray-600 mb-4">
                Track products from origin to destination with blockchain-verified checkpoints at every stage.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>GPS-stamped location tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Photo and document verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Immutable transaction history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-party verification (farmers, processors, exporters)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <FileCheck className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">EUDR Compliance Automation</h3>
              <p className="text-gray-600 mb-4">
                Automatically generate EU Deforestation Regulation compliance reports with all required due diligence documentation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Geolocation plot verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Deforestation-free certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Risk assessment automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ready-to-submit compliance dossiers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Globe className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">CBAM Carbon Tracking</h3>
              <p className="text-gray-600 mb-4">
                Carbon Border Adjustment Mechanism reporting made easy with automated emissions calculation and documentation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Embedded carbon footprint calculation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transport emissions tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Processing and manufacturing impact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>EU-compliant CBAM reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Scan className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">QR-Based Provenance</h3>
              <p className="text-gray-600 mb-4">
                Consumer-facing transparency with scannable QR codes that reveal your product's complete journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dynamic QR code generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customizable transparency pages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Farmer and producer profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Brand storytelling tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Reporting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Automated ESG Reporting</h2>
              <p className="text-gray-600 mb-6">
                Environmental, Social, and Governance (ESG) metrics are no longer optional for businesses seeking investment or corporate partnerships. Our platform automatically collects and reports ESG data from your supply chain.
              </p>
              <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#22D3EE]/10 border-l-4 border-[#06B6D4] p-6 rounded mb-6">
                <h4 className="text-gray-900 mb-3">What We Track:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#06B6D4] mr-2 flex-shrink-0 mt-0.5" />
                    <span><span className="text-[#06B6D4]">Environmental:</span> Carbon emissions, water usage, waste reduction, renewable energy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#06B6D4] mr-2 flex-shrink-0 mt-0.5" />
                    <span><span className="text-[#06B6D4]">Social:</span> Fair wages, working conditions, community impact, gender diversity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#06B6D4] mr-2 flex-shrink-0 mt-0.5" />
                    <span><span className="text-[#06B6D4]">Governance:</span> Ethical sourcing, transparency, certifications, audit trails</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="inline-flex items-center text-[#06B6D4] hover:text-[#22D3EE]">
                Request ESG Demo <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1631864031824-d636e1dc5292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYyNDc0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Blockchain network digital infrastructure"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Proven Across Industries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From coffee to cocoa, our blockchain traceability is helping emerging market exporters meet international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-gray-900 mb-2">Coffee Exports</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Track beans from smallholder farms through processing and export, with full EUDR compliance.
              </p>
              <Link to="/use-cases" className="text-[#06B6D4] hover:text-[#22D3EE] inline-flex items-center text-sm">
                Read Case Study <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-gray-900 mb-2">Cocoa & Chocolate</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Prove deforestation-free sourcing and fair trade practices to premium EU buyers.
              </p>
              <Link to="/use-cases" className="text-[#06B6D4] hover:text-[#22D3EE] inline-flex items-center text-sm">
                Read Case Study <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-gray-900 mb-2">Organic Agriculture</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Blockchain-verified organic certification and pesticide-free production records.
              </p>
              <Link to="/use-cases" className="text-[#06B6D4] hover:text-[#22D3EE] inline-flex items-center text-sm">
                Read Case Study <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#0F172A] via-[#06B6D4] to-[#22D3EE] text-white">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6 text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>Ready for Export Compliance?</h2>
          <p className="text-[#CBD5E1] mb-8 text-lg">
            Don't let regulatory requirements block your international growth. Get blockchain-verified compliance in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#06B6D4] px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            >
              Request Compliance Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#06B6D4] transition-all duration-300 font-semibold"
            >
              Download EUDR Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
