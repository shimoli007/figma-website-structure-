import { Link } from 'react-router-dom';
import { Megaphone, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function MarketingAcademy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-pink-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">Marketing Professionals Academy</span>
            </div>
            <h1 className="text-white mb-6">AI-Powered Marketing That Delivers Results</h1>
            <p className="text-pink-100 text-lg mb-8">
              Learn to leverage AI for campaign automation, data-driven strategy, and measurable ROI. Transform from traditional marketer to AI-enhanced growth driver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition"
              >
                Join Next Cohort
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/use-cases" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition"
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
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzYyNDQ0MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI technology visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Marketing in the AI Era</h2>
              <p className="text-gray-600 mb-6">
                The marketing landscape has fundamentally changed. AI tools can now write copy, design creatives, analyze data, and optimize campaigns in real-time. Marketing professionals who don't adapt risk being left behind.
              </p>
              <p className="text-gray-600 mb-6">
                Our Marketing Academy teaches you to harness AI as your competitive advantage—automating repetitive tasks while focusing your creativity on strategy and storytelling.
              </p>
              <div className="bg-pink-50 border-l-4 border-pink-600 p-4 rounded">
                <p className="text-gray-700">
                  <span className="text-pink-700">Academy graduates report:</span> 50% faster campaign execution and 3x better data-driven decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Comprehensive Marketing AI Curriculum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              8-week intensive program covering all aspects of AI-enhanced marketing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Megaphone className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-gray-900 mb-3">AI Content Creation & Copywriting</h3>
              <p className="text-gray-600 mb-4">
                Master AI writing tools to create compelling copy, social media posts, email campaigns, and blog content at scale.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Prompt engineering for marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Brand voice consistency with AI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-channel content generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI editing and optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Data-Driven Marketing Strategy</h3>
              <p className="text-gray-600 mb-4">
                Use AI analytics to understand customer behavior, predict trends, and make smarter marketing decisions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customer segmentation with AI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Predictive analytics for campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Attribution modeling and ROI tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time performance optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Target className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Campaign Automation & Personalization</h3>
              <p className="text-gray-600 mb-4">
                Build automated marketing workflows that deliver personalized experiences to each customer at scale.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Marketing automation platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dynamic content personalization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Behavioral trigger campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email and SMS automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Zap className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-gray-900 mb-3">AI Tools for Creative Production</h3>
              <p className="text-gray-600 mb-4">
                Leverage AI design tools to create visual content, videos, and graphics without a full creative team.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI image generation and editing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Video content creation with AI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Social media asset automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Brand-consistent templates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-gray-900 mb-6">What You'll Achieve</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Launch Faster Campaigns</h4>
                    <p className="text-gray-600">Reduce campaign planning and execution time from weeks to days using AI automation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Make Data-Driven Decisions</h4>
                    <p className="text-gray-600">Stop guessing and start using AI analytics to optimize every marketing dollar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Scale Personalization</h4>
                    <p className="text-gray-600">Deliver 1-to-1 personalized experiences to thousands of customers automatically</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Prove Marketing ROI</h4>
                    <p className="text-gray-600">Use AI attribution modeling to demonstrate concrete business impact of your campaigns</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-gray-900 mb-3">Certification</h4>
                <p className="text-gray-600 mb-2">
                  Upon completion, you'll receive the <span className="text-pink-700">Cynea AI Marketing Professional</span> certificate, demonstrating your expertise in AI-powered marketing.
                </p>
                <p className="text-gray-600 text-sm">
                  Recognized by leading brands and agencies across Africa and the UK
                </p>
              </div>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-xl">
              <h3 className="text-white mb-6">Program Details</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Duration</div>
                  <div>8 weeks, part-time</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Time Commitment</div>
                  <div>6-8 hours per week</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Format</div>
                  <div>Live online sessions + self-paced modules</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Cohort Size</div>
                  <div>Limited to 25 participants</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Investment</div>
                  <div className="text-white">$1,200</div>
                  <div className="text-sm text-gray-400">Payment plans available</div>
                </div>
              </div>
              <Link to="/contact" className="block w-full text-center bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Graduate Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from marketing professionals who completed our program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-pink-600 mr-2" />
                <span className="text-pink-600">Digital Marketing Manager</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm italic">
                "The Academy completely transformed how I approach campaigns. I'm now launching personalized email sequences in hours instead of weeks, and our conversion rates are up 45%."
              </p>
              <p className="text-gray-900">Sarah K., Nairobi</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-pink-600 mr-2" />
                <span className="text-pink-600">Marketing Consultant</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm italic">
                "I can now offer AI-powered marketing services to my clients, which has doubled my consulting rates. The ROI on this program was immediate."
              </p>
              <p className="text-gray-900">James M., Lagos</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-pink-600 mr-2" />
                <span className="text-pink-600">Content Marketing Lead</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm italic">
                "AI content tools helped me scale from 2 blog posts per week to 10, while maintaining quality. Our organic traffic has tripled in just 3 months."
              </p>
              <p className="text-gray-900">Linda A., Accra</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Join the Next Generation of AI-Powered Marketers</h2>
          <p className="text-pink-100 mb-8 text-lg">
            Limited spots available for our next cohort starting soon. Don't get left behind in the AI revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-50 transition"
            >
              Enroll in Next Cohort
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/resources" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition"
            >
              Download Curriculum
            </Link>
          </div>
          <p className="mt-6 text-pink-100 text-sm">
            Early bird discount available • Payment plans offered • Money-back guarantee
          </p>
        </div>
      </section>
    </div>
  );
}
