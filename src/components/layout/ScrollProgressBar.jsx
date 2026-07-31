import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useActiveSection';

/**
 * Fixed top progress bar indicating scroll position.
 */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
    >
      <div className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan shadow-lg shadow-accent-purple/30" />
    </motion.div>
  );
}
