import { motion } from 'framer-motion';

/**
 * Reusable glassmorphism card wrapper with optional hover effects.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      className={`glass rounded-2xl ${hover ? 'glass-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
