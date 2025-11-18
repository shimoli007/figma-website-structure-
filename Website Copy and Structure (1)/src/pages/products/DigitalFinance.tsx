import { Link } from 'react-router-dom';
import { DollarSign, Zap, TrendingDown, Lock, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function DigitalFinance() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#06B6D4] to-[#22D3EE] text-white py-32">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-gradient-to-r from-[#06B6D4]/20 to-[#22D3EE]/20 border border-[#06B6D4]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm text-[#E0F2FE]">Digital Finance Infrastructure</span>
            </div>
            <h1 className="text-white mb-6 text-5xl font-black leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Stable Payments for Unstable Currencies</h1>
            <p className="text-[#CBD5E1] text-lg mb-8">
              Bypass currency volatility and high fees with stablecoin-powered cross-border payments. Get paid faster, preserve your earnings, and access working capital when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-[#06B6D4] px-6 py-3 rounded-lg hover:bg-gradient-to-br from-[#06B6D4]/5 to-[#22D3EE]/10 transition"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/use-cases" 
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#06B6D4] transition"
              >
                See Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">The Currency Problem Every Exporter Faces</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Currency Devaluation</h4>
                    <p className="text-gray-600">Your local currency can lose 10-30% of its value between invoice and payment, erasing profit margins.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">High Transfer Fees</h4>
                    <p className="text-gray-600">Traditional banks charge 5-10% in fees and FX spreads for international transfers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900">Slow Settlements</h4>
                    <p className="text-gray-600">Cross-border payments take 3-7 days, tying up working capital and delaying operations.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#22D3EE]/10 border-l-4 border-[#06B6D4] p-4 rounded">
                <p className="text-gray-700">
                  <span className="text-[#06B6D4]">Cynea's solution:</span> Stablecoin infrastructure that settles in minutes, not days, with fees under 1%.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1728044849221-851cf8587fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudCUyMGZpbnRlY2h8ZW58MXx8fHwxNzYyNTA4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital payment and fintech"
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
            <h2 className="text-gray-900 mb-4">Complete Digital Finance Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From receiving international payments to accessing working capital, our platform handles all your financial infrastructure needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <DollarSign className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">Stablecoin Payment Solutions</h3>
              <p className="text-gray-600 mb-4">
                Accept payments in USD-pegged stablecoins (USDC, USDT) that maintain their value regardless of local currency fluctuations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Instant USD value preservation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Easy conversion to local currency when needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compatible with all major buyers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain-verified payment history</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Zap className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">Cross-Border Settlement</h3>
              <p className="text-gray-600 mb-4">
                Send and receive international payments in minutes instead of days, with full transparency and tracking.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Settlement in under 15 minutes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time payment tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-currency support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated reconciliation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <TrendingDown className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">Ultra-Low Fees</h3>
              <p className="text-gray-600 mb-4">
                Pay less than 1% in transaction fees compared to 5-10% with traditional banking channels.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No hidden FX spreads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transparent pricing upfront</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Volume discounts available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No monthly maintenance fees</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Lock className="w-12 h-12 text-[#06B6D4] mb-4" />
              <h3 className="text-gray-900 mb-3">Digital Trade Finance</h3>
              <p className="text-gray-600 mb-4">
                Access working capital based on your verified transaction history and export contracts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Invoice financing in 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Supply chain finance options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain-backed credit scoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Flexible repayment terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Traditional Banking vs. Cynea Finance</h2>
            <p className="text-gray-600">See how much you can save on every transaction</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-left text-gray-900">Traditional Banking</th>
                  <th className="px-6 py-4 text-left text-[#06B6D4]">Cynea Finance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900">Transaction Fees</td>
                  <td className="px-6 py-4 text-gray-600">5-10% of transfer amount</td>
                  <td className="px-6 py-4 text-[#06B6D4]">&lt;1% of transfer amount</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Settlement Time</td>
                  <td className="px-6 py-4 text-gray-600">3-7 business days</td>
                  <td className="px-6 py-4 text-[#06B6D4]">Under 15 minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Currency Protection</td>
                  <td className="px-6 py-4 text-gray-600">Exposed to devaluation</td>
                  <td className="px-6 py-4 text-[#06B6D4]">USD-pegged stablecoins</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Working Capital Access</td>
                  <td className="px-6 py-4 text-gray-600">Weeks of paperwork</td>
                  <td className="px-6 py-4 text-[#06B6D4]">24-48 hours approval</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Payment Transparency</td>
                  <td className="px-6 py-4 text-gray-600">Limited tracking</td>
                  <td className="px-6 py-4 text-[#06B6D4]">Full blockchain visibility</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-br from-[#06B6D4]/5 to-[#22D3EE]/10 px-6 py-4 rounded-lg">
              <p className="text-gray-900">
                <span className="text-[#06B6D4]">Example savings:</span> On a $10,000 export payment, save up to $900 in fees and preserve value against currency fluctuation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Getting Started is Simple</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From signup to your first payment in under 48 hours
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="text-gray-900 mb-2">Sign Up</h4>
              <p className="text-gray-600 text-sm">
                Create your account and complete basic KYC verification
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="text-gray-900 mb-2">Connect Wallet</h4>
              <p className="text-gray-600 text-sm">
                Set up your stablecoin wallet (we'll guide you through it)
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="text-gray-900 mb-2">Share Address</h4>
              <p className="text-gray-600 text-sm">
                Provide payment details to your international buyers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h4 className="text-gray-900 mb-2">Get Paid</h4>
              <p className="text-gray-600 text-sm">
                Receive payments instantly and convert when ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#0F172A] via-[#06B6D4] to-[#22D3EE] text-white">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6 text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>Stop Losing Money to Currency Risk</h2>
          <p className="text-[#CBD5E1] mb-8 text-lg">
            Protect your hard-earned export revenue with stablecoin infrastructure built for emerging market SMEs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#06B6D4] px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            >
              Open Your Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/use-cases"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#06B6D4] transition-all duration-300 font-semibold"
            >
              See Success Stories
            </Link>
          </div>
          <p className="mt-6 text-[#CBD5E1] text-sm">
            No setup fees • No monthly minimums • Get started in 48 hours
          </p>
        </div>
      </section>
    </div>
  );
}
