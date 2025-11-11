import { Link } from 'react-router-dom';
import { Bot, BarChart3, Workflow, MessageSquare, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function AIAutomation() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-purple-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">AI & Automation Tools</span>
            </div>
            <h1 className="text-white mb-6">Intelligent Agents for SME Operations</h1>
            <p className="text-purple-100 text-lg mb-8">
              Transform your business with AI-powered agents that handle customer service, inventory management, analytics, and more—freeing your team to focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/use-cases" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition"
              >
                View Use Cases
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
              <h2 className="text-gray-900 mb-4">From Manual to Automated in Days</h2>
              <p className="text-gray-600 mb-6">
                Our AI agents are specifically designed for SMEs in emerging markets, understanding the unique challenges you face from inconsistent data to limited technical resources.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're processing customer inquiries, managing inventory, or analyzing sales patterns, our intelligent automation adapts to your business workflows and scales as you grow.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                <p className="text-gray-700">
                  <span className="text-purple-700">Average time savings:</span> 15-20 hours per week per team member on repetitive tasks
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzYyNDQ0MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI artificial intelligence visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Powerful AI Tools Built for SMEs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every tool is designed to work with the data you already have, no complex integrations or expensive consultants required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Bot className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-gray-900 mb-3">AI Customer Service Agents</h3>
              <p className="text-gray-600 mb-4">
                24/7 automated responses to common inquiries via WhatsApp, SMS, and web chat in multiple languages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-language support (English, Swahili, French)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seamless handoff to human agents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom training on your products/services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Productivity Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Real-time insights into sales, inventory, customer behavior, and operational efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Visual analytics that anyone can understand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Predictive alerts for low stock, late payments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile-first design for on-the-go access</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Workflow className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Smart Workflow Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate repetitive tasks like invoice processing, order confirmations, and inventory updates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No-code workflow builder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pre-built templates for common tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integration with WhatsApp, email, SMS</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MessageSquare className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Document Processing</h3>
              <p className="text-gray-600 mb-4">
                Convert receipts, invoices, and forms into structured digital data automatically.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>OCR for handwritten and printed text</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatic data validation and correction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Export to accounting systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Inventory Intelligence</h3>
              <p className="text-gray-600 mb-4">
                AI-powered forecasting to optimize stock levels and reduce waste.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Demand prediction based on seasonality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatic reorder recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Waste reduction alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Sales Analytics</h3>
              <p className="text-gray-600 mb-4">
                Understand customer patterns, identify growth opportunities, and optimize pricing.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customer segmentation and profiling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Product performance tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Revenue forecasting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agentic Solutions Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">AI Agentic Solutions in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our intelligent AI agents transform specific industries and workflows
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Edtech AI Tools */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-600 transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Edtech AI Tools</h3>
              <p className="text-gray-600 mb-4">
                AI teaching assistants, automated grading systems, and personalized learning path recommendations for educational institutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 student support chatbots</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated assignment grading</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Learning analytics dashboard</span>
                </li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 inline-flex items-center">
                Request Demo <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Automated ESG Reporting */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-600 transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Automated ESG Reporting</h3>
              <p className="text-gray-600 mb-4">
                AI agents that automatically collect, verify, and compile ESG metrics into compliance-ready reports for investors and regulators.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatic data collection</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>EUDR & CBAM compliance</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Investor-ready reports</span>
                </li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 inline-flex items-center">
                Request Demo <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Automated Marketing Products */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-600 transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Automated Marketing Products</h3>
              <p className="text-gray-600 mb-4">
                AI agents for content generation, social media management, email campaigns, and customer engagement automation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI content creation</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Campaign optimization</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated lead nurturing</span>
                </li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 inline-flex items-center">
                Request Demo <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Automate Your Business?</h2>
          <p className="text-purple-100 mb-8 text-lg">
            Join hundreds of SMEs already saving 15+ hours per week with Cynea AI automation tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition"
            >
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/use-cases" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
