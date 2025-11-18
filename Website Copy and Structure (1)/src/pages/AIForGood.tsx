import { Link } from 'react-router-dom';
import { Rocket, BookOpen, Scale, ArrowRight, CheckCircle, Users, Globe, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AIForGood() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-emerald-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">Technology That Serves Humanity</span>
            </div>
            <h1 className="text-white mb-6">AI for Good</h1>
            <p className="text-emerald-100 text-lg mb-8">
              We believe technology should empower people, not replace them. Our mission is to deploy AI and blockchain solutions that create economic opportunity, democratize access to knowledge, and build fairer systems of governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition"
              >
                View Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Approach to Technology for Good</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don't just build technology—we build solutions that create lasting positive change through three core pillars
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Deploy Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">Deploy.</h3>
              <p className="text-gray-700 mb-6 text-lg">
                We design, deploy, and scale real economic and tech solutions that put people first and solve real problems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">AI automation tools that increase productivity while creating new job opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Blockchain traceability systems that enable SMEs to access premium markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Digital finance platforms that protect against currency volatility and reduce transaction costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Data analytics solutions that help businesses monetize verified information</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-emerald-200">
                <Link to="/products/ai-automation" className="text-emerald-600 hover:text-emerald-700 inline-flex items-center font-medium">
                  Explore Our Solutions <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Educate Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">Educate.</h3>
              <p className="text-gray-700 mb-6 text-lg">
                We engage students, business-leaders, economists, technologists, policy-makers, and governments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">AI literacy and upskilling programs for individuals transitioning to the AI economy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Corporate training on practical AI implementation for business operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Government partnerships to develop national AI workforce strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Talent hub programs nurturing the next generation of tech leaders from underserved communities</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <Link to="/training/career-growth" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium">
                  View Training Programs <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Govern Section */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">Govern.</h3>
              <p className="text-gray-700 mb-6 text-lg">
                We craft cutting-edge technology-driven policy solutions at all-levels of government.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Advisory services for national AI strategy development and implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Policy frameworks for ethical AI deployment and governance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Technology solutions for transparent, accountable public sector operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Cross-border digital trade infrastructure for emerging market corridors</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-purple-200">
                <Link to="/training/government" className="text-purple-600 hover:text-purple-700 inline-flex items-center font-medium">
                  Government Partnerships <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact By Numbers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Measuring Real Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our solutions create tangible, measurable improvements in people's lives and businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Users className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
              <div className="text-emerald-600 mb-2">200+</div>
              <div className="text-gray-900 mb-1">Officials Trained</div>
              <p className="text-gray-600 text-sm">In AI literacy and digital transformation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Globe className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-blue-600 mb-2">30+</div>
              <div className="text-gray-900 mb-1">SMEs Supported</div>
              <p className="text-gray-600 text-sm">Accessing global markets through our platform</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Heart className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <div className="text-purple-600 mb-2">Top 5%</div>
              <div className="text-gray-900 mb-1">Talent Selection</div>
              <p className="text-gray-600 text-sm">Of emerging market tech talent in our hub</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Rocket className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-teal-600 mb-2">$45K</div>
              <div className="text-gray-900 mb-1">Average Savings</div>
              <p className="text-gray-600 text-sm">Per SME using our digital finance tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Technology in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories of how our solutions are creating positive change
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-emerald-600 mb-3">Empowering Small Exporters</div>
              <h4 className="text-gray-900 mb-4 text-xl">From Local Farm to International Markets</h4>
              <p className="text-gray-600 mb-6">
                A Kenyan coffee cooperative used our blockchain traceability platform to prove their organic certification and fair trade practices. Within 6 months, they secured contracts with three European buyers at 40% premium prices, directly benefiting 200+ smallholder farmers.
              </p>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-1" />
                  <span>200+ farmers benefited</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-1" />
                  <span>40% price increase</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-blue-600 mb-3">Building Digital Skills</div>
              <h4 className="text-gray-900 mb-4 text-xl">From Student to AI Engineer</h4>
              <p className="text-gray-600 mb-6">
                A university graduate from an underserved community joined our Talent Hub with basic coding skills. After 6 months of hands-on training on real AI projects, they now lead development of customer service automation tools used by 100+ SMEs across East Africa.
              </p>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-1" />
                  <span>6-month program</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-1" />
                  <span>Now serving 100+ SMEs</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-purple-600 mb-3">Shaping National Strategy</div>
              <h4 className="text-gray-900 mb-4 text-xl">Government AI Workforce Development</h4>
              <p className="text-gray-600 mb-6">
                Our partnership with government institutions has trained over 200 public sector officials in AI strategy and implementation. These officials are now driving digital transformation initiatives across ministries, improving service delivery for millions of citizens.
              </p>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-1" />
                  <span>200+ officials trained</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-1" />
                  <span>5 ministries reached</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-teal-600 mb-3">Financial Inclusion</div>
              <h4 className="text-gray-900 mb-4 text-xl">Protecting Against Currency Volatility</h4>
              <p className="text-gray-600 mb-6">
                A textile exporter used our stablecoin payment platform to eliminate currency risk on a $300K contract with a UK buyer. Over 6 months, they saved $45K compared to traditional banking, money they reinvested in expanding production and hiring 15 new workers.
              </p>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-600 mr-1" />
                  <span>$45K saved</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-600 mr-1" />
                  <span>15 jobs created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-900 mb-6">Our Commitment to Responsible Technology</h2>
            <p className="text-gray-600 mb-8 text-lg">
              We believe technology companies have a responsibility to ensure their innovations benefit society as a whole, not just shareholders. That's why we commit to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-gray-900 mb-2 font-semibold">Inclusive Design</h4>
                <p className="text-gray-600 text-sm">
                  Building solutions accessible to businesses and individuals regardless of their technical sophistication or resources
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-gray-900 mb-2 font-semibold">Transparent Operations</h4>
                <p className="text-gray-600 text-sm">
                  Clear communication about how our AI systems work, what data we use, and how decisions are made
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-gray-900 mb-2 font-semibold">Ethical Standards</h4>
                <p className="text-gray-600 text-sm">
                  Adhering to the highest standards of data privacy, algorithmic fairness, and environmental responsibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Join Us in Building Technology for Good</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Whether you're a business looking for ethical tech solutions, a government shaping AI policy, or an individual wanting to contribute—there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/impact/talent-hub"
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition"
            >
              Join Our Talent Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
