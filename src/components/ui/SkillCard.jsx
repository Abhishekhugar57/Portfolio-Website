import { motion } from 'framer-motion';
import {
  FaCode,
  FaCloud,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaKey,
  FaLayerGroup,
  FaNodeJs,
  FaReact,
  FaServer,
  FaTools,
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss } from 'react-icons/si';
import { scaleIn, staggerContainer, staggerItem, hoverLift } from '../../utils/animations';

const categoryIcons = {
  frontend: FaLayerGroup,
  backend: FaServer,
  database: FaDatabase,
  tools: FaTools,
};

const skillIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'REST APIs': FaCloud,
  'JWT Authentication': FaKey,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'VS Code': FaCode,
  Postman: SiPostman,
};

/**
 * Category block with individual skill cards — icons, gradient border, glow on hover.
 */
export default function SkillCard({ category, index }) {
  const CategoryIcon = categoryIcons[category.icon] || FaCode;

  return (
    <motion.div
      {...scaleIn}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="glass rounded-2xl p-6 h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10">
            <CategoryIcon className="text-xl text-accent-cyan" />
          </div>
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 gap-3"
        >
          {category.skills.map((skill) => {
            const SkillIcon = skillIcons[skill] || FaCode;
            return (
              <motion.div
                key={skill}
                variants={staggerItem}
                {...hoverLift}
                className="group relative"
              >
                <div className="skill-glow relative rounded-xl p-3 text-center transition-all duration-300 bg-dark-700/40 border border-white/5 group-hover:border-accent-purple/40 group-hover:bg-white/5 group-hover:shadow-lg group-hover:shadow-accent-purple/10">
                  <SkillIcon className="text-2xl mx-auto mb-2 text-accent-cyan group-hover:text-accent-purple transition-colors duration-300" />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
