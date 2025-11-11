import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: 'sme',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', category: 'sme', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Get in Touch</h1>
            <p className="text-blue-100 text-lg">
              Whether you're an SME looking to transform your business, a government institution building AI capacity, or a talented innovator seeking opportunities—we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@cynea.ai" className="text-gray-600 hover:text-blue-600">info@cynea.ai</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+254 XXX XXX XXX (Kenya)</p>
                    <p className="text-gray-600">+44 XXX XXX XXXX (UK)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Locations</h4>
                    <p className="text-gray-600 mb-2">Nairobi, Kenya (HQ)</p>
                    <p className="text-gray-600 mb-2">London, United Kingdom</p>
                    <p className="text-gray-600">Lusaka, Zambia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Office Hours</h4>
                <p className="text-gray-600 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM EAT<br />
                  Saturday: 10:00 AM - 2:00 PM EAT<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-gray-700 mb-2">
                      I'm interested in: *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="sme">SME Solutions (AI, Blockchain, Finance)</option>
                      <option value="b2b-training">B2B Training Programs</option>
                      <option value="government">Government Partnerships</option>
                      <option value="marketing">Marketing Academy</option>
                      <option value="talent">Talent Hub / Careers</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                      placeholder="Tell us about your needs or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Looking for Something Specific?</h2>
            <p className="text-gray-600">Quick links to help you find what you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/products/ai-automation" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <h4 className="text-gray-900 mb-2">Product Demo</h4>
              <p className="text-gray-600 text-sm">Schedule a personalized demo of our platform</p>
            </a>
            <a href="/training/b2b" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <h4 className="text-gray-900 mb-2">Training Programs</h4>
              <p className="text-gray-600 text-sm">Explore our corporate and government training</p>
            </a>
            <a href="/talent-hub" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <h4 className="text-gray-900 mb-2">Join Talent Hub</h4>
              <p className="text-gray-600 text-sm">Apply to our Nairobi talent development program</p>
            </a>
            <a href="/resources" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <h4 className="text-gray-900 mb-2">Resources</h4>
              <p className="text-gray-600 text-sm">Access guides, whitepapers, and research</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
