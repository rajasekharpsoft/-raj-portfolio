import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO } from '../../data/config';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const [first, ...rest] = PORTFOLIO.personal.name.split(' ');
  const lastName = rest.join(' ');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(8,8,16,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(30,30,53,0.8)',
        boxShadow: '0 0 30px rgba(124,58,237,0.06)',
      } : {}}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-black text-xl transition-all duration-200"
          style={{ color: '#f0f0ff' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 8px #7c3aed)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.filter = 'none';
          }}
        >
          {first}
          <span style={{ color: '#7c3aed', textShadow: '0 0 10px #7c3aed' }}>.</span>
          {lastName && (
            <span className="font-normal text-sm ml-1" style={{ color: '#475569' }}>{lastName}</span>
          )}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium font-mono transition-all duration-200 relative"
                  style={{
                    color: isActive ? '#7c3aed' : '#94a3b8',
                    textShadow: isActive ? '0 0 10px rgba(124,58,237,0.8)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#f0f0ff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', boxShadow: '0 0 8px #7c3aed' }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a href={PORTFOLIO.personal.resume} download className="btn-primary text-sm py-2 px-4">
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          style={{ color: '#475569' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#7c3aed'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: 'rgba(8,8,16,0.95)',
            borderBottom: '1px solid rgba(30,30,53,0.8)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-sm font-mono transition-colors"
                  style={{ color: '#94a3b8' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#7c3aed'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={PORTFOLIO.personal.resume} download className="btn-primary text-sm py-2 px-4 w-fit">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
