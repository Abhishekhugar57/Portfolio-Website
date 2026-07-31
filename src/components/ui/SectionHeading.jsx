import { motion } from 'framer-motion';

/**
 * Consistent section heading with optional subtitle and decorative line.
 */
export default function SectionHeading({ title, subtitle, id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent-blue" />
        <span className="w-2 h-2 rounded-full bg-accent-purple" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent-purple" />
      </div>
    </motion.div>
  );
}
