import { Link } from 'react-router-dom';
import { Target, Eye, Award, MapPin, Users, ArrowRight, Mic } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#6C2BD9] to-[#A855F7] text-white py-32">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="tagline text-[#06B6D4] mb-4 block">ABOUT CYNEA AI</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Building Infrastructure for Global SME Success
            </h1>
            <p className="text-xl text-[#CBD5E1] leading-relaxed mb-8">
              Cynea AI is more than a platform—we're the full-stack infrastructure that emerging market SMEs need to compete globally, powered by AI, blockchain, and digital finance technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#6C2BD9]/5 to-[#A855F7]/10 border border-[#6C2BD9]/20 p-8 rounded-xl hover:shadow-lg hover:shadow-[#6C2BD9]/10 transition-all duration-300">
              <Eye className="w-12 h-12 text-[#6C2BD9] mb-4" />
              <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h2>
              <p className="text-[#475569]">
                A world where emerging market SMEs have the same digital infrastructure advantages as developed market enterprises—enabling trusted, data-driven, borderless trade that lifts entire economies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#06B6D4]/10 border border-[#06B6D4]/20 p-8 rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/10 transition-all duration-300">
              <Target className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h2>
              <p className="text-[#475569]">
                To power the next generation of emerging market exporters with AI training, productivity tools, blockchain traceability, and digital finance—delivering measurable business outcomes while building local tech capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story - Irene Otieno */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white px-4 py-2 rounded-full mb-4 shadow-md">
                <span className="text-sm font-semibold">Founder & CEO</span>
              </div>
              <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Irene Otieno (UK)</h2>
              <h3 className="text-[#6C2BD9] mb-6 text-xl font-semibold">Analytical Chemist turned AI Entrepreneur</h3>
              
              <p className="text-gray-600 mb-4">
                Irene's journey from analytical chemistry to AI entrepreneurship brings a unique perspective to solving complex technological challenges for SMEs in emerging markets. Her background in HPLC, NMR, spectroscopy, and data precision instilled a commitment to accuracy and reliability that defines Cynea AI's approach.
              </p>
              <p className="text-gray-600 mb-4">
                Transitioning from the laboratory to the world of AI, data intelligence, and automation, Irene founded Cynea AI with a clear mission: turn complex digital and technological challenges into accessible and cost-effective solutions for SMEs in emerging markets.
              </p>
              <p className="text-gray-600 mb-4">
                Operating at the intersection of emerging market SME realities and UK digital trust ecosystems, Irene has built a company that bridges the gap between cutting-edge technology and practical business needs.
              </p>
              
              <div className="bg-white border-l-4 border-[#FF6B35] p-6 rounded-lg mb-6 shadow-md">
                <p className="text-[#475569] italic mb-4 text-lg">
                  "Technology should not be the privilege of the few. I built Cynea to empower the many."
                </p>
                <div className="text-[#0F172A] font-semibold">— Irene Otieno, Founder & CEO</div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Global Recognition & Speaking Engagements</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      Estonia Digital Society
                    </span>
                    <span className="inline-flex items-center bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      Latitude59
                    </span>
                    <span className="inline-flex items-center bg-gradient-to-r from-[#A855F7] to-[#C084FC] text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      APAIC
                    </span>
                    <span className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      Women in AI UK
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Advocacy</h4>
                  <p className="text-[#475569]">
                    Women in STEM champion and digital inclusion advocate, working to ensure technology empowers rather than excludes.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#0F172A] via-[#6C2BD9] to-[#A855F7] p-8 rounded-lg shadow-xl text-white">
                <h4 className="text-white mb-6 text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Strategic Advantages</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-[#06B6D4] mb-1 font-semibold">Unique cross-border perspective</div>
                    <p className="text-[#CBD5E1] text-sm">
                      Building FROM emerging markets FOR global scale
                    </p>
                  </div>
                  <div>
                    <div className="text-[#06B6D4] mb-1 font-semibold">Technical depth</div>
                    <p className="text-[#CBD5E1] text-sm">
                      Chemistry background brings precision to AI/data solutions
                    </p>
                  </div>
                  <div>
                    <div className="text-[#06B6D4] mb-1 font-semibold">Government trust</div>
                    <p className="text-[#CBD5E1] text-sm">
                      Established relationships across UK, Kenya, Uganda, Zambia
                    </p>
                  </div>
                  <div>
                    <div className="text-[#06B6D4] mb-1 font-semibold">Investor-ready</div>
                    <p className="text-[#CBD5E1] text-sm">
                      Proven ability to articulate complex tech to diverse stakeholders
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlcnxlbnwxfHx8fDE3NjI3NzI2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional business leader"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Core Values</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#6C2BD9]/10 to-[#A855F7]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#6C2BD9]/30 transition-all">
                <Award className="w-8 h-8 text-[#6C2BD9]" />
              </div>
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Trust & Transparency</h3>
              <p className="text-[#475569]">
                We build systems that create verifiable trust through blockchain and open reporting—no hidden processes or black boxes.
              </p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#06B6D4]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#06B6D4]/30 transition-all">
                <Users className="w-8 h-8 text-[#06B6D4]" />
              </div>
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Empowerment</h3>
              <p className="text-[#475569]">
                We don't just provide tools—we train people to use them, building long-term capability rather than dependency.
              </p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#A855F7]/10 to-[#C084FC]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#A855F7]/30 transition-all">
                <Target className="w-8 h-8 text-[#A855F7]" />
              </div>
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Impact Over Scale</h3>
              <p className="text-[#475569]">
                We measure success by the businesses we transform, not just the revenue we generate.
              </p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C61]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#FF6B35]/30 transition-all">
                <Award className="w-8 h-8 text-[#FF6B35]" />
              </div>
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Excellence</h3>
              <p className="text-[#475569]">
                We hold ourselves to the highest technical and ethical standards—our clients' success depends on it.
              </p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#22D3EE]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#06B6D4]/30 transition-all">
                <MapPin className="w-8 h-8 text-[#06B6D4]" />
              </div>
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Emerging Markets First</h3>
              <p className="text-[#475569]">
                We design for emerging market contexts and constraints, then export these solutions globally.
              </p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#6C2BD9]/10 to-[#A855F7]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#6C2BD9]/30 transition-all">
                <Users className="w-8 h-8 text-[#6C2BD9]" />
              </div>
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Collaborative Growth</h3>
              <p className="text-[#475569]">
                We succeed when our clients, partners, and talent community succeed—growth is collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>UK-Emerging Markets Focus</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Strategically positioned to serve the growing trade and technology exchange between the UK and emerging markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#6C2BD9]/10">
              <MapPin className="w-12 h-12 text-[#6C2BD9] mb-4" />
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>United Kingdom</h3>
              <p className="text-[#475569] mb-4">
                UK-registered company providing strategic partnerships and market access for emerging market exporters.
              </p>
              <p className="text-[#6C2BD9] text-sm font-medium">
                Focus: Compliance, buyer relationships, fintech infrastructure
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#06B6D4]/10">
              <MapPin className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Kenya (Nairobi)</h3>
              <p className="text-[#475569] mb-4">
                Talent Hub serving as our innovation center and primary operational base in East Africa.
              </p>
              <p className="text-[#06B6D4] text-sm font-medium">
                Focus: Product development, talent development, government partnerships
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#FF6B35]/10">
              <MapPin className="w-12 h-12 text-[#FF6B35] mb-4" />
              <h3 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Zambia</h3>
              <p className="text-[#475569] mb-4">
                Government partnership hub working with national institutions on AI workforce development and digital transformation.
              </p>
              <p className="text-[#FF6B35] text-sm font-medium">
                Focus: Public sector training, national AI strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Recognition & Partnerships</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Trusted by governments, validated by results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#6C2BD9]/5 to-[#A855F7]/10 p-6 rounded-lg border border-[#6C2BD9]/20 hover:shadow-lg hover:shadow-[#6C2BD9]/10 transition-all duration-300">
              <Award className="w-10 h-10 text-[#6C2BD9] mb-3" />
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Official Government Partner</h4>
              <p className="text-[#475569] text-sm mb-3">
                Recognized training provider for Kenya School of Government and strategic partner to Zambian National Government for AI workforce development.
              </p>
              <div className="text-[#6C2BD9] text-sm font-medium">2024-Present</div>
            </div>
            <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#06B6D4]/10 p-6 rounded-lg border border-[#06B6D4]/20 hover:shadow-lg hover:shadow-[#06B6D4]/10 transition-all duration-300">
              <Award className="w-10 h-10 text-[#06B6D4] mb-3" />
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>SME Impact Leader</h4>
              <p className="text-[#475569] text-sm mb-3">
                Supporting 100+ SMEs across agriculture, coffee exports, and food innovation with measurable business outcomes.
              </p>
              <div className="text-[#06B6D4] text-sm font-medium">Ongoing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#6C2BD9] to-[#A855F7] text-white">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Join Us in Building the Future of Global Trade</h2>
          <p className="text-[#CBD5E1] mb-8 text-lg">
            Whether you're an SME looking to grow, a government building capacity, or a talented innovator seeking opportunity—we'd love to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-[#FF6B35]/30 transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/talent-hub"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#6C2BD9] transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
