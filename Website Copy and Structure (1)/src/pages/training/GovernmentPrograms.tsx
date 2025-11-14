import { Link } from 'react-router-dom';
import { Building2, GraduationCap, Users, Award, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function GovernmentPrograms() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-emerald-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">Government AI Training Programs</span>
            </div>
            <h1 className="text-white mb-6">National AI Workforce Development</h1>
            <p className="text-emerald-100 text-lg mb-8">
              Partner with us to build AI-ready public sectors and empower citizens with the skills needed for the digital economy. Trusted by government institutions across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition"
              >
                Discuss Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Ongoing Government Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cynea AI is the trusted training partner for forward-thinking governments building AI capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 border-2 border-emerald-600 p-8 rounded-xl">
              <Building2 className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Kenya School of Government</h3>
              <p className="text-gray-600 mb-4">
                Official training partner delivering AI readiness programs for Kenyan public sector leaders and administrators.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>250+ government officials trained</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>5 ministries and departments reached</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ongoing curriculum development</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-600 p-8 rounded-xl">
              <Building2 className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Zambian National Government</h3>
              <p className="text-gray-600 mb-4">
                Strategic engagement to develop national AI workforce strategy and implementation framework.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>National AI strategy consultation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Public sector training programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Digital transformation roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Government Training Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed for public sector needs and constraints
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <GraduationCap className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Public Sector AI Readiness</h3>
              <p className="text-gray-600 mb-4">
                Executive training for ministers, permanent secretaries, and senior officials on AI's potential for public service delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI for citizen service improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Government automation opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Policy and regulatory considerations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ethical AI frameworks for government</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-emerald-600">Target:</span> Senior leadership | <span className="text-emerald-600">Duration:</span> 2-3 days
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Ministry Training Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Department-specific AI training programs for line ministries looking to digitize operations and improve efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ministry-specific use case development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Staff upskilling at all levels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pilot project implementation support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Change management and adoption</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-emerald-600">Target:</span> Ministry teams | <span className="text-emerald-600">Duration:</span> 4-12 weeks
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-3">National AI Workforce Strategy</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive consultation and planning services to develop national AI skills development frameworks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Skills gap assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>National curriculum development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Train-the-trainer programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implementation roadmap and KPIs</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-emerald-600">Target:</span> National governments | <span className="text-emerald-600">Duration:</span> 6-12 months
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Award className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Citizen AI Literacy Programs</h3>
              <p className="text-gray-600 mb-4">
                Mass training initiatives to build AI awareness and basic skills among the general population.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Accessible, non-technical content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-language delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Online and community-based formats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Certification for participants</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-emerald-600">Target:</span> General public | <span className="text-emerald-600">Duration:</span> Ongoing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Cynea */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Why Governments Choose Cynea AI</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Emerging Markets Expertise</h4>
                    <p className="text-gray-600">Deep understanding of emerging market government contexts, constraints, and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Proven Track Record</h4>
                    <p className="text-gray-600">Our government partnerships provide real-world experience and industry expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Practical, Not Theoretical</h4>
                    <p className="text-gray-600">Training focused on real public sector challenges with immediate application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Scalable Solutions</h4>
                    <p className="text-gray-600">From executive workshops to national workforce programs, we scale to your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Ethical AI Framework</h4>
                    <p className="text-gray-600">Built-in focus on responsible AI adoption and citizen protection</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759884247142-028abd1e8ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjQyOTIwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Government Training Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable outcomes from our public sector partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-emerald-600 mb-2">200+</div>
              <div className="text-gray-900 mb-1">Officials Trained</div>
              <p className="text-gray-600 text-sm">Across Our Govt Partnership Programs</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-600 mb-2">15</div>
              <div className="text-gray-900 mb-1">Ministries Reached</div>
              <p className="text-gray-600 text-sm">Multiple departments per ministry</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-600 mb-2">2</div>
              <div className="text-gray-900 mb-1">National Partnerships</div>
              <p className="text-gray-600 text-sm">Kenya and Zambia governments</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-600 mb-2">95%</div>
              <div className="text-gray-900 mb-1">Satisfaction Rate</div>
              <p className="text-gray-600 text-sm">From participant feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Build Your Nation's AI Capabilities</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Partner with Cynea AI to develop a comprehensive AI workforce strategy for your country or institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition"
            >
              Discuss Partnership Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <p className="mt-6 text-emerald-100 text-sm">
            Flexible engagement models • Multi-year partnerships available • Train-the-trainer options
          </p>
        </div>
      </section>
    </div>
  );
}
