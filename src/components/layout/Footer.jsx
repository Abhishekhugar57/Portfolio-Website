import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo, socialLinks, footerLinks } from '../../data/portfolio';
import { scrollToSection } from '../../hooks/useActiveSection';

/**
 * Site footer with brand, navigation links, and social icons.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const renderSocialIcon = (icon) => {
    if (icon === 'github') return <FaGithub size={18} />;
    if (icon === 'linkedin') return <FaLinkedin size={18} />;
    return <HiMail size={18} />;
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-800/50">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm">{personalInfo.title}</p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 text-sm hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass text-gray-400 hover:text-white hover:border-accent-purple/30 transition-all"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
