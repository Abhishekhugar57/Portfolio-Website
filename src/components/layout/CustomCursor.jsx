import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Custom cursor with trailing dot — desktop only.
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return undefined;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const isClickable =
        target.closest('a, button, [role="button"], input, textarea, select, label');
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: position.x - (isPointer ? 20 : 8),
          y: position.y - (isPointer ? 20 : 8),
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`rounded-full border-2 border-white transition-all duration-200 ${
            isPointer ? 'w-10 h-10 opacity-60' : 'w-4 h-4 opacity-80'
          }`}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        animate={{ x: position.x - 3, y: position.y - 3 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
      </motion.div>
    </>
  );
}
