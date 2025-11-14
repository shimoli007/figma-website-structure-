import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Users, Award, CheckCircle, ArrowRight, Database } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function DataAnalytics() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-indigo-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">Data Analytics & Monetization</span>
            </div>
            <h1 className="text-white mb-6">Turn Your Data Into Revenue</h1>
            <p className="text-indigo-100 text-lg mb-8">
              Your verified business data is valuable to banks, corporates, and impact investors. Our analytics platform helps you monetize your data insights—selling verified SME intelligence to financial institutions—while accessing predictive intelligence to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/use-cases" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
              >
                View Use Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjQ3NzA5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data analytics dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Data That Works For You</h2>
              <p className="text-gray-600 mb-6">
                Every transaction, compliance check, and operational metric you generate through Cynea creates verified data. Banks need this data to assess creditworthiness. Corporates need it to verify suppliers. Impact investors need it to measure social impact.
              </p>
              <p className="text-gray-600 mb-6">
                Instead of letting this valuable intelligence sit idle, our platform helps you package and monetize it—while maintaining full control over what you share and with whom.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded">
                <p className="text-gray-700">
                  <span className="text-indigo-700">Average SME data value:</span> $500-$2,000/year in verified insights that banks and corporates will pay for
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Comprehensive Analytics & Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From your own business intelligence to monetizable market insights, we provide the complete data stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BarChart3 className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-gray-900 mb-3">SME Insights Marketplace</h3>
              <p className="text-gray-600 mb-4">
                Sell anonymized, aggregated insights about your market, suppliers, and operations to interested parties.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You control what data is shared</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated privacy protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Revenue share on every sale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monthly passive income potential</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                AI-powered forecasting to optimize inventory, predict demand, and identify growth opportunities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Demand forecasting by product</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seasonal trend analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Price optimization recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Market opportunity alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Supplier Verification Network</h3>
              <p className="text-gray-600 mb-4">
                Access verified data on potential suppliers and partners, or offer your verified profile to buyers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain-verified track records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compliance and certification status</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance ratings and reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Partnership matching algorithms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Database className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Credit Score Enhancement</h3>
              <p className="text-gray-600 mb-4">
                Build a blockchain-backed credit profile that helps you access better financing terms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verified transaction history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Payment reliability tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compliance documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ESG performance metrics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Award className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Impact Measurement</h3>
              <p className="text-gray-600 mb-4">
                Track and report your social and environmental impact to attract ESG-focused investors and buyers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Jobs created and supported</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Carbon footprint reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Community economic impact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>SDG alignment reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BarChart3 className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-gray-900 mb-3">Business Intelligence Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Real-time visibility into all your key metrics in one intuitive, mobile-friendly dashboard.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customizable KPI tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Visual trend analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated reporting exports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Team collaboration features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Who Benefits From Our Analytics?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different stakeholders need different insights—we serve them all
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-gray-900 mb-3">For SMEs</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Gain actionable insights to grow your business and monetize your verified data
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Predictive analytics</li>
                <li>• Market intelligence</li>
                <li>• Revenue opportunities</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-gray-900 mb-3">For Banks</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Access verified SME data for better credit decisions and risk assessment
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Transaction history</li>
                <li>• Compliance verification</li>
                <li>• Performance metrics</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-gray-900 mb-3">For Corporates</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Find and verify reliable suppliers with proven track records
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Supplier verification</li>
                <li>• Quality assurance data</li>
                <li>• Compliance documentation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-gray-900 mb-3">For Investors</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Measure social and environmental impact with verifiable metrics
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Impact measurement</li>
                <li>• ESG reporting</li>
                <li>• Portfolio analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Monetization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Your Data, Your Revenue Stream</h2>
              <p className="text-gray-600 mb-6">
                As you use Cynea's platform, every verified transaction, compliance check, and operational metric creates valuable data. Here's how you can monetize it:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="text-gray-900 mb-1">Market Insights</h4>
                  <p className="text-gray-600 text-sm">Aggregated market trends and pricing data from your region</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="text-gray-900 mb-1">Supplier Networks</h4>
                  <p className="text-gray-600 text-sm">Verified supplier information that helps others make informed decisions</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="text-gray-900 mb-1">Performance Benchmarks</h4>
                  <p className="text-gray-600 text-sm">Industry performance metrics that guide business strategy</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="text-gray-900 mb-1">Compliance Records</h4>
                  <p className="text-gray-600 text-sm">Verified certification and compliance status valued by buyers</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-600 text-white p-8 rounded-xl">
              <h3 className="text-white mb-4">Data Monetization Potential</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Monthly Active SME</span>
                    <span>$50-$150/month</span>
                  </div>
                  <p className="text-indigo-200 text-sm">Basic transaction and operational data</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Export-Focused SME</span>
                    <span>$150-$500/month</span>
                  </div>
                  <p className="text-indigo-200 text-sm">Compliance, traceability, and supply chain data</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Market Leader</span>
                    <span>$500+/month</span>
                  </div>
                  <p className="text-indigo-200 text-sm">Premium insights, supplier networks, industry benchmarks</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-indigo-500">
                <p className="text-sm text-indigo-200">
                  All data is anonymized and aggregated. You maintain full control over what is shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Turn Your Business Data Into An Asset</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join the SMEs already earning passive income from their verified business data while accessing powerful analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
            >
              Monetize Your Data
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/use-cases" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
            >
              See Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
