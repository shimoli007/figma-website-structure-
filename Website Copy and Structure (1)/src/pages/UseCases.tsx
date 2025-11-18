import { Link } from 'react-router-dom';
import { Coffee, Leaf, Package, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function UseCases() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#6C2BD9] to-[#A855F7] text-white py-32">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="tagline text-[#06B6D4] mb-4 block">USE CASES</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Real Businesses, Real Results</h1>
            <p className="text-[#CBD5E1] text-xl leading-relaxed mb-8">
              See how SMEs across emerging markets are using Cynea AI to transform their operations, meet compliance requirements, and scale internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Use Case: Coffee Exports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8C61]/20 border border-[#FF6B35]/30 text-[#FF6B35] px-3 py-1 rounded-full mb-4 font-medium">
                <Coffee className="w-4 h-4 mr-2" />
                <span className="text-sm">Coffee Export</span>
              </div>
              <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Premium Coffee Exporter Achieves EUDR Compliance</h2>
              <div className="text-[#475569] mb-6">
                <p className="mb-4">
                  <span className="text-[#6C2BD9] font-semibold">Challenge:</span> A Kenyan specialty coffee exporter faced losing access to EU markets due to new EUDR requirements demanding proof of deforestation-free sourcing. Manual documentation across 200+ smallholder farmers was impossible.
                </p>
                <p className="mb-4">
                  <span className="text-[#6C2BD9] font-semibold">Solution:</span> Implemented Cynea's blockchain traceability platform with QR codes at each farm, tracking beans from harvest through processing and export. Automated EUDR compliance documentation.
                </p>
                <p>
                  <span className="text-[#6C2BD9] font-semibold">Impact:</span> Generated complete compliance dossiers in 3 weeks instead of 6 months, secured $1.2M EU contract, and now uses premium "full traceability" positioning to command 15% price premium.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#6C2BD9]/5 to-[#A855F7]/10 border border-[#6C2BD9]/20 p-6 rounded-lg mb-6">
                <h4 className="text-[#0F172A] mb-3 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[#6C2BD9] font-bold text-xl">3 weeks</div>
                    <div className="text-[#475569] text-sm">Time to compliance</div>
                  </div>
                  <div>
                    <div className="text-[#6C2BD9] font-bold text-xl">$1.2M</div>
                    <div className="text-[#475569] text-sm">New contract value</div>
                  </div>
                  <div>
                    <div className="text-[#6C2BD9] font-bold text-xl">200+</div>
                    <div className="text-[#475569] text-sm">Farmers onboarded</div>
                  </div>
                  <div>
                    <div className="text-[#6C2BD9] font-bold text-xl">15%</div>
                    <div className="text-[#475569] text-sm">Price premium</div>
                  </div>
                </div>
              </div>
              <Link to="/products/blockchain-compliance" className="text-[#6C2BD9] hover:text-[#A855F7] inline-flex items-center font-medium transition-colors">
                Learn about Blockchain Solutions <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1746367805612-bc46ff00bf9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBleHBvcnQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjI1MDg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coffee agriculture and export"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Edtech */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjc3MjY4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Education technology and teaching"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-gradient-to-r from-[#06B6D4]/20 to-[#22D3EE]/20 border border-[#06B6D4]/30 text-[#06B6D4] px-3 py-1 rounded-full mb-4 font-medium">
                <Leaf className="w-4 h-4 mr-2" />
                <span className="text-sm">Edtech</span>
              </div>
              <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Edtech Company Streamlines Operations with AI</h2>
              <div className="text-[#475569] mb-6">
                <p className="mb-4">
                  <span className="text-[#06B6D4] font-semibold">Challenge:</span> An emerging market edtech company struggled with manual student enrollment, grading, and communication across 500+ students and 20 instructors.
                </p>
                <p className="mb-4">
                  <span className="text-[#06B6D4] font-semibold">Solution:</span> Implemented Cynea's AI automation tools for student onboarding, automated grading, personalized learning recommendations, and AI teaching assistants.
                </p>
                <p>
                  <span className="text-[#06B6D4] font-semibold">Impact:</span> Reduced administrative time by 25 hours/week, improved student satisfaction by 40%, scaled to serve 1,200 students with the same team, and enhanced learning outcomes through personalized AI assistance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#22D3EE]/10 border border-[#06B6D4]/20 p-6 rounded-lg mb-6">
                <h4 className="text-[#0F172A] mb-3 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[#06B6D4] font-bold text-xl">25 hrs/week</div>
                    <div className="text-[#475569] text-sm">Time saved</div>
                  </div>
                  <div>
                    <div className="text-[#06B6D4] font-bold text-xl">40%</div>
                    <div className="text-[#475569] text-sm">Satisfaction increase</div>
                  </div>
                  <div>
                    <div className="text-[#06B6D4] font-bold text-xl">2.4x</div>
                    <div className="text-[#475569] text-sm">Student growth</div>
                  </div>
                  <div>
                    <div className="text-[#06B6D4] font-bold text-xl">0</div>
                    <div className="text-[#475569] text-sm">New admin hires</div>
                  </div>
                </div>
              </div>
              <Link to="/products/ai-automation" className="text-[#06B6D4] hover:text-[#22D3EE] inline-flex items-center font-medium transition-colors">
                Explore AI Automation Tools <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Food Innovation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-[#A855F7]/20 to-[#C084FC]/20 border border-[#A855F7]/30 text-[#A855F7] px-3 py-1 rounded-full mb-4 font-medium">
                <Package className="w-4 h-4 mr-2" />
                <span className="text-sm">Food Innovation</span>
              </div>
              <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Packaged Foods Startup Secures Funding with Data</h2>
              <div className="text-[#475569] mb-6">
                <p className="mb-4">
                  <span className="text-[#A855F7] font-semibold">Challenge:</span> A healthy snacks startup needed to demonstrate business viability to investors but lacked the data and financial infrastructure to prove traction.
                </p>
                <p className="mb-4">
                  <span className="text-[#A855F7] font-semibold">Solution:</span> Used Cynea's data analytics platform to track and monetize verified sales data, plus stablecoin payments to show stable revenue despite currency volatility.
                </p>
                <p>
                  <span className="text-[#A855F7] font-semibold">Impact:</span> Presented investors with blockchain-verified financials and sold market insights for additional $15K revenue. Secured $250K seed round citing data infrastructure as key differentiator.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#A855F7]/5 to-[#C084FC]/10 border border-[#A855F7]/20 p-6 rounded-lg mb-6">
                <h4 className="text-[#0F172A] mb-3 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[#A855F7] font-bold text-xl">$250K</div>
                    <div className="text-[#475569] text-sm">Seed funding raised</div>
                  </div>
                  <div>
                    <div className="text-[#A855F7] font-bold text-xl">$15K</div>
                    <div className="text-[#475569] text-sm">Data monetization</div>
                  </div>
                  <div>
                    <div className="text-[#A855F7] font-bold text-xl">100%</div>
                    <div className="text-[#475569] text-sm">Currency protection</div>
                  </div>
                  <div>
                    <div className="text-[#A855F7] font-bold text-xl">3 months</div>
                    <div className="text-[#475569] text-sm">To investment</div>
                  </div>
                </div>
              </div>
              <Link to="/products/data-analytics" className="text-[#A855F7] hover:text-[#C084FC] inline-flex items-center font-medium transition-colors">
                Discover Data Solutions <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjQ3NzA5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data analytics dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Use Cases Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>More Success Stories</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Cynea AI is transforming businesses across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#06B6D4]/10">
              <TrendingUp className="w-10 h-10 text-[#06B6D4] mb-4" />
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Fish Export to EU</h4>
              <p className="text-[#475569] mb-4 text-sm">
                Tanzanian fish exporter used stablecoin payments to protect against currency devaluation, saving $45K in 6 months on a $300K contract.
              </p>
              <div className="flex items-center text-sm text-[#06B6D4] font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>15% cost savings</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#6C2BD9]/10">
              <TrendingUp className="w-10 h-10 text-[#6C2BD9] mb-4" />
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Manufacturing Supply Chain</h4>
              <p className="text-[#475569] mb-4 text-sm">
                Kenyan manufacturer implemented blockchain traceability for raw materials, enabling ISO certification and winning 3 new corporate contracts.
              </p>
              <div className="flex items-center text-sm text-[#6C2BD9] font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>3 new B2B clients</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#FF6B35]/10">
              <TrendingUp className="w-10 h-10 text-[#FF6B35] mb-4" />
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Marketing Agency</h4>
              <p className="text-[#475569] mb-4 text-sm">
                Marketing agency completed AI training academy, now offers AI-powered services at 2x previous rates with 50% faster delivery.
              </p>
              <div className="flex items-center text-sm text-[#FF6B35] font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>100% revenue growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Aggregate Impact Across All Use Cases</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Measurable outcomes from SMEs using Cynea's platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] bg-clip-text text-transparent mb-2" style={{ fontFamily: 'var(--font-heading)' }}>100+</div>
              <div className="text-[#0F172A] mb-1 font-semibold">SMEs Supported</div>
              <p className="text-[#475569] text-sm">Across 6 countries</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent mb-2" style={{ fontFamily: 'var(--font-heading)' }}>$5M+</div>
              <div className="text-[#0F172A] mb-1 font-semibold">Trade Value Enabled</div>
              <p className="text-[#475569] text-sm">Cross-border transactions</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-[#A855F7] to-[#C084FC] bg-clip-text text-transparent mb-2" style={{ fontFamily: 'var(--font-heading)' }}>15-20 hrs</div>
              <div className="text-[#0F172A] mb-1 font-semibold">Weekly Time Saved</div>
              <p className="text-[#475569] text-sm">Per business on average</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] bg-clip-text text-transparent mb-2" style={{ fontFamily: 'var(--font-heading)' }}>95%</div>
              <div className="text-[#0F172A] mb-1 font-semibold">Client Satisfaction</div>
              <p className="text-[#475569] text-sm">Would recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#6C2BD9] to-[#A855F7] text-white">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Ready to Write Your Success Story?</h2>
          <p className="text-[#CBD5E1] mb-8 text-lg">
            Join the SMEs already transforming their businesses with Cynea AI's full-stack infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-[#FF6B35]/30 transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products/ai-automation"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#6C2BD9] transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
