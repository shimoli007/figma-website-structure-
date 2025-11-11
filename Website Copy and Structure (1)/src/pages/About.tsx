import { Link } from 'react-router-dom';
import { Target, Eye, Award, MapPin, Users, ArrowRight, Mic } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#072048] to-[#5b1fa3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Building Infrastructure for Global SME Success</h1>
            <p className="text-gray-300 text-lg mb-8">
              Cynea AI is more than a platform—we're the full-stack infrastructure that emerging market SMEs need to compete globally, powered by AI, blockchain, and digital finance technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <Eye className="w-12 h-12 text-[#072048] mb-4" />
              <h2 className="text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                A world where emerging market SMEs have the same digital infrastructure advantages as developed market enterprises—enabling trusted, data-driven, borderless trade that lifts entire economies.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <Target className="w-12 h-12 text-green-600 mb-4" />
              <h2 className="text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To power the next generation of emerging market exporters with AI training, productivity tools, blockchain traceability, and digital finance—delivering measurable business outcomes while building local tech capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story - Irene Otieno */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#eca52e] text-[#072048] px-4 py-2 rounded-full mb-4">
                <span className="text-sm">Founder & CEO</span>
              </div>
              <h2 className="text-gray-900 mb-4">Irene Otieno (UK)</h2>
              <h3 className="text-[#5b1fa3] mb-6">Analytical Chemist turned AI Entrepreneur</h3>
              
              <p className="text-gray-600 mb-4">
                Irene's journey from analytical chemistry to AI entrepreneurship brings a unique perspective to solving complex technological challenges for SMEs in emerging markets. Her background in HPLC, NMR, spectroscopy, and data precision instilled a commitment to accuracy and reliability that defines Cynea AI's approach.
              </p>
              <p className="text-gray-600 mb-4">
                Transitioning from the laboratory to the world of AI, data intelligence, and automation, Irene founded Cynea AI with a clear mission: turn complex digital and technological challenges into accessible and cost-effective solutions for SMEs in emerging markets.
              </p>
              <p className="text-gray-600 mb-4">
                Operating at the intersection of emerging market SME realities and UK digital trust ecosystems, Irene has built a company that bridges the gap between cutting-edge technology and practical business needs.
              </p>
              
              <div className="bg-white border-l-4 border-[#eca52e] p-6 rounded mb-6">
                <p className="text-gray-700 italic mb-4">
                  "Technology should not be the privilege of the few. I built Cynea to empower the many."
                </p>
                <div className="text-gray-900">— Irene Otieno, Founder & CEO</div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2">Global Recognition & Speaking Engagements</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center bg-[#072048] text-white px-3 py-1 rounded-full text-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      Estonia Digital Society
                    </span>
                    <span className="inline-flex items-center bg-[#5b1fa3] text-white px-3 py-1 rounded-full text-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      Latitude59
                    </span>
                    <span className="inline-flex items-center bg-[#9333ea] text-white px-3 py-1 rounded-full text-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      APAIC
                    </span>
                    <span className="inline-flex items-center bg-[#eca52e] text-[#072048] px-3 py-1 rounded-full text-sm">
                      <Mic className="w-3 h-3 mr-1" />
                      Women in AI UK
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-gray-900 mb-2">Advocacy</h4>
                  <p className="text-gray-600">
                    Women in STEM champion and digital inclusion advocate, working to ensure technology empowers rather than excludes.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#072048] to-[#5b1fa3] p-8 rounded-lg shadow-xl text-white">
                <h4 className="text-white mb-6">Strategic Advantages</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-[#eca52e] mb-1">Unique cross-border perspective</div>
                    <p className="text-blue-100 text-sm">
                      Building FROM emerging markets FOR global scale
                    </p>
                  </div>
                  <div>
                    <div className="text-[#eca52e] mb-1">Technical depth</div>
                    <p className="text-blue-100 text-sm">
                      Chemistry background brings precision to AI/data solutions
                    </p>
                  </div>
                  <div>
                    <div className="text-[#eca52e] mb-1">Government trust</div>
                    <p className="text-blue-100 text-sm">
                      Established relationships across UK, Kenya, Uganda, Zambia
                    </p>
                  </div>
                  <div>
                    <div className="text-[#eca52e] mb-1">Investor-ready</div>
                    <p className="text-blue-100 text-sm">
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
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#072048]" />
              </div>
              <h3 className="text-gray-900 mb-2">Trust & Transparency</h3>
              <p className="text-gray-600">
                We build systems that create verifiable trust through blockchain and open reporting—no hidden processes or black boxes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Empowerment</h3>
              <p className="text-gray-600">
                We don't just provide tools—we train people to use them, building long-term capability rather than dependency.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#9333ea]" />
              </div>
              <h3 className="text-gray-900 mb-2">Impact Over Scale</h3>
              <p className="text-gray-600">
                We measure success by the businesses we transform, not just the revenue we generate.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest technical and ethical standards—our clients' success depends on it.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Emerging Markets First</h3>
              <p className="text-gray-600">
                We design for emerging market contexts and constraints, then export these solutions globally.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Collaborative Growth</h3>
              <p className="text-gray-600">
                We succeed when our clients, partners, and talent community succeed—growth is collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">UK-Emerging Markets Focus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategically positioned to serve the growing trade and technology exchange between the UK and emerging markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MapPin className="w-12 h-12 text-[#072048] mb-4" />
              <h3 className="text-gray-900 mb-2">United Kingdom</h3>
              <p className="text-gray-600 mb-4">
                UK-registered company providing strategic partnerships and market access for emerging market exporters.
              </p>
              <p className="text-gray-700 text-sm">
                Focus: Compliance, buyer relationships, fintech infrastructure
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MapPin className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-gray-900 mb-2">Kenya (Nairobi)</h3>
              <p className="text-gray-600 mb-4">
                Talent Hub serving as our innovation center and primary operational base in East Africa.
              </p>
              <p className="text-gray-700 text-sm">
                Focus: Product development, talent development, government partnerships
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MapPin className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-gray-900 mb-2">Zambia</h3>
              <p className="text-gray-600 mb-4">
                Government partnership hub working with national institutions on AI workforce development and digital transformation.
              </p>
              <p className="text-gray-700 text-sm">
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
            <h2 className="text-gray-900 mb-4">Recognition & Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by governments, validated by results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Award className="w-10 h-10 text-[#072048] mb-3" />
              <h4 className="text-gray-900 mb-2">Official Government Partner</h4>
              <p className="text-gray-600 text-sm mb-3">
                Recognized training provider for Kenya School of Government and strategic partner to Zambian National Government for AI workforce development.
              </p>
              <div className="text-[#072048] text-sm">2024-Present</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <Award className="w-10 h-10 text-green-600 mb-3" />
              <h4 className="text-gray-900 mb-2">SME Impact Leader</h4>
              <p className="text-gray-600 text-sm mb-3">
                Supporting 100+ SMEs across agriculture, coffee exports, and food innovation with measurable business outcomes.
              </p>
              <div className="text-green-600 text-sm">Ongoing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#072048] to-[#5b1fa3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Join Us in Building the Future of Global Trade</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Whether you're an SME looking to grow, a government building capacity, or a talented innovator seeking opportunity—we'd love to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#eca52e] text-[#072048] px-8 py-3 rounded-lg hover:bg-[#d69429] transition"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/talent-hub" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#072048] transition"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
