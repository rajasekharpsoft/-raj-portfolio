import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import Particles from '../Particles';
import { PORTFOLIO } from '../../data/config';

export default function Hero() {
  const { personal, social } = PORTFOLIO;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = personal.roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < role.length) {
      t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === role.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % personal.roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex, personal.roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: '#080810' }}
    >
      {/* Neon grid */}
      <div className="neon-grid opacity-60" />

      {/* Glowing orbs */}
      <div
        className="orb w-[500px] h-[500px] top-[-100px] left-[-150px]"
        style={{ background: 'rgba(124,58,237,0.12)' }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-50px] right-[-100px]"
        style={{ background: 'rgba(6,182,212,0.1)' }}
      />
      <div
        className="orb w-[250px] h-[250px] top-[40%] right-[20%]"
        style={{ background: 'rgba(236,72,153,0.07)' }}
      />

      {/* Particles */}
      <Particles count={45} />

      {/* Scan line */}
      <div className="scan-line" />

      <div className="section relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* ── Text ── */}
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-mono"
              style={{
                borderColor: 'rgba(6,182,212,0.3)',
                background: 'rgba(6,182,212,0.06)',
                color: '#67e8f9',
              }}
            >
              <Sparkles size={12} />
              Available for opportunities
            </motion.div>

            <p className="font-mono text-sm mb-3 tracking-widest" style={{ color: '#06b6d4' }}>
              &gt;_ Hello, World! I'm
            </p>

            {/* Name with gradient */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5 gradient-text"
              style={{ backgroundSize: '200% 200%' }}
            >
              {personal.name}
            </h1>

            {/* Typewriter */}
            <h2 className="text-xl md:text-2xl font-semibold mb-8 min-h-[2rem]" style={{ color: '#94a3b8' }}>
              <span style={{ color: '#a78bfa' }}>{displayed}</span>
              <span
                className="inline-block w-0.5 h-6 align-middle ml-1"
                style={{ background: '#06b6d4', animation: 'blink 1s step-end infinite' }}
              />
            </h2>

            <p className="leading-relaxed text-lg mb-10 max-w-xl whitespace-pre-line" style={{ color: '#94a3b8' }}>
              {personal.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowDown size={16} />
              </a>
              <a href={personal.resume} download className="btn-outline">
                Download CV <Download size={16} />
              </a>
            </div>

            {/* Social + line */}
            <div className="flex items-center gap-5 mt-10">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-200 hover:scale-110"
                  style={{ color: '#475569' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#7c3aed';
                    (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 6px #7c3aed)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#475569';
                    (e.currentTarget as HTMLElement).style.filter = 'none';
                  }}
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-200 hover:scale-110"
                  style={{ color: '#475569' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#06b6d4';
                    (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 6px #06b6d4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#475569';
                    (e.currentTarget as HTMLElement).style.filter = 'none';
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              )}
              <a
                href={`mailto:${personal.email}`}
                className="transition-all duration-200 hover:scale-110"
                style={{ color: '#475569' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#ec4899';
                  (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 6px #ec4899)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#475569';
                  (e.currentTarget as HTMLElement).style.filter = 'none';
                }}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <div className="h-px flex-1 max-w-[100px]" style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.4), transparent)' }} />
            </div>
          </motion.div>

          {/* ── Avatar ── */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer rotating ring */}
            <div
              className="absolute inset-[-16px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)',
                animation: 'spin 6s linear infinite',
                padding: '2px',
                borderRadius: '50%',
              }}
            >
              <div className="w-full h-full rounded-full" style={{ background: '#080810' }} />
            </div>

            {/* Avatar */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden z-10"
              style={{
                border: '2px solid rgba(124,58,237,0.5)',
                animation: 'neonPulse 3s ease-in-out infinite, float 6s ease-in-out infinite',
              }}
            >
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal.name)}&background=1a1a2e&color=a78bfa&size=288&bold=true`;
                }}
              />
              {/* Overlay shine */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 60%, rgba(6,182,212,0.1) 100%)',
                }}
              />
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 z-20 px-4 py-2 rounded-xl font-mono text-xs"
              style={{
                background: 'rgba(8,8,16,0.9)',
                border: '1px solid rgba(6,182,212,0.4)',
                color: '#67e8f9',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 20px rgba(6,182,212,0.2)',
              }}
            >
              <span style={{ color: '#475569' }}>{'> '}</span>open_to_work
              <span
                className="inline-block w-1.5 h-1.5 rounded-full ml-2 align-middle"
                style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }}
              />
            </motion.div>

            {/* XP tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute -top-4 -left-4 z-20 px-3 py-1.5 rounded-xl font-mono text-xs"
              style={{
                background: 'rgba(8,8,16,0.9)',
                border: '1px solid rgba(124,58,237,0.4)',
                color: '#a78bfa',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 16px rgba(124,58,237,0.2)',
              }}
            >
              3+ yrs exp
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ color: '#475569' }}
        >
          <span className="text-xs font-mono tracking-[0.2em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
