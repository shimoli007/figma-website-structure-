export function AccessibilityStatement() {
  const lastUpdated = "November 2025";

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Accessibility Statement
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Commitment */}
          <section className="mb-8">
            <h2>Our Commitment to Accessibility</h2>
            <p>
              Cynea AI is committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <div className="bg-success-light border-l-4 border-success p-4 my-4">
              <p className="text-sm text-success-dark">
                <strong>Our Goal:</strong> We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA,
                ensuring our website is accessible to the widest possible audience.
              </p>
            </div>
          </section>

          {/* Measures */}
          <section className="mb-8">
            <h2>Measures to Support Accessibility</h2>
            <p>Cynea AI takes the following measures to ensure accessibility of our website:</p>
            <ul>
              <li>Include accessibility as part of our mission statement and corporate values</li>
              <li>Integrate accessibility into our procurement and development processes</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Assign clear accessibility goals and responsibilities</li>
              <li>Conduct regular accessibility audits and testing</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>
          </section>

          {/* Conformance Status */}
          <section className="mb-8">
            <h2>Conformance Status</h2>
            <p>
              The <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-primary">
                Web Content Accessibility Guidelines (WCAG)
              </a> defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance:
              Level A, Level AA, and Level AAA.
            </p>

            <div className="bg-muted p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                ✓ WCAG 2.1 Level AA Conformance
              </h3>
              <p className="mb-3">
                The Cynea AI website is <strong>partially conformant</strong> with WCAG 2.1 Level AA. Partially conformant means
                that some parts of the content do not fully conform to the accessibility standard.
              </p>
              <p className="text-sm text-muted-foreground">
                We are actively working to achieve full conformance and will update this statement as we make improvements.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-8">
            <h2>Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⌨️ Keyboard Navigation</h4>
                <p className="text-sm">Full keyboard navigation support with visible focus indicators</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔍 Screen Reader Support</h4>
                <p className="text-sm">ARIA labels and semantic HTML for screen reader compatibility</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎨 Color Contrast</h4>
                <p className="text-sm">WCAG AA compliant color contrast ratios (4.5:1 minimum)</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📱 Responsive Design</h4>
                <p className="text-sm">Mobile-friendly and works across all device sizes</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔗 Skip Links</h4>
                <p className="text-sm">"Skip to main content" links for faster navigation</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📝 Alt Text</h4>
                <p className="text-sm">Descriptive alternative text for all meaningful images</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎬 Reduced Motion</h4>
                <p className="text-sm">Respects prefers-reduced-motion preference for animations</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📏 Resizable Text</h4>
                <p className="text-sm">Text can be resized up to 200% without loss of content or functionality</p>
              </div>
            </div>
          </section>

          {/* Compatibility */}
          <section className="mb-8">
            <h2>Compatible Technologies</h2>
            <p>Our website is designed to be compatible with the following technologies:</p>

            <h3>Browsers</h3>
            <ul>
              <li>Google Chrome (latest version)</li>
              <li>Mozilla Firefox (latest version)</li>
              <li>Apple Safari (latest version)</li>
              <li>Microsoft Edge (latest version)</li>
            </ul>

            <h3>Assistive Technologies</h3>
            <ul>
              <li>JAWS (Job Access With Speech)</li>
              <li>NVDA (NonVisual Desktop Access)</li>
              <li>VoiceOver (macOS and iOS)</li>
              <li>TalkBack (Android)</li>
              <li>Dragon NaturallySpeaking</li>
              <li>ZoomText</li>
            </ul>

            <div className="bg-info-light border-l-4 border-info p-4 my-4">
              <p className="text-sm text-info-dark">
                <strong>Note:</strong> Our website is not compatible with browsers older than 3 major versions
                or mobile operating systems older than 5 years.
              </p>
            </div>
          </section>

          {/* Known Limitations */}
          <section className="mb-8">
            <h2>Known Limitations</h2>
            <p>
              Despite our best efforts, some content on our website may not yet be fully accessible. Below are known limitations:
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-warning p-4 bg-warning-light">
                <h4 className="font-semibold text-warning-dark mb-2">Third-Party Content</h4>
                <p className="text-sm text-warning-dark mb-2">
                  Some embedded third-party content (videos, social media widgets) may not be fully accessible.
                </p>
                <p className="text-sm text-warning-dark">
                  <strong>Workaround:</strong> We provide alternative content or transcripts where possible.
                </p>
              </div>

              <div className="border-l-4 border-warning p-4 bg-warning-light">
                <h4 className="font-semibold text-warning-dark mb-2">PDF Documents</h4>
                <p className="text-sm text-warning-dark mb-2">
                  Some PDF documents may not be fully tagged for accessibility.
                </p>
                <p className="text-sm text-warning-dark">
                  <strong>Solution:</strong> We are working to remediate existing PDFs and ensure new documents are accessible.
                  Contact us if you need an alternative format.
                </p>
              </div>

              <div className="border-l-4 border-warning p-4 bg-warning-light">
                <h4 className="font-semibold text-warning-dark mb-2">Complex Interactive Elements</h4>
                <p className="text-sm text-warning-dark mb-2">
                  Some complex interactive components may have limited keyboard support.
                </p>
                <p className="text-sm text-warning-dark">
                  <strong>Status:</strong> We are actively improving keyboard navigation for all interactive elements.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              We are committed to addressing these limitations as part of our ongoing accessibility improvements.
            </p>
          </section>

          {/* Assessment */}
          <section className="mb-8">
            <h2>Assessment Approach</h2>
            <p>Cynea AI assessed the accessibility of this website using the following methods:</p>

            <h3>Self-Evaluation</h3>
            <ul>
              <li>Internal accessibility audits using automated tools (WAVE, axe DevTools)</li>
              <li>Manual testing with keyboard navigation</li>
              <li>Screen reader testing (NVDA, VoiceOver)</li>
              <li>Color contrast analysis</li>
            </ul>

            <h3>External Evaluation</h3>
            <p>
              We plan to conduct external accessibility audits by qualified accessibility consultants on an annual basis.
              Our next scheduled audit is: [Month Year]
            </p>
          </section>

          {/* Feedback */}
          <section className="mb-8">
            <h2>Feedback and Contact Information</h2>
            <p>
              We welcome your feedback on the accessibility of the Cynea AI website. Please let us know if you encounter
              accessibility barriers:
            </p>

            <div className="bg-primary/5 border-2 border-primary p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-primary mb-4">Accessibility Contact</h3>

              <p className="mb-3">
                <strong>Email:</strong>{' '}
                <a href="mailto:accessibility@cynea.ai" className="text-primary underline">
                  accessibility@cynea.ai
                </a>
              </p>

              <p className="mb-3">
                <strong>Phone:</strong> [Your Contact Number]
              </p>

              <p className="mb-3">
                <strong>Postal Address:</strong><br />
                Cynea AI - Accessibility Team<br />
                [Your Business Address]<br />
                [City, Postcode]<br />
                United Kingdom
              </p>

              <p className="text-sm text-muted-foreground mt-4">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
          </section>

          {/* Response */}
          <section className="mb-8">
            <h2>Our Response to Feedback</h2>
            <p>When you contact us about accessibility, we will:</p>
            <ol>
              <li>Acknowledge receipt of your message within 2 business days</li>
              <li>Investigate the reported issue</li>
              <li>Provide you with information about potential workarounds</li>
              <li>Implement fixes based on priority and complexity</li>
              <li>Update you on the progress and expected resolution timeline</li>
            </ol>

            <h3>Resolution Timelines</h3>
            <p>We aim to resolve accessibility issues within the following timeframes:</p>
            <ul>
              <li><strong>Critical issues</strong> (complete blocker): 48 hours</li>
              <li><strong>High priority</strong> (significant barrier): 5 business days</li>
              <li><strong>Medium priority</strong> (moderate impact): 2 weeks</li>
              <li><strong>Low priority</strong> (minor enhancement): Next major update</li>
            </ul>
          </section>

          {/* Alternative Formats */}
          <section className="mb-8">
            <h2>Alternative Formats</h2>
            <p>
              If you require content from our website in an alternative format, please contact us. We can provide:
            </p>
            <ul>
              <li>Large print</li>
              <li>Accessible PDFs</li>
              <li>Plain text documents</li>
              <li>Audio versions of written content</li>
              <li>Easy-read formats</li>
            </ul>
            <p>
              Please allow up to 5 business days for us to prepare and send alternative format content.
            </p>
          </section>

          {/* Technical Specifications */}
          <section className="mb-8">
            <h2>Technical Specifications</h2>
            <p>
              Accessibility of the Cynea AI website relies on the following technologies to work:
            </p>
            <ul>
              <li>HTML5</li>
              <li>WAI-ARIA (Accessible Rich Internet Applications)</li>
              <li>CSS3</li>
              <li>JavaScript (ECMAScript 2020+)</li>
            </ul>
            <p>
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
          </section>

          {/* Governance */}
          <section className="mb-8">
            <h2>Accessibility Governance</h2>
            <p>
              Cynea AI has established the following organizational procedures to ensure ongoing accessibility:
            </p>

            <h3>Accessibility Team</h3>
            <ul>
              <li>Designated accessibility coordinator</li>
              <li>Cross-functional accessibility working group</li>
              <li>Regular accessibility training for development team</li>
            </ul>

            <h3>Quality Assurance</h3>
            <ul>
              <li>Accessibility checklist for new features</li>
              <li>Automated testing in CI/CD pipeline</li>
              <li>Manual accessibility testing before release</li>
              <li>User testing with people with disabilities</li>
            </ul>

            <h3>Continuous Improvement</h3>
            <ul>
              <li>Quarterly accessibility reviews</li>
              <li>Annual external audits</li>
              <li>Regular updates to this accessibility statement</li>
              <li>Integration of user feedback into roadmap</li>
            </ul>
          </section>

          {/* Legal */}
          <section className="mb-8">
            <h2>Legal Requirements</h2>
            <p>
              This accessibility statement complies with the following regulations and standards:
            </p>
            <ul>
              <li><strong>Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018</strong> (if applicable)</li>
              <li><strong>Equality Act 2010</strong></li>
              <li><strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong></li>
              <li><strong>European Standard EN 301 549</strong></li>
            </ul>

            <div className="bg-info-light border-l-4 border-info p-4 my-4">
              <p className="text-sm text-info-dark">
                <strong>Enforcement:</strong> If you are not satisfied with our response to your accessibility concerns,
                you can contact the Equality Advisory and Support Service (EASS) or the Equality and Human Rights Commission (EHRC).
              </p>
              <p className="text-sm text-info-dark mt-2">
                <strong>EASS Contact:</strong><br />
                Phone: 0808 800 0082<br />
                Website:{' '}
                <a
                  href="https://www.equalityadvisoryservice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  www.equalityadvisoryservice.com
                </a>
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-8">
            <h2>Statement Updates</h2>
            <p>
              This accessibility statement was created on <strong>November 2025</strong> and will be reviewed and updated:
            </p>
            <ul>
              <li>When new content or functionality is added</li>
              <li>Following user feedback</li>
              <li>After accessibility audits</li>
              <li>At least annually</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Version: 1.0
            </p>
          </section>

          {/* Commitment Statement */}
          <section className="bg-success-light border-l-4 border-success p-6 rounded-lg">
            <h3 className="text-lg font-bold text-success-dark mb-2">
              ✓ Our Commitment
            </h3>
            <p className="text-sm text-success-dark mb-2">
              Cynea AI is committed to providing an inclusive digital experience. Accessibility is not a one-time effort but
              an ongoing commitment to ensuring all users can access our content and services.
            </p>
            <p className="text-sm text-success-dark">
              We will continue to improve the accessibility of our website and welcome your feedback to help us serve you better.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
