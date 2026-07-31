/**
 * Central portfolio content — edit here to update site copy, links, and data.
 */
export const personalInfo = {
  name: 'Abhishek Hugar',
  title: 'Full Stack MERN Developer',
  tagline:
    'I build scalable, secure, and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js.',
  email: 'abhishekhugar56@gmail.com',
  github: 'https://github.com/abhishekhugar57',
  linkedin: 'https://www.linkedin.com/in/abhishek-hugar-84973236b/',
  location: 'Karnataka, India',
  resumeUrl: '/resume/ABHISHEK HUGAR (1) (2).pdf',
  resumeDownloadName: 'Abhishek-Hugar-Resume.pdf',
  openToWork: true,
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const typingRoles = [
  'Full Stack MERN Developer',
  'React.js Developer',
  'Node.js Developer',
  'Problem Solver',
];

export const aboutText =
  "I'm a passionate Full Stack MERN Developer and BCA graduate who enjoys building scalable, secure, and responsive web applications using the MERN stack. I love solving real-world problems through clean code and continuously learning modern technologies.";

export const skillCategories = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'TechNova – Full Stack E-Commerce Website',
    shortDescription:
      'A full-featured e-commerce platform with authentication, role-based access, and complete order management.',
    features: [
      'JWT Authentication',
      'Role-Based Access Control',
      'Shopping Cart',
      'Product Reviews',
      'Order Management',
      'Responsive Design',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveUrl: 'https://technova-store-five.vercel.app/',
    githubUrl: 'https://github.com/abhishekhugar57/TechNova',
    image: '/projects/technova.png',
    imageAlt: 'TechNova E-Commerce Website Screenshot',
  },
  {
    id: 2,
    title: 'Personal Finance & Loan Tracker',
    shortDescription:
      'A MERN stack finance app for tracking income, expenses, loans, and visualizing financial analytics.',
    features: [
      'Income Tracking',
      'Expense Tracking',
      'Loan Management',
      'Dashboard Analytics',
      'Authentication',
      'Category Management',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveUrl: 'https://personal-finance-expense-app.vercel.app/',
    githubUrl: 'https://github.com/abhishekhugar57',
    image: '/projects/fintrack.png',
    imageAlt: 'Personal Finance & Loan Tracker Dashboard Screenshot',
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Karnataka University / IBMR Degree College',
  cgpa: '8.3',
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/abhishekhugar57',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abhishek-hugar-84973236b/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:abhishekhugar56@gmail.com',
    icon: 'email',
  },
];