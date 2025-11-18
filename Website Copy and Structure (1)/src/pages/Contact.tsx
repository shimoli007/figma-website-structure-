import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { SEOHead } from '../components/SEOHead';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: 'sme',
    message: '',
    gdprConsent: false,
    marketingConsent: false,
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'You must consent to data processing to submit this form';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState('submitting');

    try {
      // In a real implementation, this would send to your backend API
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);
      setFormState('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          category: 'sme',
          message: '',
          gdprConsent: false,
          marketingConsent: false,
        });
        setFormState('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className="bg-white">
      <SEOHead
        title="Contact Us - Cynea AI | Get in Touch for AI Solutions"
        description="Contact Cynea AI for AI automation, blockchain compliance, digital finance solutions. Serving SMEs, corporates, and government entities across the UK and emerging markets."
        keywords="contact cynea ai, AI consultation UK, business AI solutions contact, AI support, get in touch AI company"
        canonicalUrl="https://cynea.ai/contact"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#6C2BD9] to-[#A855F7] text-white py-32">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="tagline text-[#06B6D4] mb-4 block">CONTACT US</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Get in Touch</h1>
            <p className="text-[#CBD5E1] text-xl leading-relaxed">
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
              <h2 className="text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#6C2BD9] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#0F172A] mb-1 font-semibold">Email</h4>
                    <a href="mailto:info@cynea.ai" className="text-[#475569] hover:text-[#6C2BD9] transition-colors">info@cynea.ai</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#06B6D4] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#0F172A] mb-1 font-semibold">Phone</h4>
                    <p className="text-[#475569]">+254 XXX XXX XXX (Kenya)</p>
                    <p className="text-[#475569]">+44 XXX XXX XXXX (UK)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#FF6B35] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#0F172A] mb-1 font-semibold">Locations</h4>
                    <p className="text-[#475569] mb-2">Nairobi, Kenya (HQ)</p>
                    <p className="text-[#475569] mb-2">London, United Kingdom</p>
                    <p className="text-[#475569]">Lusaka, Zambia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#6C2BD9]/5 to-[#A855F7]/10 rounded-lg border border-[#6C2BD9]/20">
                <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Office Hours</h4>
                <p className="text-[#475569] text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM EAT<br />
                  Saturday: 10:00 AM - 2:00 PM EAT<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EDE9FE] p-8 rounded-xl border border-[#6C2BD9]/10 shadow-lg">
                <h2 className="text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[#0F172A] mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C2BD9] focus:border-transparent bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#0F172A] mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C2BD9] focus:border-transparent bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-[#0F172A] mb-2 font-medium">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C2BD9] focus:border-transparent bg-white"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-[#0F172A] mb-2 font-medium">
                      I'm interested in: *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C2BD9] focus:border-transparent bg-white"
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
                    <label htmlFor="message" className="block text-[#0F172A] mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6C2BD9] focus:border-transparent resize-none bg-white ${
                        errors.message ? 'border-error' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your needs or questions..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-error flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* GDPR Compliance Section */}
                  <div className="space-y-4 bg-gradient-to-br from-[#6C2BD9]/5 to-[#A855F7]/10 p-4 rounded-lg border-2 border-[#6C2BD9]/30">
                    <h4 className="text-[#0F172A] font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Data Protection & Consent</h4>

                    {/* Required GDPR Consent */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleChange}
                        className={`mt-1 w-5 h-5 rounded border-2 cursor-pointer accent-primary ${
                          errors.gdprConsent ? 'border-error' : 'border-gray-300'
                        }`}
                        aria-invalid={!!errors.gdprConsent}
                        aria-describedby={errors.gdprConsent ? 'gdpr-error' : undefined}
                      />
                      <label htmlFor="gdprConsent" className="ml-3 text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">I consent to data processing *</span>
                        <br />I agree to Cynea AI processing my personal data according to the{' '}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline hover:text-primary-hover"
                        >
                          Privacy Policy
                        </a>
                        . My data will be used solely to respond to this inquiry and will be stored securely.
                      </label>
                    </div>
                    {errors.gdprConsent && (
                      <p id="gdpr-error" className="text-sm text-error flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.gdprConsent}
                      </p>
                    )}

                    {/* Optional Marketing Consent */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-2 border-gray-300 cursor-pointer accent-primary"
                      />
                      <label htmlFor="marketingConsent" className="ml-3 text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">I'd like to receive updates (Optional)</span>
                        <br />I consent to receiving marketing communications, newsletters, and product updates from Cynea AI.
                        You can unsubscribe at any time.
                      </label>
                    </div>

                    <p className="text-xs text-gray-600 mt-2">
                      By submitting this form, you acknowledge that your information will be processed in accordance with
                      UK GDPR regulations. See our{' '}
                      <a href="/privacy-policy" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms-of-service" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                        Terms of Service
                      </a>{' '}
                      for more information.
                    </p>
                  </div>

                  {/* Form Status Messages */}
                  {formState === 'success' && (
                    <div className="bg-success-light border-l-4 border-success p-4 rounded" role="alert">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-success mr-3" />
                        <div>
                          <p className="font-semibold text-success-dark">Message sent successfully!</p>
                          <p className="text-sm text-success-dark">
                            Thank you for contacting us. We'll respond within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {formState === 'error' && (
                    <div className="bg-error-light border-l-4 border-error p-4 rounded" role="alert">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-error mr-3" />
                        <div>
                          <p className="font-semibold text-error-dark">Something went wrong</p>
                          <p className="text-sm text-error-dark">
                            Please try again or email us directly at info@cynea.ai
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full md:w-auto bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-[#6C2BD9]/30 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    data-loading={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Looking for Something Specific?</h2>
            <p className="text-[#475569]">Quick links to help you find what you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/products/ai-automation" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border border-[#6C2BD9]/10">
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Product Demo</h4>
              <p className="text-[#475569] text-sm">Schedule a personalized demo of our platform</p>
            </a>
            <a href="/training/b2b" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border border-[#06B6D4]/10">
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Training Programs</h4>
              <p className="text-[#475569] text-sm">Explore our corporate and government training</p>
            </a>
            <a href="/talent-hub" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border border-[#A855F7]/10">
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Join Talent Hub</h4>
              <p className="text-[#475569] text-sm">Apply to our Nairobi talent development program</p>
            </a>
            <a href="/resources" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border border-[#FF6B35]/10">
              <h4 className="text-[#0F172A] mb-2 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>Resources</h4>
              <p className="text-[#475569] text-sm">Access guides, whitepapers, and research</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
