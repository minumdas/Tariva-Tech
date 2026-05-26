import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
  Menu, X, CheckCircle2, Database, Globe, Settings, BarChart3,
  Users, Mail, MapPin, Phone, Linkedin, Twitter, Github,
  ChevronDown, Zap, Shield, Cpu, Code, TestTube2, Server,
  Package, Truck, Clock, TrendingUp, Award, ArrowRight,
  Play, ExternalLink
} from 'lucide-react';

const navItems = ['Services', 'IBM Sterling', 'Expertise', 'Team', 'Contact'];

const services = [
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
    title: 'IBM Sterling WMS & OMS',
    description: 'Expert implementation and customization of IBM Sterling Warehouse and Order Management Systems.',
    features: ['WMS Implementation', 'OMS Configuration', 'Integration Services', 'Custom Development'],
    color: 'from-emerald-500 to-green-500',
  },
];

const ibmSterlingFeatures = [
  { label: 'WMS Implementations', value: 150, suffix: '+' },
  { label: 'OMS Deployments', value: 120, suffix: '+' },
  { label: 'Certified Experts', value: 25, suffix: '' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];

const techStack = [
  { name: 'React & Next.js', level: 95 },
  { name: 'IBM Sterling Suite', level: 98 },
  { name: 'Node.js & Python', level: 90 },
  { name: 'Cloud (AWS/Azure)', level: 88 },
  { name: 'Database Systems', level: 92 },
  { name: 'DevOps & CI/CD', level: 85 },
];

const team = [
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

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Progress Bar Component
function ProgressBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-primary-600 font-semibold">{level}%</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full gradient-bg"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1.5, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

// Floating Icon Component
function FloatingIcon({ icon: Icon, delay, className }: { icon: React.ElementType; delay: number; className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="w-12 h-12 rounded-xl glass shadow-lg flex items-center justify-center text-primary-500">
        <Icon className="w-6 h-6" />
      </div>
    </motion.div>
  );
}

// Warehouse Flow Animation Component
function WarehouseFlowAnimation() {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 md:h-80">
      {/* Central Node */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-2xl gradient-bg shadow-glow-lg flex items-center justify-center z-10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Package className="w-10 h-10 md:w-12 md:h-12 text-white" />
      </motion.div>

      {/* Orbiting Elements */}
      {[
        { icon: Database, angle: 0, label: 'Inventory' },
        { icon: Truck, angle: 60, label: 'Shipping' },
        { icon: Clock, angle: 120, label: 'Tracking' },
        { icon: BarChart3, angle: 180, label: 'Analytics' },
        { icon: Settings, angle: 240, label: 'Config' },
        { icon: Shield, angle: 300, label: 'Security' },
      ].map((item, i) => {
        const radius = 100;
        const x = Math.cos((item.angle * Math.PI) / 180) * radius;
        const y = Math.sin((item.angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={item.label}
            className="absolute top-1/2 left-1/2 w-14 h-14 md:w-16 md:h-16 -ml-7 md:-ml-8 -mt-7 md:-mt-8 rounded-xl glass shadow-lg flex flex-col items-center justify-center"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, x * 0.3, x],
              y: [0, y * 0.3, y],
              opacity: [0, 0.5, 1],
            }}
            transition={{ duration: 1, delay: i * 0.1 }}
          >
            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
            <span className="text-[10px] md:text-xs text-gray-600 mt-1">{item.label}</span>
          </motion.div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.2)" />
            <stop offset="50%" stopColor="rgba(14, 165, 233, 0.4)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.2)" />
          </linearGradient>
        </defs>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const radius = 90;
          const x1 = 50;
          const y1 = 50;
          const x2 = 50 + Math.cos((angle * Math.PI) / 180) * (radius / 2);
          const y2 = 50 + Math.sin((angle * Math.PI) / 180) * (radius / 2);

          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
            />
          );
        })}
      </svg>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      <div className="relative glass-dark rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-glow-lg group-hover:-translate-y-2">
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <service.icon className="w-7 h-7 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

        <div className="space-y-2">
          {service.features.map((feature, i) => (
            <motion.div
              key={feature}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle2 className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Team Card Component
function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="glass-dark rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-glow-lg group-hover:-translate-y-3">
        <div className="relative h-64 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
          <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>

          <motion.div
            className="flex gap-3 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                Tariva<span className="text-primary-500">Tech</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-6 py-2.5 gradient-bg text-white font-medium rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden glass-dark border-t border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-gray-700 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block w-full text-center px-6 py-3 gradient-bg text-white font-medium rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/20 to-cyan-100/20 rounded-full blur-3xl" />
        </div>

        {/* Floating Icons */}
        <FloatingIcon icon={Database} delay={0} className="top-32 left-[10%] hidden lg:block" />
        <FloatingIcon icon={Cpu} delay={0.5} className="top-40 right-[15%] hidden lg:block" />
        <FloatingIcon icon={Shield} delay={1} className="bottom-40 left-[20%] hidden lg:block" />
        <FloatingIcon icon={Globe} delay={1.5} className="bottom-32 right-[10%] hidden lg:block" />

        {/* Mouse Following Effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            x,
            y,
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Trusted by Enterprise Leaders</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Ideas into
              <br />
              <span className="gradient-text">Digital Excellence</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premier IT solutions specializing in QA Testing, Web Development, Application Support,
              and IBM Sterling WMS & OMS implementation. Building the future of enterprise technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#services"
                className="group px-8 py-4 gradient-bg text-white font-semibold rounded-full shadow-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group px-8 py-4 glass-dark text-gray-700 font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5 text-primary-500" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Warehouse Flow Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <WarehouseFlowAnimation />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end technology services designed to accelerate your digital transformation journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* IBM Sterling Section */}
      <section id="ibm-sterling" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
                Specialized Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IBM Sterling WMS & OMS Specialists
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our certified experts deliver world-class IBM Sterling implementations that
                revolutionize warehouse operations and order management. We bring deep industry
                knowledge to optimize your supply chain technology stack.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Warehouse Management', 'Order Management', 'Supply Chain Integration', 'YMS Solutions'].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-medium rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {ibmSterlingFeatures.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-dark rounded-2xl p-6 text-center shadow-lg hover:shadow-glow transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Technical Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Deep proficiency across modern technologies powering enterprise solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="glass-dark rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Core Technology Skills</h3>
              {techStack.map((tech, index) => (
                <ProgressBar key={tech.name} name={tech.name} level={tech.level} delay={index * 0.1} />
              ))}
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  icon: Award,
                  title: 'Certified Professionals',
                  desc: 'IBM Sterling certified architects and developers',
                },
                {
                  icon: TrendingUp,
                  title: 'Proven Track Record',
                  desc: '150+ successful enterprise implementations',
                },
                {
                  icon: Users,
                  title: 'Dedicated Team',
                  desc: '25+ experienced professionals worldwide',
                },
                {
                  icon: Clock,
                  title: '24/7 Support',
                  desc: 'Round-the-clock application support services',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4 glass-dark rounded-xl p-5 shadow hover:shadow-glow transition-shadow duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Industry veterans with decades of combined experience in enterprise IT solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let's Build Something Amazing
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ready to transform your business with cutting-edge technology solutions?
                Our team is here to help you navigate your digital transformation journey.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, text: 'Bangalore, India' },
                  { icon: Phone, text: '+91 80 4567 8900' },
                  { icon: Mail, text: 'info@tarivatech.com' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                {[Linkedin, Twitter, Github].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="glass-dark rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all">
                      <option>Select a service</option>
                      <option>QA Testing</option>
                      <option>Web Development</option>
                      <option>Application Support</option>
                      <option>IBM Sterling WMS/OMS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-4 gradient-bg text-white font-semibold rounded-xl shadow-lg hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">
                  Tariva<span className="text-primary-400">Tech</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming businesses through innovative technology solutions and expert consulting services.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['QA Testing', 'Web Development', 'Application Support', 'IBM Sterling'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Team', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Github].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@tarivatech.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Tariva Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
