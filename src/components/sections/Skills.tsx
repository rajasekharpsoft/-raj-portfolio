import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiGraphql, SiPostgresql, SiMongodb, SiMysql, SiCss,
  SiGit, SiDocker, SiVite, SiWebpack, SiFigma,
} from 'react-icons/si';
import { PORTFOLIO } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ICON_MAP: Record<string, { icon: React.ElementType; color: string }> = {
  React:        { icon: SiReact,       color: '#61dafb' },
  TypeScript:   { icon: SiTypescript,  color: '#3178c6' },
  JavaScript:   { icon: SiJavascript,  color: '#f7df1e' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },
  HTML5:        { icon: SiHtml5,       color: '#e34f26' },
  CSS3:         { icon: SiCss,         color: '#1572b6' },
  'Node.js':    { icon: SiNodedotjs,   color: '#339933' },
  Express:      { icon: SiExpress,     color: '#f0f0ff' },
  GraphQL:      { icon: SiGraphql,     color: '#e10098' },
  PostgreSQL:   { icon: SiPostgresql,  color: '#4169e1' },
  MongoDB:      { icon: SiMongodb,     color: '#47a248' },
  MySQL:        { icon: SiMysql,       color: '#4479a1' },
  Git:          { icon: SiGit,         color: '#f05032' },
  Docker:       { icon: SiDocker,      color: '#2496ed' },
  Vite:         { icon: SiVite,        color: '#646cff' },
  Webpack:      { icon: SiWebpack,     color: '#8dd6f9' },
  Figma:        { icon: SiFigma,       color: '#f24e1e' },
};

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#7c3aed',
  Backend:  '#06b6d4',
  Database: '#22c55e',
  Tools:    '#ec4899',
};

export default function Skills() {
  const { skills } = PORTFOLIO;
  const { ref, isInView } = useScrollReveal();
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ background: '#0a0a16' }}>
      {/* Subtle background glow */}
      <div
        className="orb w-[600px] h-[300px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'rgba(124,58,237,0.06)' }}
      />

      <div className="section" ref={ref}>
        <p className="section-label">03. Skills</p>
        <h2 className="section-title">What I Work With</h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(([category, items], catIndex) => {
            const accent = CATEGORY_COLORS[category] ?? '#7c3aed';
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="rounded-xl p-6 relative group transition-all duration-300"
                style={{
                  background: 'rgba(10,10,22,0.8)',
                  border: `1px solid rgba(30,30,53,0.8)`,
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${accent}15, inset 0 0 20px ${accent}05`;
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,30,53,0.8)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-6 rounded-full"
                    style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
                  />
                  <h3 className="font-mono text-xs tracking-widest uppercase" style={{ color: accent }}>
                    {category}
                  </h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {items.map((skill, i) => {
                    const meta = ICON_MAP[skill];
                    const Icon = meta?.icon;
                    const iconColor = meta?.color ?? accent;
                    return (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.05 }}
                        className="flex items-center gap-3 group/item cursor-default"
                      >
                        <span
                          className="flex-shrink-0 transition-all duration-200"
                          style={{ color: iconColor, filter: 'brightness(0.7)' }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.filter = `brightness(1) drop-shadow(0 0 4px ${iconColor})`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.filter = 'brightness(0.7)';
                          }}
                        >
                          {Icon ? <Icon size={16} /> : (
                            <span className="w-1.5 h-1.5 rounded-full block" style={{ background: accent }} />
                          )}
                        </span>
                        <span
                          className="text-sm transition-colors duration-200"
                          style={{ color: '#94a3b8' }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = '#f0f0ff';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                          }}
                        >
                          {skill}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
