import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Contact',  href: '#contact' },
];

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
    <path d="M10 26V10h6l4 8 4-8h6v16h-4V16l-4 8h-4l-4-8v10H10z" fill="white" />
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled
    ? 'bg-[#0B1120]/95 backdrop-blur-xl border border-blue-500/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
    : 'bg-transparent';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="section-container">
          <nav className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${navBg}`}
            aria-label="Main navigation">

            {/* Logo */}
            <a href="#home" onClick={e => { e.preventDefault(); go('#home'); }}
              className="flex items-center gap-2.5" aria-label="JP TechVerse Home">
              <LogoIcon />
              <span className="text-lg font-black tracking-tight text-white">
                JP <span className="gradient-text">TechVerse</span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}
                    onClick={e => { e.preventDefault(); go(href); }}
                    className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}>
                    {label}
                    {activeSection === href.slice(1) && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                        style={{ background: 'var(--accent)' }} />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* CTA */}
              <a href="#contact"
                onClick={e => { e.preventDefault(); go('#contact'); }}
                className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors"
                style={{ color: 'white' }}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                  style={{ background: 'white' }} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                  style={{ background: 'white' }} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                  style={{ background: 'white' }} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden
        border-l transition-transform duration-300
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          background: '#0B1120',
          borderColor: 'rgba(59,130,246,0.15)',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.6)',
        }}
        role="dialog" aria-modal="true" aria-label="Mobile navigation">

        <div className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: 'rgba(59,130,246,0.1)' }}>
          <span className="font-black text-base" style={{ color: 'white' }}>
            JP <span className="gradient-text">TechVerse</span>
          </span>
          <button onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg transition-colors" aria-label="Close menu"
            style={{ color: 'var(--text-muted)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6" aria-label="Mobile navigation links">
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={e => { e.preventDefault(); go(href); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all`}
                  style={{
                    color: activeSection === href.slice(1) ? 'var(--accent)' : 'var(--text-muted)',
                    background: activeSection === href.slice(1) ? 'rgba(59,130,246,0.08)' : 'transparent',
                    border: `1px solid ${activeSection === href.slice(1) ? 'rgba(59,130,246,0.2)' : 'transparent'}`,
                  }}>
                  {label}
                  {activeSection === href.slice(1) && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-4 border-t" style={{ borderColor: 'rgba(59,130,246,0.1)' }}>
            <a href="#contact" onClick={e => { e.preventDefault(); go('#contact'); }}
              className="btn-primary w-full justify-center py-3">
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
