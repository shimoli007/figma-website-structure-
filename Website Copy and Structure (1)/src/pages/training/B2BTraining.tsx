import { Link } from 'react-router-dom';
import { Briefcase, Users, Target, Award, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function B2BTraining() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">Corporate Training (Business Solutions)</span>
            </div>
            <h1 className="text-white mb-6">Corporate AI Readiness & Upskilling</h1>
            <p className="text-blue-100 text-lg mb-8">
              Prepare your organization for the AI-driven future with customized training programs that deliver measurable business outcomes in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/use-cases" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">AI Training Built for Business Impact</h2>
              <p className="text-gray-600 mb-6">
                Our B2B training programs aren't academic exercises—they're hands-on, practical workshops designed to get your teams using AI tools productively within days of completion.
              </p>
              <p className="text-gray-600 mb-6">
                We work with enterprises across finance, agriculture, manufacturing, and professional services to identify automation opportunities, implement AI solutions, and measure ROI.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Industry-Specific Content</h4>
                    <p className="text-gray-600">Training tailored to your sector's unique AI opportunities and challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Measurable Outcomes</h4>
                    <p className="text-gray-600">Track productivity gains, cost savings, and automation adoption across your organization</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MjQwNjI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional training workshop"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Comprehensive Training Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From executive awareness to technical implementation, we offer programs for every level of your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-gray-900 mb-3">AI Readiness Workshops</h3>
              <p className="text-gray-600 mb-4">
                2-day intensive for leadership teams to understand AI's strategic potential and create implementation roadmaps.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI landscape and business opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use case identification workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ROI modeling and business cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implementation roadmap development</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-blue-600">Duration:</span> 2 days | <span className="text-blue-600">Format:</span> In-person or virtual
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Custom AI Implementation Training</h3>
              <p className="text-gray-600 mb-4">
                4-8 week programs to train your teams on specific AI tools relevant to your business operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hands-on training with real company data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom workflow automation setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Department-specific use cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ongoing support and optimization</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-blue-600">Duration:</span> 4-8 weeks | <span className="text-blue-600">Format:</span> Hybrid
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Industry-Specific Automation</h3>
              <p className="text-gray-600 mb-4">
                Specialized training for sectors with unique AI applications—agriculture, finance, manufacturing, logistics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sector-specific case studies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regulatory compliance considerations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Best practices from industry leaders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Peer networking opportunities</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-blue-600">Duration:</span> 3-5 days | <span className="text-blue-600">Format:</span> In-person workshops
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-gray-900 mb-3">AI Certification Programs</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive certification tracks for professionals looking to become AI champions within their organizations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Structured curriculum with assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Capstone project using company data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cynea AI Professional certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Alumni network and continuing education</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600">
                <span className="text-blue-600">Duration:</span> 12 weeks | <span className="text-blue-600">Format:</span> Virtual + in-person
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from organizations that invested in AI training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">Financial Services</div>
              <h4 className="text-gray-900 mb-2">Solar Company: Training Installers with AI</h4>
              <p className="text-gray-600 text-sm mb-4">
                Solar energy company trained 50 field installers on AI-powered diagnostic tools and automated reporting, reducing installation errors by 40% and cutting paperwork time by 70%.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 text-blue-600 mr-1" />
                <span>40+ employees trained</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">Agriculture Export</div>
              <h4 className="text-gray-900 mb-2">$120K Annual Savings</h4>
              <p className="text-gray-600 text-sm mb-4">
                Coffee exporter automated compliance documentation and inventory management, saving 20 hours/week and reducing errors by 90%.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 text-blue-600 mr-1" />
                <span>15 employees trained</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">Manufacturing</div>
              <h4 className="text-gray-900 mb-2">3X Faster Quality Control</h4>
              <p className="text-gray-600 text-sm mb-4">
                Food manufacturing company implemented AI-powered quality inspection after custom training, tripling throughput while maintaining standards.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 text-blue-600 mr-1" />
                <span>25 employees trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Training Methodology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven 4-phase approach that ensures lasting impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="text-gray-900 mb-2">Discovery</h4>
              <p className="text-gray-600 text-sm">
                Assess current capabilities and identify high-impact AI opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="text-gray-900 mb-2">Design</h4>
              <p className="text-gray-600 text-sm">
                Create customized curriculum with real company use cases
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="text-gray-900 mb-2">Delivery</h4>
              <p className="text-gray-600 text-sm">
                Hands-on workshops with immediate application to daily work
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h4 className="text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600 text-sm">
                90-day post-training support to ensure adoption and ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Upskill Your Team?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join leading enterprises already transforming their operations with AI-powered automation and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/resources" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Download Program Guide
            </Link>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            Custom pricing based on team size and program scope
          </p>
        </div>
      </section>
    </div>
  );
}
