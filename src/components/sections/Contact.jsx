import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';
import { HiDownload, HiMail, HiLocationMarker } from 'react-icons/hi';
import { personalInfo, socialLinks } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { slideLeft, slideRight, buttonHover } from '../../utils/animations';

const initialForm = { name: '', email: '', subject: '', message: '' };

/** Validates contact form fields and returns error map. */
function validateForm(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email';

  if (!data.subject.trim()) errors.subject = 'Subject is required';
  else if (data.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters';

  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';

  return errors;
}

/**
 * Contact section with info cards, resume download, and validated form.
 */
export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData(initialForm);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaUser,
      label: 'Name',
      value: personalInfo.name,
      href: null,
    },
    {
      icon: HiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'abhishekhugar57',
      href: personalInfo.github,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'abhishekhugar',
      href: personalInfo.linkedin,
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-dark-700/50 border text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30'
        : 'border-white/10 focus:border-accent-purple/50 focus:ring-accent-purple/30'
    }`;

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            {...slideLeft}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <GlassCard className="p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20">
                    <info.icon className="text-xl text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent-cyan transition-colors text-sm sm:text-base break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Resume download */}
            <motion.a
              href={encodeURI(personalInfo.resumeUrl)}
              download={personalInfo.resumeDownloadName}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 transition-shadow"
              {...buttonHover}
            >
              <HiDownload />
              Download Resume
            </motion.a>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-accent-purple/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={link.name}
                >
                  {link.icon === 'github' && <FaGithub size={20} />}
                  {link.icon === 'linkedin' && <FaLinkedin size={20} />}
                  {link.icon === 'email' && <HiMail size={20} />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            {...slideRight}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass('subject')}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 transition-shadow"
                  {...buttonHover}
                >
                  {submitted ? 'Opening Email Client...' : 'Send Message'}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
