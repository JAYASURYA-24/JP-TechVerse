import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import FloatingActions from './components/ui/FloatingActions';
import CTABanner from './components/ui/CTABanner';
import LegalPage from './pages/LegalPage';
import { privacyPolicyContent, termsOfServiceContent } from './constants/legal';

// Lazy load below-the-fold sections for better performance
const Services = lazy(() => import('./sections/Services'));
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const WhyUs = lazy(() => import('./sections/WhyUs'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Contact = lazy(() => import('./sections/Contact'));

// Minimal section skeleton loader
const SectionSkeleton = () => (
  <div className="section-padding">
    <div className="section-container">
      <div className="space-y-4 animate-pulse">
        <div className="h-6 w-24 rounded-full bg-brand-surface mx-auto" />
        <div className="h-10 w-64 rounded-xl bg-brand-surface mx-auto" />
        <div className="h-4 w-48 rounded bg-brand-surface/60 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 rounded-2xl bg-brand-surface/60" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

function LandingPage() {
  return (
    <main id="main-content">
      {/* Hero — eagerly loaded (above the fold) */}
      <Hero />

      {/* Lazy-loaded sections */}
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyUs />
      </Suspense>

      <CTABanner />

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  );
}

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Skip to main content for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn-primary z-[100]"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/privacy" 
          element={<LegalPage title="Privacy Policy" content={privacyPolicyContent} />} 
        />
        <Route 
          path="/terms" 
          element={<LegalPage title="Terms of Service" content={termsOfServiceContent} />} 
        />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (Call, WhatsApp, Scroll Top) */}
      <FloatingActions />
    </div>
  );
}
