export function PrivacyPolicy() {
  const lastUpdated = "November 2025";

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2>1. Introduction</h2>
            <p>
              Cynea AI ("<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using our website, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* Data Controller */}
          <section className="mb-8">
            <h2>2. Data Controller</h2>
            <p>
              Cynea AI is the data controller responsible for your personal information. If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="mb-2"><strong>Cynea AI</strong></p>
              <p className="mb-1">Email: <a href="mailto:privacy@cynea.ai" className="text-primary">privacy@cynea.ai</a></p>
              <p className="mb-1">Address: [Your Business Address]</p>
              <p>Data Protection Officer: [DPO Name or "N/A if not required"]</p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2>3. Information We Collect</h2>

            <h3>3.1 Information You Provide</h3>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Contact us through forms on our website</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Register for our services or create an account</li>
              <li>Participate in surveys or provide feedback</li>
              <li>Apply for employment opportunities</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact details (email, phone number, address)</li>
              <li>Company name and job title</li>
              <li>Professional information and qualifications</li>
              <li>Communications with us</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>3.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information, including:</p>
            <ul>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device type</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring website</li>
              <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
              <li><strong>Cookies and Tracking:</strong> See our Cookie Policy section below</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2>4. How We Use Your Information</h2>
            <p>We process your personal data under the following lawful bases:</p>

            <h3>4.1 Legitimate Interest</h3>
            <ul>
              <li>Operating and improving our website and services</li>
              <li>Analyzing website usage and performance</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Marketing our services (with opt-out option)</li>
            </ul>

            <h3>4.2 Contractual Necessity</h3>
            <ul>
              <li>Providing services you've requested</li>
              <li>Processing transactions and payments</li>
              <li>Managing your account</li>
              <li>Customer support and communication</li>
            </ul>

            <h3>4.3 Consent</h3>
            <ul>
              <li>Sending marketing communications (when you opt in)</li>
              <li>Using non-essential cookies (as per Cookie Policy)</li>
              <li>Processing special categories of data (if applicable)</li>
            </ul>

            <h3>4.4 Legal Obligation</h3>
            <ul>
              <li>Complying with legal requirements</li>
              <li>Responding to lawful requests from authorities</li>
              <li>Protecting our legal rights</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2>5. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>

            <h3>5.1 Service Providers</h3>
            <p>
              We engage third-party service providers to assist with our operations, such as:
            </p>
            <ul>
              <li>Website hosting providers</li>
              <li>Email marketing platforms</li>
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Customer relationship management (CRM) systems</li>
              <li>Payment processors</li>
            </ul>
            <p>
              These providers are contractually obligated to protect your data and use it only for the purposes we specify.
            </p>

            <h3>5.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or to:</p>
            <ul>
              <li>Comply with legal processes or government requests</li>
              <li>Enforce our terms and conditions</li>
              <li>Protect our rights, property, or safety</li>
              <li>Prevent fraud or security issues</li>
            </ul>

            <h3>5.3 Business Transfers</h3>
            <p>
              If we are involved in a merger, acquisition, or sale of assets, your information may be transferred to the new owner.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-8">
            <h2>6. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries outside the UK. When we transfer data internationally, we ensure appropriate safeguards are in place, such as:
            </p>
            <ul>
              <li>Standard Contractual Clauses approved by the UK Information Commissioner's Office (ICO)</li>
              <li>Transfers to countries with adequate data protection laws</li>
              <li>Other lawful transfer mechanisms under UK GDPR</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2>7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2>8. Data Retention</h2>
            <p>We retain your personal data only as long as necessary for the purposes outlined in this policy:</p>
            <ul>
              <li><strong>Contact Form Data:</strong> 2 years from last contact</li>
              <li><strong>Newsletter Subscribers:</strong> Until you unsubscribe, plus 30 days</li>
              <li><strong>Customer Accounts:</strong> Duration of relationship plus 6 years (for legal and accounting purposes)</li>
              <li><strong>Analytics Data:</strong> 26 months (Google Analytics default)</li>
              <li><strong>Cookie Data:</strong> As specified in Cookie Policy (maximum 12 months for non-essential cookies)</li>
            </ul>
            <p>
              After the retention period, we securely delete or anonymize your data.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2>9. Your Rights Under UK GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Access</h4>
                <p className="text-sm">Request a copy of your personal data we hold</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Rectification</h4>
                <p className="text-sm">Correct inaccurate or incomplete data</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Erasure</h4>
                <p className="text-sm">Request deletion of your data ("right to be forgotten")</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Restrict Processing</h4>
                <p className="text-sm">Limit how we use your data</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Data Portability</h4>
                <p className="text-sm">Receive your data in a structured, machine-readable format</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Object</h4>
                <p className="text-sm">Object to processing based on legitimate interests or marketing</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Withdraw Consent</h4>
                <p className="text-sm">Withdraw consent for processing at any time</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Right to Lodge a Complaint</h4>
                <p className="text-sm">File a complaint with the ICO</p>
              </div>
            </div>

            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@cynea.ai" className="text-primary">privacy@cynea.ai</a>.
              We will respond to your request within one month.
            </p>

            <div className="bg-info-light border-l-4 border-info p-4 my-6">
              <p className="font-semibold text-info-dark mb-2">UK Information Commissioner's Office (ICO)</p>
              <p className="text-sm text-info-dark mb-1">
                If you're not satisfied with our response, you have the right to lodge a complaint with the ICO:
              </p>
              <p className="text-sm text-info-dark mb-1">
                Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline">https://ico.org.uk</a>
              </p>
              <p className="text-sm text-info-dark">
                Helpline: 0303 123 1113
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8" id="cookies">
            <h2>10. Cookie Policy</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can manage your cookie preferences through our Cookie Consent banner.
            </p>

            <h3>10.1 Types of Cookies We Use</h3>

            <div className="space-y-4 my-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Necessary Cookies (Always Active)</h4>
                <p className="text-sm mb-2">
                  Essential for the website to function. These cannot be disabled.
                </p>
                <ul className="text-sm list-disc pl-5">
                  <li>Session management</li>
                  <li>Security tokens</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Analytics Cookies (Optional)</h4>
                <p className="text-sm mb-2">
                  Help us understand how visitors use our website.
                </p>
                <ul className="text-sm list-disc pl-5">
                  <li>Google Analytics (_ga, _gid, _gat)</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Retention: 26 months</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Marketing Cookies (Optional)</h4>
                <p className="text-sm mb-2">
                  Used to deliver personalized advertisements and measure campaign effectiveness.
                </p>
                <ul className="text-sm list-disc pl-5">
                  <li>Advertising network cookies</li>
                  <li>Remarketing pixels</li>
                  <li>Conversion tracking</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">Retention: 12 months</p>
              </div>
            </div>

            <h3>10.2 Managing Cookies</h3>
            <p>You can manage cookies in several ways:</p>
            <ul>
              <li><strong>Cookie Consent Banner:</strong> Customize your preferences when you first visit our site</li>
              <li><strong>Browser Settings:</strong> Configure your browser to block or delete cookies</li>
              <li><strong>Opt-Out Tools:</strong> Use browser extensions or industry opt-out mechanisms</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Note: Disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2>11. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites or integrate third-party services:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Website analytics (Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary">Google Privacy Policy</a>)</li>
              <li><strong>Social Media:</strong> Links to our social media profiles</li>
              <li><strong>Payment Processors:</strong> Secure payment handling (if applicable)</li>
            </ul>
            <p>
              We are not responsible for the privacy practices of third-party services. Please review their privacy policies.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2>12. Children's Privacy</h2>
            <p>
              Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will delete it.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2>13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending an email notification (for material changes affecting your rights)</li>
            </ul>
            <p>
              We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2>14. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-primary/5 border-2 border-primary p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-primary mb-4">Cynea AI - Data Protection</h3>
              <p className="mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@cynea.ai" className="text-primary underline">
                  privacy@cynea.ai
                </a>
              </p>
              <p className="mb-2">
                <strong>Address:</strong> [Your Business Address, City, Postcode]
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> [Your Contact Number]
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                We aim to respond to all inquiries within 48 hours.
              </p>
            </div>
          </section>

          {/* UK GDPR Statement */}
          <section className="bg-success-light border-l-4 border-success p-6 rounded-lg">
            <h3 className="text-lg font-bold text-success-dark mb-2">
              ✓ UK GDPR Compliant
            </h3>
            <p className="text-sm text-success-dark">
              This Privacy Policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              Cynea AI is committed to protecting your personal data and respecting your privacy rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
