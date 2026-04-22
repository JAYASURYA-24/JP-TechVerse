import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalPage({ title, content }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium mb-8 hover:opacity-80 transition-opacity"
          style={{ color: 'var(--accent)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <header className="mb-12">
          <h1 className="text-4xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>{title}</h1>
          <div className="h-1 w-20 rounded-full" style={{ background: 'var(--accent)' }} />
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Last Updated: April 22, 2026</p>
        </header>

        <div className="glass-card p-8 sm:p-12 space-y-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {content.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t text-center" style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © 2026 JP TechVerse. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
