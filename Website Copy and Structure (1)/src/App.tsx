import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Home } from './pages/Home';
import { AIAutomation } from './pages/products/AIAutomation';
import { BlockchainCompliance } from './pages/products/BlockchainCompliance';
import { DigitalFinance } from './pages/products/DigitalFinance';
import { DataAnalytics } from './pages/products/DataAnalytics';
import { CareerGrowth } from './pages/training/CareerGrowth';
import { B2BTraining } from './pages/training/B2BTraining';
import { GovernmentPrograms } from './pages/training/GovernmentPrograms';
import { MarketingAcademy } from './pages/training/MarketingAcademy';
import { TalentHub } from './pages/TalentHub';
import { AIForGood } from './pages/AIForGood';
import { About } from './pages/About';
import { UseCases } from './pages/UseCases';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { AccessibilityStatement } from './pages/legal/AccessibilityStatement';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Skip to Main Content - Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Product Routes */}
            <Route path="/products/ai-automation" element={<AIAutomation />} />
            <Route path="/products/blockchain-compliance" element={<BlockchainCompliance />} />
            <Route path="/products/digital-finance" element={<DigitalFinance />} />
            <Route path="/products/data-analytics" element={<DataAnalytics />} />

            {/* Training Routes */}
            <Route path="/training/career-growth" element={<CareerGrowth />} />
            <Route path="/training/b2b" element={<B2BTraining />} />
            <Route path="/training/government" element={<GovernmentPrograms />} />
            <Route path="/training/marketing" element={<MarketingAcademy />} />

            {/* Impact Routes */}
            <Route path="/impact/talent-hub" element={<TalentHub />} />
            <Route path="/impact/ai-for-good" element={<AIForGood />} />

            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/accessibility" element={<AccessibilityStatement />} />

            {/* Catch all - redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* UK GDPR Cookie Consent */}
        <CookieConsent />
      </div>
    </Router>
  );
}
