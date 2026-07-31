import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, typingRoles } from '../../data/portfolio';
import { scrollToSection } from '../../hooks/useActiveSection';
import TypingEffect from '../ui/TypingEffect';
import { buttonHover } from '../../utils/animations';
import profileImage from '../../assets/profile.jpg';

/**
 * Hero section with animated intro, typing effect, and CTA buttons.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-8 lg:gap-12">
          {/* Profile image — above text on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center order-1 md:order-2 w-full md:w-[45%] shrink-0 max-w-full"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03 }}
              className="relative transition-transform duration-300 max-w-full"
            >
              <motion.div
                animate={{
                  opacity: [0.2, 0.38, 0.2],
                  scale: [0.98, 1.03, 0.98],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-blue/35 via-accent-purple/30 to-indigo-500/20 blur-xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-2 shadow-[0_0_20px_rgba(99,102,241,0.12)]">
                <div className="rounded-2xl p-[2px] bg-gradient-to-br from-accent-blue/45 via-accent-purple/45 to-indigo-400/35">
                  <div className="w-[160px] h-[200px] md:w-[220px] md:h-[275px] lg:w-[260px] lg:h-[325px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.28)]">
                    <img
                      src={profileImage}
                      alt={`${personalInfo.name} profile`}
                      width={260}
                      height={325}
                      className="h-full w-full object-cover object-[center_18%] contrast-[1.05] saturate-[1.05]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-[55%] order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start"
          >
          {/* Open to Work badge */}
          {personalInfo.openToWork && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-accent-blue/10 text-accent-cyan border border-accent-blue/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Open to Work
              </span>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-accent-cyan font-mono text-sm sm:text-base mb-4"
          >
            Hello, World! I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6 min-h-[2.5rem] sm:min-h-[3rem]"
          >
            <TypingEffect texts={typingRoles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 transition-shadow"
              {...buttonHover}
            >
              View Projects
            </motion.button>

            <motion.button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-xl glass text-gray-300 font-medium hover:text-white flex items-center gap-2"
              {...buttonHover}
            >
              <HiMail />
              Contact Me
            </motion.button>

            <motion.a
              href={encodeURI(personalInfo.resumeUrl)}
              download={personalInfo.resumeDownloadName}
              className="px-6 py-3 rounded-xl glass text-gray-300 font-medium hover:text-white flex items-center gap-2"
              {...buttonHover}
            >
              <HiDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center gap-4 mt-10 justify-center md:justify-start"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-accent-purple/30 transition-all"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-accent-purple/30 transition-all"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-accent-purple/30 transition-all"
              aria-label="Email"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <HiMail size={20} />
            </motion.a>
          </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll to about section"
        >
          <span className="text-gray-500 text-xs font-mono group-hover:text-accent-cyan transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-gray-600 group-hover:border-accent-purple flex items-start justify-center p-1 transition-colors"
          >
            <div className="w-1 h-2 rounded-full bg-accent-purple" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
