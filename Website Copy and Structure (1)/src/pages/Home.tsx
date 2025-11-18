import { Link } from 'react-router-dom';
import { ArrowRight, Database, Cpu, Shield, TrendingUp, DollarSign, Network, CheckCircle, Award, Sparkles, Zap, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Bold & Innovative */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 dot-grid"></div>
        <div className="absolute inset-0 gradient-mesh"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#6C2BD9] to-[#A855F7] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          {/* 60/40 Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content - 60% */}
            <div className="lg:col-span-7 animate-fade-up">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6C2BD9]/20 to-[#A855F7]/20 border border-[#A855F7]/30 mb-8 animate-scale-in">
                <Sparkles className="w-4 h-4 text-[#A855F7]" />
                <span className="tagline text-[#A855F7]">AI + Blockchain Infrastructure</span>
              </div>

              {/* Hero Heading - Massive & Bold */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 animate-fade-up delay-100" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="bg-gradient-to-r from-white via-[#A855F7] to-[#06B6D4] bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                <span className="text-white">Emerging Market</span>
                <br />
                <span className="bg-gradient-to-r from-[#06B6D4] to-[#A855F7] bg-clip-text text-transparent">
                  SMEs
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-[#CBD5E1] leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
                Complete AI and blockchain infrastructure stack to compete globally. Train teams, digitize operations, automate workflows, ensure compliance, and access digital finance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white hover:shadow-2xl hover:shadow-[#6C2BD9]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/use-cases"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#CBD5E1]/30 text-white hover:bg-white/10 hover:border-[#A855F7] transition-all duration-300"
                >
                  View Use Cases
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C2BD9]/20 to-[#A855F7]/20 border border-[#A855F7]/30 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#94A3B8]">Trusted by</div>
                    <div className="text-lg font-bold text-white">Government Partners</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-[#334155]"></div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06B6D4]/20 to-[#0891b2]/20 border border-[#06B6D4]/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#94A3B8]">Supporting</div>
                    <div className="text-lg font-bold text-white">100+ SMEs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual - 40% Glass Morphism Card */}
            <div className="lg:col-span-5 animate-fade-up delay-300">
              <div className="relative">
                {/* Glass Card with Gradient Border */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#6C2BD9] via-[#A855F7] to-[#06B6D4]">
                  <div className="bg-[#1E293B] rounded-2xl p-8 backdrop-blur-xl">
                    {/* Infrastructure Flow Visualization */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 group">
                          <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#ff5520] text-white font-semibold text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FF6B35]/50">
                            Train
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#64748B]" />
                        <div className="flex-1 group">
                          <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#6C2BD9] to-[#5a24b8] text-white font-semibold text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#6C2BD9]/50">
                            Digitize
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 group">
                          <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#9333ea] text-white font-semibold text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#A855F7]/50">
                            Automate
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#64748B]" />
                        <div className="flex-1 group">
                          <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] border-2 border-[#334155] text-white font-semibold text-center transform transition-all duration-300 group-hover:scale-105 group-hover:border-[#64748B]">
                            Trace
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 group">
                          <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#06B6D4] to-[#0891b2] text-white font-semibold text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#06B6D4]/50">
                            Finance
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#64748B]" />
                        <div className="flex-1 group">
                          <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#e05a2f] text-white font-semibold text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FF6B35]/50">
                            Monetize
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="mt-8 pt-6 border-t border-[#334155]">
                      <p className="text-[#94A3B8] text-sm text-center">
                        End-to-end infrastructure for global competitiveness
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#ff5520] text-white text-sm font-bold shadow-lg shadow-[#FF6B35]/50 animate-pulse">
                  Live Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stack */}
      <section className="relative py-32 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 dot-grid"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="tagline text-[#6C2BD9] mb-4 block">COMPLETE ECOSYSTEM</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Full Infrastructure Stack
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Not just a platform or tool—we're the complete infrastructure emerging market SMEs need to compete globally. From AI training to digital finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Train */}
            <div className="group relative bg-white p-10 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#FF6B35] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6B35]/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#ff5520] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Train</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                AI readiness programs for teams, from government ministries to corporate enterprises and marketing professionals.
              </p>
              <Link to="/training/b2b" className="inline-flex items-center text-[#6C2BD9] font-semibold hover:text-[#A855F7] group">
                Explore Training
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Digitize */}
            <div className="group relative bg-white p-10 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#6C2BD9] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6C2BD9]/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6C2BD9] to-[#5a24b8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Digitize</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Transform paper-based operations into structured digital data ready for AI automation and analysis.
              </p>
              <Link to="/products/ai-automation" className="inline-flex items-center text-[#6C2BD9] font-semibold hover:text-[#A855F7] group">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Automate */}
            <div className="group relative bg-white p-10 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#A855F7]/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#9333ea] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Automate</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                AI agents and smart workflows that handle repetitive tasks, from customer service to inventory management.
              </p>
              <Link to="/products/ai-automation" className="inline-flex items-center text-[#6C2BD9] font-semibold hover:text-[#A855F7] group">
                View Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trace */}
            <div className="group relative bg-white p-10 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#06B6D4] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#06B6D4]/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0891b2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Trace</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Blockchain-powered supply chain traceability for EUDR, CBAM compliance, and ESG reporting.
              </p>
              <Link to="/products/blockchain-compliance" className="inline-flex items-center text-[#6C2BD9] font-semibold hover:text-[#A855F7] group">
                Explore Compliance
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Finance */}
            <div className="group relative bg-white p-10 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#06B6D4] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#06B6D4]/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0e7490] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Finance</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Stablecoin payments and cross-border settlements that bypass currency volatility and high fees.
              </p>
              <Link to="/products/digital-finance" className="inline-flex items-center text-[#6C2BD9] font-semibold hover:text-[#A855F7] group">
                Access Finance
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Monetize */}
            <div className="group relative bg-white p-10 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#FF6B35] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6B35]/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#e05a2f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Monetize</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Turn your verified business data into insights that banks, corporates, and donors will pay for.
              </p>
              <Link to="/products/data-analytics" className="inline-flex items-center text-[#6C2BD9] font-semibold hover:text-[#A855F7] group">
                Discover Analytics
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators - Asymmetric 70/30 Layout */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Geometric Background */}
        <div className="geometric-bg"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content - 70% */}
            <div className="lg:col-span-7">
              <span className="tagline text-[#6C2BD9] mb-4 block">WHY CHOOSE US</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] bg-clip-text text-transparent">
                  Cynea AI
                </span> is Different
              </h2>
              <p className="text-xl text-[#64748B] mb-12 leading-relaxed">
                The only platform converging AI, blockchain, and stablecoin infrastructure specifically for emerging market SMEs—backed by government partnerships and proven traction.
              </p>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C2BD9]/10 to-[#A855F7]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-[#6C2BD9]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Government-Anchored Trust</h4>
                    <p className="text-[#64748B] leading-relaxed">Partnerships with Kenya School of Government and Zambian National Government validate our approach and ensure compliance.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06B6D4]/10 to-[#0891b2]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>UK-Emerging Markets Expertise</h4>
                    <p className="text-[#64748B] leading-relaxed">Deep understanding of cross-border trade challenges and regulatory requirements, with UK-anchored operations.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A855F7]/10 to-[#9333ea]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Full-Stack Integration</h4>
                    <p className="text-[#64748B] leading-relaxed">Unlike point solutions, we integrate training, operations, compliance, and finance into one seamless ecosystem.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35]/10 to-[#ff5520]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Ethical AI & Compliance First</h4>
                    <p className="text-[#64748B] leading-relaxed">Built-in EUDR, CBAM, and ESG compliance tools ensure your business meets international standards from day one.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - 30% */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#6C2BD9] via-[#A855F7] to-[#06B6D4] rounded-3xl blur opacity-25"></div>
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1631864031824-d636e1dc5292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYyNDc0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Blockchain and digital infrastructure"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Bold Gradient Background */}
      <section className="relative py-32 bg-gradient-to-br from-[#6C2BD9] via-[#A855F7] to-[#06B6D4] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 dot-grid opacity-20"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="tagline text-white/80 mb-4 block">PROVEN TRACK RECORD</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Trusted by Leaders Across Sectors
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              From government institutions to innovative SMEs, Cynea AI is powering digital transformation across UK-Emerging Markets corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <Award className="w-16 h-16 text-white/80 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Government Partnerships</h3>
              <p className="text-white/80 leading-relaxed">
                Official training partner of Kenya School of Government and Zambian National Government for AI workforce development.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <Award className="w-16 h-16 text-white/80 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Commercial Traction</h3>
              <p className="text-white/80 leading-relaxed">
                Supporting SMEs across agriculture, coffee exports, food innovation, and multiple other verticals with proven results.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <Award className="w-16 h-16 text-white/80 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Top Talent Network</h3>
              <p className="text-white/80 leading-relaxed">
                Cynea Talent Hub nurtures the top 5% of emerging market tech talent to power innovation globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections for Different Audiences */}
      <section className="relative py-32 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="tagline text-[#6C2BD9] mb-4 block">GET STARTED TODAY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Choose Your Path Forward
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              Whether you're an SME, government institution, enterprise, or marketing professional, we have solutions tailored for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products/ai-automation" className="group relative bg-white p-8 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#6C2BD9] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#6C2BD9]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-2xl font-bold text-[#0F172A] mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>For SMEs</h4>
              <p className="text-[#64748B] mb-4 relative z-10">
                Get the full infrastructure to compete globally
              </p>
              <span className="inline-flex items-center text-[#6C2BD9] font-semibold group-hover:text-[#A855F7]">
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link to="/training/government" className="group relative bg-white p-8 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#06B6D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#06B6D4]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-2xl font-bold text-[#0F172A] mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>For Government</h4>
              <p className="text-[#64748B] mb-4 relative z-10">
                National AI workforce development programs
              </p>
              <span className="inline-flex items-center text-[#6C2BD9] font-semibold group-hover:text-[#06B6D4]">
                View Programs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link to="/training/b2b" className="group relative bg-white p-8 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#A855F7]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-2xl font-bold text-[#0F172A] mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>For Enterprises</h4>
              <p className="text-[#64748B] mb-4 relative z-10">
                Corporate AI readiness and upskilling
              </p>
              <span className="inline-flex items-center text-[#6C2BD9] font-semibold group-hover:text-[#A855F7]">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link to="/training/marketing" className="group relative bg-white p-8 rounded-2xl border-2 border-[#E2E8F0] hover:border-[#FF6B35] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-2xl font-bold text-[#0F172A] mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>For Marketers</h4>
              <p className="text-[#64748B] mb-4 relative z-10">
                AI automation for marketing campaigns
              </p>
              <span className="inline-flex items-center text-[#6C2BD9] font-semibold group-hover:text-[#FF6B35]">
                Join Academy
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold and Compelling */}
      <section className="relative py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#6C2BD9] to-[#A855F7] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Transform <br />
            <span className="bg-gradient-to-r from-[#A855F7] to-[#06B6D4] bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-xl text-[#CBD5E1] mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the SMEs, governments, and enterprises already building the future of borderless trade with Cynea AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white hover:shadow-2xl hover:shadow-[#6C2BD9]/50 transition-all duration-300 hover:-translate-y-1"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl border-2 border-[#CBD5E1]/30 text-white hover:bg-white/10 hover:border-[#A855F7] transition-all duration-300"
            >
              Explore Resources
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#06B6D4]" />
              <span>Government Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#A855F7]" />
              <span>100+ SMEs Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
              <span>EUDR & CBAM Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
