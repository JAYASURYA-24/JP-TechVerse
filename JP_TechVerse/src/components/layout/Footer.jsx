const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'App Development', href: '#services' },
  { label: 'Web Development', href: '#services' },
  { label: 'Custom Software', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
  { label: 'Firebase Solutions', href: '#services' },
];

const socials = [
  { label: 'Twitter', href: 'https://twitter.com/jptechverse', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg>) },
  { label: 'GitHub', href: 'https://github.com/jptechverse', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>) },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/jptechverse', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>) },
  { label: 'Instagram', href: 'https://instagram.com/jptechverse', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>) },
];

export default function Footer() {
  const go = (href) => { document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer className="relative border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }} role="contentinfo">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} aria-hidden="true" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" onClick={e => { e.preventDefault(); go('#home'); }} className="flex items-center gap-2.5 mb-4">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect width="36" height="36" rx="10" fill="url(#footerGrad)" />
                <path d="M10 26V10h6l4 8 4-8h6v16h-4V16l-4 8h-4l-4-8v10H10z" fill="white" />
                <defs>
                  <linearGradient id="footerGrad" x1="0" y1="0" x2="36" y2="36">
                    <stop stopColor="#2563eb" />
                    <stop offset="1" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                JP <span className="gradient-text">TechVerse</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              Building scalable digital solutions for startups and businesses. Fast, modern, and affordable
              web &amp; app development from India to the world.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="p-2.5 rounded-xl transition-all duration-200"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
            <ul className="flex flex-col gap-3" role="list">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={e => { e.preventDefault(); go(href); }}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                    <span className="w-1 h-1 rounded-full transition-colors" style={{ background: 'var(--border-accent)' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: 'var(--text-primary)' }}>Services</h3>
            <ul className="flex flex-col gap-3" role="list">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={e => { e.preventDefault(); go(href); }}
                    className="text-sm flex items-center gap-2 transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                    <span className="w-1 h-1 rounded-full" style={{ background: 'var(--border-accent)' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>© 2026 JP TechVerse. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Crafted with ❤️ in India · Built for the World</p>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
            <a href="#" className="hover:text-current transition-colors" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-current transition-colors" style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
