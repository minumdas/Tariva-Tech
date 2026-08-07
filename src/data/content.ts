import {
  TestTube2,
  Code,
  Server,
  Package,
  Play,
  FileText,
  ClipboardList,
  Bot,
  Globe,
  Radio,
  BarChart3,
  RefreshCw,
} from 'lucide-react';

export const navItems = ['Services', 'Expertise','About Us', 'Contact'];

export const sectionId = (label: string) => label.toLowerCase().trim().replace(/\s+/g, '-');

export const services = [
  {
    icon: TestTube2,
    title: 'QA Testing',
    description: 'Comprehensive quality assurance with automated and manual testing strategies ensuring flawless software delivery.',
    features: ['Test Automation', 'Performance Testing', 'Security Testing', 'API Testing'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies for optimal performance and user experience.',
    features: ['React/Next.js', 'Node.js/AWS', 'Progressive Web Apps', 'Cloud Solutions'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Server,
    title: 'Application Support',
    description: '24/7 application monitoring, maintenance, and support ensuring business continuity and minimal downtime.',
    features: ['24/7 Monitoring', 'Incident Management', 'Performance Optimization', 'Bug Fixes'],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Package,
    title: 'Automation Robot Framework',
    description: 'Deliver robust and scalable web test automation solutions using Robot Framework and Selenium WebDriver.',
    features: ['Robot Framework Automation', 'Selenium WebDriver', 'Test Case Management', 'Reporting and Analytics'],
    color: 'from-emerald-500 to-green-500',
  },
];

export const techStack = [
  { name: 'Robot Framework', level: 98 },
  { name: 'Selenium WebDriver', level: 96 },
  { name: 'Python (Automation)', level: 95 },
  { name: 'API Testing (Postman/REST Assured)', level: 94 },
  { name: 'IBM Sterling OMS/WMS', level: 95 },
  { name: 'SQL & Database Testing', level: 92 },
  { name: 'Test Automation Framework Design', level: 90 },
  { name: 'CI/CD (Jenkins, GitHub Actions)', level: 88 },
  { name: 'Git & Version Control', level: 90 },
  { name: 'Performance Testing (JMeter)', level: 85 },
];

export const team = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    description: '20+ years in enterprise software with deep expertise in supply chain solutions.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO',
    description: 'IBM Sterling certified architect specializing in WMS/OMS implementations.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Arjun Patel',
    role: 'Head of QA',
    description: 'Test automation expert ensuring quality across all deliverables.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Ananya Singh',
    role: 'Lead Developer',
    description: 'Full-stack specialist building scalable enterprise applications.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const automationSteps = [
  { icon: Play, title: 'Client Request', description: 'A new idea or release need arrives with clear goals.' },
  { icon: FileText, title: 'Requirement Analysis', description: 'We align scope, risk, and success criteria in one view.' },
  { icon: ClipboardList, title: 'Test Planning', description: 'User journeys are mapped into precise validation steps.' },
  { icon: Bot, title: 'Robot Framework', description: 'Reusable automation flows are built for consistency.' },
  { icon: Globe, title: 'Selenium Testing', description: 'Cross-browser execution validates the experience in real environments.' },
  { icon: Radio, title: 'Test Execution', description: 'The suite runs continuously with live progress and feedback.' },
  { icon: BarChart3, title: 'Reports', description: 'Clear metrics and evidence help teams move faster.' },
  { icon: RefreshCw, title: 'Continuous Improvement', description: 'Each cycle refines stability, coverage, and confidence.' },
];

export const statusBadges = ['✔ Tests Running', '✔ Browser Validation', '✔ Reports Generated', '✔ CI/CD Ready'];

export const contactDetails = [
  { icon: 'MapPin', text: 'Kammagondahalli,Bangalore' },
 
  { icon: 'Mail', text: 'info@tarivatech.com' },
];

export const socialLinks = [
  { name: 'Linkedin', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Github', href: '#' },
];
