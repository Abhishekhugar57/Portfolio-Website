import { skillCategories } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import SkillCard from '../ui/SkillCard';

/**
 * Skills section with categorized icon cards.
 */
export default function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-dark-800/30">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
