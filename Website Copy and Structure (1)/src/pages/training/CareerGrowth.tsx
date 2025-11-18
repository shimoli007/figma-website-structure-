import { Link } from 'react-router-dom';
import { GraduationCap, Lightbulb, TrendingUp, Brain, CheckCircle, ArrowRight, Users } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function CareerGrowth() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#FF6B35] to-[#FF8C61] text-white py-32">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8C61]/20 border border-[#FF6B35]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm text-[#FFF7ED]">Career Growth Programs</span>
            </div>
            <h1 className="text-white mb-6 text-5xl font-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>AI Literacy & Upskilling for Professionals</h1>
            <p className="text-[#CBD5E1] text-lg mb-8">
              Advance your career with cutting-edge AI training. From foundational concepts to specialized skills in marketing and data science—transform your professional trajectory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-[#FF6B35] px-6 py-3 rounded-lg hover:bg-amber-50 transition"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/use-cases" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#FF6B35] transition"
              >
                Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Two Pathways to AI Mastery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're starting from scratch or looking to specialize, we have the right program for your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Literacy Course */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">1. AI Literacy Course</h3>
              <p className="text-gray-600 mb-6">
                Build a solid foundation in AI concepts, tools, and prompt engineering. Perfect for anyone looking to understand and leverage AI in their current role.
              </p>
              
              <h4 className="text-gray-900 mb-3">What You'll Learn:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>AI Fundamentals:</strong> Machine learning, neural networks, and how AI systems work
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Prompt Engineering:</strong> Master the art of communicating with AI tools for maximum effectiveness
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>AI Tools Ecosystem:</strong> ChatGPT, Claude, Midjourney, and specialized industry tools
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Ethical AI:</strong> Understanding bias, privacy, and responsible AI usage
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Practical Applications:</strong> Real-world projects to apply AI in your work
                  </span>
                </li>
              </ul>

              <div className="bg-white p-4 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[#0F172A]">Duration</div>
                    <div className="text-gray-600 text-sm">4-6 weeks</div>
                  </div>
                  <div>
                    <div className="text-[#0F172A]">Format</div>
                    <div className="text-gray-600 text-sm">Online + Live Sessions</div>
                  </div>
                  <div>
                    <div className="text-[#0F172A]">Level</div>
                    <div className="text-gray-600 text-sm">Beginner-Friendly</div>
                  </div>
                  <div>
                    <div className="text-[#0F172A]">Certificate</div>
                    <div className="text-gray-600 text-sm">Upon Completion</div>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="inline-flex items-center text-[#0F172A] hover:text-[#FF6B35]">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Upskilling Programs */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="text-gray-900 mb-4">2. Professional Upskilling</h3>
              <p className="text-gray-600 mb-6">
                Advanced specialization tracks in high-demand areas. Build expertise that commands premium salaries and opens new career opportunities.
              </p>
              
              <h4 className="text-gray-900 mb-3">Specialization Tracks:</h4>
              
              <div className="space-y-6">
                {/* Marketing Track */}
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="text-gray-900 mb-2 flex items-center">
                    <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white px-2 py-1 rounded text-xs mr-2">TRACK A</span>
                    AI-Powered Marketing
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Content generation & automation</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Social media automation tools</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Email campaign optimization</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">SEO & analytics with AI</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Customer segmentation & personalization</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Duration:</strong> 8 weeks • <strong>Projects:</strong> 4 portfolio pieces
                  </div>
                </div>

                {/* Data Science Track */}
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="text-gray-900 mb-2 flex items-center">
                    <span className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white px-2 py-1 rounded text-xs mr-2">TRACK B</span>
                    Data Science & Analytics
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Python for data analysis</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Machine learning fundamentals</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Data visualization & storytelling</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Predictive modeling</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Business intelligence tools</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Duration:</strong> 12 weeks • <strong>Projects:</strong> 3 capstone projects
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center text-[#FF6B35] hover:text-[#A855F7]">
                  Explore Tracks <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Career Transformation Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real outcomes from professionals who completed our programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#FF6B35] mb-3">Marketing Manager → AI Marketing Lead</div>
              <p className="text-gray-600 mb-4 text-sm">
                Completed AI-Powered Marketing track, now manages automated campaigns generating 3x more leads at half the cost.
              </p>
              <div className="text-[#0F172A]">+85% salary increase</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#FF6B35] mb-3">Business Analyst → Data Scientist</div>
              <p className="text-gray-600 mb-4 text-sm">
                After Data Science track, transitioned to predictive modeling role at fintech startup.
              </p>
              <div className="text-[#0F172A]">+120% salary increase</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#FF6B35] mb-3">Small Business Owner → AI Consultant</div>
              <p className="text-gray-600 mb-4 text-sm">
                Used AI Literacy knowledge to start consulting practice, now advising 12 SMEs on AI adoption.
              </p>
              <div className="text-[#0F172A]">New revenue stream</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Why Cynea Career Programs Stand Out</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Practical, Not Theoretical</h4>
                    <p className="text-gray-600 text-sm">
                      Every module includes real-world projects. You'll build a portfolio while learning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Expert Instructors</h4>
                    <p className="text-gray-600 text-sm">
                      Learn from practitioners actively building AI solutions for businesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#A855F7] to-[#C084FC] w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Career Support</h4>
                    <p className="text-gray-600 text-sm">
                      Job placement assistance, resume reviews, and connections to hiring companies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Flexible Learning</h4>
                    <p className="text-gray-600 text-sm">
                      Study at your own pace with on-demand content, plus live sessions for Q&A and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjI3NDExODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional training classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#0F172A] via-[#FF6B35] to-[#FF8C61] text-white">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6 text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>Start Your AI Career Transformation Today</h2>
          <p className="text-[#CBD5E1] mb-8 text-lg">
            Join hundreds of professionals who have advanced their careers through our AI training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-[#FF6B35] px-8 py-3 rounded-lg hover:bg-amber-50 transition"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#FF6B35] transition"
            >
              Schedule Consultation
            </Link>
          </div>
          <p className="mt-6 text-[#CBD5E1] text-sm">
            Next cohort starts in 3 weeks • Limited spots available • Flexible payment options
          </p>
        </div>
      </section>
    </div>
  );
}
