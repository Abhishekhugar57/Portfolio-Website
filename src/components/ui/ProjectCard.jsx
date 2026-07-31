import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import GlassCard from './GlassCard';
import { buttonHover } from '../../utils/animations';

/**
 * Featured project card with screenshot, features, tech badges, and action links.
 */
export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group h-full"
    >
      <GlassCard hover className="overflow-hidden h-full flex flex-col">
        {/* Fixed-height screenshot container */}
        <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl bg-dark-800">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-dark-900/10 group-hover:bg-dark-900/0 transition-colors duration-500 pointer-events-none" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.shortDescription}</p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-blue/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Feature list */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 flex-1">
            {project.features.map((feature) => (
              <li key={feature} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-accent-purple mt-0.5 shrink-0">▹</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-auto">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-shadow"
              {...buttonHover}
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-gray-300 text-sm font-medium hover:text-white"
              {...buttonHover}
            >
              <FaGithub />
              GitHub Repository
            </motion.a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
