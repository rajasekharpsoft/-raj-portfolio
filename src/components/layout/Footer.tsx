import { PORTFOLIO } from '../../data/config';

export default function Footer() {
  return (
    <footer
      className="py-10 text-center relative overflow-hidden"
      style={{ background: '#080810', borderTop: '1px solid rgba(30,30,53,0.6)' }}
    >
      {/* Neon line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)' }}
      />
      <p className="text-sm font-mono" style={{ color: '#475569' }}>
        Designed &amp; Built by{' '}
        <span
          className="font-semibold"
          style={{ color: '#a78bfa', textShadow: '0 0 8px rgba(124,58,237,0.5)' }}
        >
          {PORTFOLIO.personal.name}
        </span>
        {' '}— {new Date().getFullYear()} — Crafted with React &amp; TypeScript
      </p>
    </footer>
  );
}
