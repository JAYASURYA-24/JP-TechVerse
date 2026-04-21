import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-6 z-50 p-3 rounded-full text-white
        transition-all duration-300 hover:scale-110
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      style={{
        background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-cyan) 100%)',
        boxShadow: '0 4px 20px rgba(1,74,173,0.35)',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(1,74,173,0.55)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(1,74,173,0.35)'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
