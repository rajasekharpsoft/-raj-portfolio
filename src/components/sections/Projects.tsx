import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { PORTFOLIO } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { Project } from '../../types/portfolio';

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const accent = index % 3 === 0 ? '#7c3aed' : index % 3 === 1 ? '#06b6d4' : '#ec4899';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl flex flex-col relative overflow-hidden group transition-all duration-300"
      style={{
        background: 'rgba(10,10,22,0.85)',
        border: `1px solid rgba(30,30,53,0.8)`,
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${accent}40`;
        el.style.boxShadow = `0 0 30px ${accent}15, 0 0 60px ${accent}08`;
        el.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(30,30,53,0.8)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Top neon line */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          boxShadow: `0 0 8px ${accent}`,
        }}
      />

      {project.featured && (
        <div
          className="absolute top-4 right-4 flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full z-10"
          style={{
            background: `${accent}15`,
            border: `1px solid ${accent}40`,
            color: accent,
            boxShadow: `0 0 10px ${accent}20`,
          }}
        >
          <Zap size={10} />
          Featured
        </div>
      )}

      {/* Image / placeholder */}
      <div
        className="relative overflow-hidden m-4 mb-0 rounded-lg flex items-center justify-center"
        style={{ height: '160px', background: 'rgba(8,8,16,0.8)', border: '1px solid rgba(30,30,53,0.6)' }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-3xl" style={{ color: `${accent}30` }}>{`</>`}</span>
            <span className="font-mono text-xs" style={{ color: '#475569' }}>no preview</span>
          </div>
        )}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${accent}10, transparent)` }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-bold text-lg mb-2 transition-colors duration-200"
          style={{ color: '#f0f0ff' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#94a3b8' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-3" style={{ borderTop: '1px solid rgba(30,30,53,0.6)' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = accent;
                el.style.filter = `drop-shadow(0 0 4px ${accent})`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#475569';
                el.style.filter = 'none';
              }}
            >
              <GithubIcon size={14} /> Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#67e8f9';
                el.style.filter = 'drop-shadow(0 0 4px #06b6d4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#475569';
                el.style.filter = 'none';
              }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = PORTFOLIO;
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ background: '#080810' }}>
      <div
        className="orb absolute w-96 h-96 bottom-0 right-0"
        style={{ background: 'rgba(6,182,212,0.05)' }}
      />
      <div
        className="orb absolute w-64 h-64 top-1/2 left-0 -translate-y-1/2"
        style={{ background: 'rgba(236,72,153,0.04)' }}
      />

      <div className="section" ref={ref}>
        <p className="section-label">04. Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
