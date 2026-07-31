import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { education } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeUp, hoverLift } from '../../utils/animations';

/**
 * Education section with timeline styling and graduation details.
 */
export default function Education() {
  return (
    <section id="education" className="section-padding relative bg-dark-800/30">
      <div className="container-custom">
        <SectionHeading title="Education" subtitle="My academic background" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent hidden sm:block" />

          <motion.div
            {...fadeUp}
            className="relative pl-0 sm:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple border-4 border-dark-800 hidden sm:block" />

            <motion.div {...hoverLift}>
              <GlassCard className="p-6 sm:p-8 ml-0 sm:ml-4">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10 shrink-0">
                    <FaGraduationCap className="text-3xl sm:text-4xl text-accent-cyan" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {education.degree}
                    </h3>

                    <div className="flex items-start gap-2 text-gray-400">
                      <FaUniversity className="text-accent-purple shrink-0 mt-1" />
                      <span className="text-sm sm:text-base leading-relaxed">
                        {education.institution}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-purple/10 border border-accent-purple/20">
                      <span className="text-gray-400 text-sm">CGPA:</span>
                      <span className="text-accent-cyan font-bold font-mono text-lg">
                        {education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
