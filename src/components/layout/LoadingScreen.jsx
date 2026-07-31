import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

/**
 * Full-screen loading animation shown on initial page load.
 */
export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-3xl font-bold text-white shadow-2xl shadow-accent-purple/30">
          AH
        </div>
        <motion.div
          className="absolute -inset-2 rounded-2xl border-2 border-accent-purple/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-semibold text-white mb-2"
      >
        {personalInfo.name}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-sm mb-8"
      >
        {personalInfo.title}
      </motion.p>

      {/* Loading bar */}
      <div className="w-48 h-1 rounded-full bg-dark-700 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
