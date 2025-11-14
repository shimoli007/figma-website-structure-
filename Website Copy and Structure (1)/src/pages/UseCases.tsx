import { Link } from 'react-router-dom';
import { Coffee, Leaf, Package, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function UseCases() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Real Businesses, Real Results</h1>
            <p className="text-indigo-100 text-lg mb-8">
              See how businesses across emerging markets are using Cynea AI to transform their operations, meet compliance requirements, and scale internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Use Case: Coffee Exports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full mb-4">
                <Coffee className="w-4 h-4 mr-2" />
                <span className="text-sm">Coffee Export</span>
              </div>
              <h2 className="text-gray-900 mb-4">Premium Coffee Exporter Achieves EUDR Compliance</h2>
              <div className="text-gray-600 mb-6">
                <p className="mb-4">
                  <span className="text-indigo-600">Challenge:</span> A Kenyan specialty coffee exporter faced losing access to EU markets due to new EUDR requirements demanding proof of deforestation-free sourcing. Manual documentation across 200+ smallholder farmers was impossible.
                </p>
                <p className="mb-4">
                  <span className="text-indigo-600">Solution:</span> Implemented Cynea's blockchain traceability platform with QR codes at each farm, tracking beans from harvest through processing and export. Automated EUDR compliance documentation.
                </p>
                <p>
                  <span className="text-indigo-600">Impact:</span> Generated complete compliance dossiers in 3 weeks instead of 6 months, secured $1.2M EU contract, and now uses premium "full traceability" positioning to command 15% price premium.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h4 className="text-gray-900 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-indigo-600">3 weeks</div>
                    <div className="text-gray-600 text-sm">Time to compliance</div>
                  </div>
                  <div>
                    <div className="text-indigo-600">$1.2M</div>
                    <div className="text-gray-600 text-sm">New contract value</div>
                  </div>
                  <div>
                    <div className="text-indigo-600">200+</div>
                    <div className="text-gray-600 text-sm">Farmers onboarded</div>
                  </div>
                  <div>
                    <div className="text-indigo-600">15%</div>
                    <div className="text-gray-600 text-sm">Price premium</div>
                  </div>
                </div>
              </div>
              <Link to="/products/blockchain-compliance" className="text-indigo-600 hover:text-indigo-700 inline-flex items-center">
                Learn about Blockchain Solutions <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1746367805612-bc46ff00bf9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBleHBvcnQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjI1MDg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coffee agriculture and export"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Edtech */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjc3MjY4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Education technology and teaching"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full mb-4">
                <Leaf className="w-4 h-4 mr-2" />
                <span className="text-sm">Edtech</span>
              </div>
              <h2 className="text-gray-900 mb-4">Edtech Company Streamlines Operations with AI</h2>
              <div className="text-gray-600 mb-6">
                <p className="mb-4">
                  <span className="text-green-600">Challenge:</span> An emerging market edtech company struggled with manual student enrollment, grading, and communication across 500+ students and 20 instructors.
                </p>
                <p className="mb-4">
                  <span className="text-green-600">Solution:</span> Implemented Cynea's AI automation tools for student onboarding, automated grading, personalized learning recommendations, and AI teaching assistants.
                </p>
                <p>
                  <span className="text-green-600">Impact:</span> Reduced administrative time by 25 hours/week, improved student satisfaction by 40%, scaled to serve 1,200 students with the same team, and enhanced learning outcomes through personalized AI assistance.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="text-gray-900 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-green-600">25 hrs/week</div>
                    <div className="text-gray-600 text-sm">Time saved</div>
                  </div>
                  <div>
                    <div className="text-green-600">40%</div>
                    <div className="text-gray-600 text-sm">Satisfaction increase</div>
                  </div>
                  <div>
                    <div className="text-green-600">2.4x</div>
                    <div className="text-gray-600 text-sm">Student growth</div>
                  </div>
                  <div>
                    <div className="text-green-600">0</div>
                    <div className="text-gray-600 text-sm">New admin hires</div>
                  </div>
                </div>
              </div>
              <Link to="/products/ai-automation" className="text-green-600 hover:text-green-700 inline-flex items-center">
                Explore AI Automation Tools <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Food Innovation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full mb-4">
                <Package className="w-4 h-4 mr-2" />
                <span className="text-sm">Food Innovation</span>
              </div>
              <h2 className="text-gray-900 mb-4">Packaged Foods Startup Secures Funding with Data</h2>
              <div className="text-gray-600 mb-6">
                <p className="mb-4">
                  <span className="text-purple-600">Challenge:</span> A healthy snacks startup needed to demonstrate business viability to investors but lacked the data and financial infrastructure to prove traction.
                </p>
                <p className="mb-4">
                  <span className="text-purple-600">Solution:</span> Used Cynea's data analytics platform to track and monetize verified sales data, plus stablecoin payments to show stable revenue despite currency volatility.
                </p>
                <p>
                  <span className="text-purple-600">Impact:</span> Presented investors with blockchain-verified financials and sold market insights for additional $15K revenue. Secured $250K seed round citing data infrastructure as key differentiator.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="text-gray-900 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-purple-600">$250K</div>
                    <div className="text-gray-600 text-sm">Seed funding raised</div>
                  </div>
                  <div>
                    <div className="text-purple-600">$15K</div>
                    <div className="text-gray-600 text-sm">Data monetization</div>
                  </div>
                  <div>
                    <div className="text-purple-600">100%</div>
                    <div className="text-gray-600 text-sm">Currency protection</div>
                  </div>
                  <div>
                    <div className="text-purple-600">3 months</div>
                    <div className="text-gray-600 text-sm">To investment</div>
                  </div>
                </div>
              </div>
              <Link to="/products/data-analytics" className="text-purple-600 hover:text-purple-700 inline-flex items-center">
                Discover Data Solutions <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjQ3NzA5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data analytics dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Use Cases Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cynea AI is transforming businesses across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="w-10 h-10 text-teal-600 mb-4" />
              <h4 className="text-gray-900 mb-2">Fish Export to EU</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Fish exporter used stablecoin payments to protect against currency devaluation, saving $45K in 6 months on a $300K contract.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                <span>15% cost savings</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-gray-900 mb-2">Manufacturing Supply Chain</h4>
              <p className="text-gray-600 mb-4 text-sm">
                A manufacturer implemented blockchain traceability for raw materials, enabling ISO certification and winning 3 new corporate contracts.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                <span>3 new B2B clients</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="w-10 h-10 text-pink-600 mb-4" />
              <h4 className="text-gray-900 mb-2">Marketing Agency</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Marketing agency completed AI training academy, now offers AI-powered services at 2x previous rates with 50% faster delivery.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-pink-600 mr-2" />
                <span>100% revenue growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Aggregate Impact Across All Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable outcomes from SMEs using Cynea's platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-indigo-600 mb-2">100+</div>
              <div className="text-gray-900 mb-1">SMEs Supported</div>
              <p className="text-gray-600 text-sm">Across 6 countries</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 mb-2">$5M+</div>
              <div className="text-gray-900 mb-1">Trade Value Enabled</div>
              <p className="text-gray-600 text-sm">Cross-border transactions</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 mb-2">15-20 hrs</div>
              <div className="text-gray-900 mb-1">Weekly Time Saved</div>
              <p className="text-gray-600 text-sm">Per business on average</p>
            </div>
            <div className="text-center">
              <div className="text-indigo-600 mb-2">95%</div>
              <div className="text-gray-900 mb-1">Client Satisfaction</div>
              <p className="text-gray-600 text-sm">Would recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join the SMEs already transforming their businesses with Cynea AI's full-stack infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/products/ai-automation" 
              className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
