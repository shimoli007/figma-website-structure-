import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Heart, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TalentHub() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-amber-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">Cynea Talent Hub, Nairobi</span>
            </div>
            <h1 className="text-white mb-6">Nurturing the Next Generation of Tech Leaders</h1>
            <p className="text-amber-100 text-lg mb-8">
              Our hub identifies the top 5% of East African tech talent from underserved communities and transform them into globally competitive engineers through expert training, real-world experience, and career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-amber-600 transition"
              >
                Apply for Talent Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Our Mission: Empowering Young Innovators</h2>
              <p className="text-gray-600 mb-6">
                Emerging market tech talent is world-class, but too often lacks the opportunities, mentorship, and infrastructure to reach its full potential. The Cynea Talent Hub changes that.
              </p>
              <p className="text-gray-600 mb-6">
                We identify brilliant young developers, designers, and product managers—particularly from underprivileged communities—and provide them with real-world projects, mentorship from industry leaders, and a pathway to meaningful careers in tech.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <p className="text-gray-700">
                  <span className="text-amber-700">Our commitment:</span> Every hub member works on live projects that serve real SMEs, gaining experience while building solutions that matter.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFmcmljYW4lMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2MjUwODg4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Young professionals"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">What Talent Hub Members Receive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More than just a job—a comprehensive development program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Real-World Projects</h3>
              <p className="text-gray-600 mb-4">
                Work on live Cynea AI projects serving SMEs globally, from AI automation to blockchain traceability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hands-on AI/ML development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full-stack web development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Award className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600 mb-4">
                Learn directly from Cynea's founders and experienced engineers who have built systems at scale.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekly code reviews and feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Career guidance and planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Industry best practices training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <TrendingUp className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Skills Development</h3>
              <p className="text-gray-600 mb-4">
                Continuous learning opportunities in cutting-edge technologies and methodologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI/ML training programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain certification courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cloud infrastructure training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Heart className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Community & Network</h3>
              <p className="text-gray-600 mb-4">
                Join a tight-knit community of ambitious peers who push each other to excellence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Peer learning and collaboration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Alumni network access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Industry networking events</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Star className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Career Opportunities</h3>
              <p className="text-gray-600 mb-4">
                High-performing hub members are offered full-time positions at Cynea or partner companies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Path to full-time employment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Partner company introductions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reference letters and portfolio</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Award className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Support & Resources</h3>
              <p className="text-gray-600 mb-4">
                Everything you need to succeed while you learn and grow with us.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Equipment and workspace provided</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Internet and resources access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Meals and refreshments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Success Stories From Our Hub</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Where our talent have gone after their time at Cynea
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-amber-600 mb-3">Full-Stack Developer</div>
              <p className="text-gray-600 mb-4 text-sm">
                Started as intern, now leads development for our blockchain traceability platform serving 50+ exporters.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 text-amber-600 mr-1" />
                <span>Now: Senior Engineer at Cynea</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-amber-600 mb-3">AI/ML Engineer</div>
              <p className="text-gray-600 mb-4 text-sm">
                Joined hub with basic Python skills, now builds AI models for customer service automation used by 100+ SMEs.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 text-amber-600 mr-1" />
                <span>Now: ML Engineer at Cynea</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-amber-600 mb-3">Product Designer</div>
              <p className="text-gray-600 mb-4 text-sm">
                Designed user interfaces for our SME dashboard, then got recruited by major UK fintech with our recommendation.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 text-amber-600 mr-1" />
                <span>Now: Senior Designer, London</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Top 5% of Emerging Market Tech Talent</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our rigorous selection process ensures only the most promising innovators join the hub, with special consideration for talented individuals from underprivileged backgrounds
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h4 className="text-gray-900 mb-2">Technical Assessment</h4>
              <p className="text-gray-600 text-sm">
                Coding challenges and portfolio review
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h4 className="text-gray-900 mb-2">Problem-Solving</h4>
              <p className="text-gray-600 text-sm">
                Real-world project scenarios
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h4 className="text-gray-900 mb-2">Cultural Fit</h4>
              <p className="text-gray-600 text-sm">
                Values alignment and team dynamics
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4</span>
              </div>
              <h4 className="text-gray-900 mb-2">Growth Mindset</h4>
              <p className="text-gray-600 text-sm">
                Passion for learning and improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Partner With Cynea Talent Hub</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access vetted, trained tech talent for your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h4 className="text-gray-900 mb-2">Hire Our Talent</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Get introductions to high-performing hub members ready for full-time roles
              </p>
              <Link to="/contact" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h4 className="text-gray-900 mb-2">Sponsor the Hub</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Support the next generation of innovators through equipment or training sponsorship
              </p>
              <Link to="/contact" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
                Partner With Us <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h4 className="text-gray-900 mb-2">Mentorship Opportunities</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Share your expertise with emerging talent through our mentorship program
              </p>
              <Link to="/contact" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
                Become a Mentor <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Join the Cynea Talent Hub</h2>
          <p className="text-amber-100 mb-8 text-lg">
            If you're a passionate developer, designer, or product manager from any background, we want to hear from you. We especially encourage applications from underprivileged communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 transition"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-600 transition"
            >
              Partner With Us
            </Link>
          </div>
          <p className="mt-6 text-amber-100 text-sm">
            Applications accepted on a rolling basis • Remote and in-person options available
          </p>
        </div>
      </section>
    </div>
  );
}
