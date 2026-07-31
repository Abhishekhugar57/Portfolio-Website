import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';
import { aboutText } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { slideLeft, slideRight, hoverLift } from '../../utils/animations';

const highlights = [
  { icon: FaGraduationCap, label: 'BCA Graduate', color: 'text-accent-blue' },
  { icon: FaCode, label: 'MERN Stack', color: 'text-accent-purple' },
  { icon: FaRocket, label: 'Problem Solver', color: 'text-accent-cyan' },
];

/**
 * About Me section with bio and highlight cards.
 */
export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Profile visual */}
          <motion.div
            {...slideLeft}
            className="lg:col-span-2 flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-accent-blue/30 via-accent-purple/30 to-accent-cyan/30 flex items-center justify-center gradient-border">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl bg-dark-800 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl font-bold gradient-text">AH</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            {...slideRight}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <motion.div {...hoverLift}>
              <GlassCard hover className="p-6 sm:p-8">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{aboutText}</p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  {...hoverLift}
                >
                  <GlassCard className="p-4 text-center">
                    <item.icon className={`text-2xl mx-auto mb-2 ${item.color}`} />
                    <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
