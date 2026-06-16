import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
  Menu, X, CheckCircle2, Database, Globe, Settings, BarChart3,
  Users, Mail, MapPin, Phone, Linkedin, Twitter, Github,
  ChevronDown, Zap, Shield, Cpu, Code, TestTube2, Server,
  Package, Truck, Clock, TrendingUp, Award, ArrowRight,
  Play, Box, Warehouse, Forklift,
  ShoppingCart, ScanLine,
  Radio, Check
} from 'lucide-react';

const navItems = ['Services', 'Warehouse Flow', 'IBM Sterling', 'Expertise', 'Contact'];

const sectionId = (label: string) => label.toLowerCase().trim().replace(/\s+/g, '-');



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
    title: 'Specialized WMS & OMS',
    description: 'Expert implementation and customization of Warehouse and Order Management Systems.',
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

// Animated Package Component
function WarehouseBox({ delay = 0, size = 'sm' }: { delay?: number; size?: 'sm' | 'md' }) {
  const boxSize = size === 'sm' ? 'w-5 h-4' : 'w-7 h-5';
  const iconSize = size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5';

  return (
    <motion.div
      className={`${boxSize} bg-gradient-to-br from-primary-400 to-cyan-500 rounded shadow-lg flex items-center justify-center border border-white/30`}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: [0.7, 1, 0.7], y: [0, -3, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity }}
    >
      <Box className={`${iconSize} text-white`} />
    </motion.div>
  );
}

// Warehouse Zone Label Component
function ZoneLabel({ label, active, position }: { label: string; active: boolean; position: 'top' | 'bottom' | 'left' | 'right' }) {
  const positionClasses = {
    top: '-top-8 left-1/2 -translate-x-1/2',
    bottom: '-bottom-8 left-1/2 -translate-x-1/2',
    left: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-2',
    right: 'right-0 top-1/2 -translate-y-1/2 translate-x-full pl-2',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} text-xs font-medium whitespace-nowrap`}
      animate={active ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <span className={`px-2 py-1 rounded ${active ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}>
        {label}
      </span>
    </motion.div>
  );
}

// Animated Status Indicator Component
function StatusIndicator({ status, active }: { status: string; active: boolean }) {
  return (
    <motion.div
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium ${
        active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
      }`}
      animate={active ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <motion.div
        className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'}`}
        animate={active ? { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      {status}
    </motion.div>
  );
}

// Storage Rack Component
function StorageRack({ filled = 0, active = false }: { filled?: number; active?: boolean }) {
  const levels = 4;

  return (
    <div className={`flex flex-col gap-1 p-1 rounded-lg ${active ? 'bg-primary-50/50' : 'bg-gray-100/50'}`}>
      {[...Array(levels)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-6 h-4 rounded flex items-center justify-center transition-colors ${
            i < filled ? 'bg-gradient-to-br from-primary-400 to-cyan-500 shadow-sm' : 'bg-gray-200/50'
          }`}
          animate={active && i < filled ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        >
          {i < filled && <Box className="w-2.5 h-2.5 text-white" />}
        </motion.div>
      ))}
    </div>
  );
}

// Live Warehouse Environment Section
function WarehouseFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const springConfig = { damping: 25, stiffness: 100 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  // Cycle through active zones
  useEffect(() => {
    const zones = ['inbound', 'receiving', 'storage', 'picking', 'packing', 'dispatch'];
    const interval = setInterval(() => {
      setActiveZone(zones[Math.floor(Date.now() / 4000) % zones.length]);
    }, 4000);
    setActiveZone('inbound');
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  return (
    <section
      id="warehouse-flow"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/40" />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 0%, transparent 0),
            linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px, 60px 60px, 60px 60px',
          x: parallaxX,
          y: parallaxY
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl pointer-events-none"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            animate={{
              boxShadow: ['0 0 20px rgba(14, 165, 233, 0.1)', '0 0 30px rgba(14, 165, 233, 0.2)', '0 0 20px rgba(14, 165, 233, 0.1)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-gray-700">Live Smart Warehouse</span>
            <motion.div
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-100 text-primary-700 text-xs"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Radio className="w-3 h-3" />
              Connected
            </motion.div>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Live Warehouse{' '}
            <span className="gradient-text">Operations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real-time visualization of WMS & OMS orchestrating warehouse operations
          </p>
        </motion.div>

        {/* Main Warehouse Visualization */}
        <motion.div
          className="glass-dark rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ minHeight: '380px', maxHeight: '450px' }}
        >
          {/* Warehouse Floor Grid */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          {/* Status Badges Row */}
          <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
            <StatusIndicator status="Receiving Active" active={activeZone === 'receiving'} />
            <StatusIndicator status="Inventory Updated" active={activeZone === 'storage'} />
            <StatusIndicator status="Picking in Progress" active={activeZone === 'picking'} />
            <StatusIndicator status="Ready for Shipment" active={activeZone === 'dispatch'} />
          </div>

          {/* Warehouse Scene */}
          <div className="relative grid grid-cols-12 gap-2 sm:gap-3" style={{ height: 'calc(100% - 50px)' }}>
            {/* LEFT: Inbound Truck + Dock */}
            <div className="col-span-2 flex flex-col gap-2 relative">
              {/* Inbound Truck */}
              <motion.div
                className={`relative glass rounded-xl p-2 flex-1 flex flex-col items-center justify-center ${
                  activeZone === 'inbound' ? 'ring-2 ring-primary-400 shadow-glow' : ''
                }`}
                animate={activeZone === 'inbound' ? { scale: [1, 1.02, 1] } : {}}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-10 sm:w-12 h-6 sm:h-7 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center mb-1"
                  animate={{
                    x: activeZone === 'inbound' ? [0, 3, 0] : 0
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </motion.div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center">Inbound</span>

                {/* Animated boxes falling from truck */}
                {activeZone === 'inbound' && (
                  <motion.div
                    className="absolute -right-2 top-1/3"
                    animate={{ y: [0, 8, 0], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <WarehouseBox />
                  </motion.div>
                )}

                <ZoneLabel label="Dock" active={activeZone === 'inbound'} position="bottom" />
              </motion.div>

              {/* Receiving Area */}
              <motion.div
                className={`relative glass rounded-xl p-2 flex-1 flex flex-col items-center justify-center ${
                  activeZone === 'receiving' ? 'ring-2 ring-cyan-400 shadow-glow' : ''
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg mb-1"
                  animate={activeZone === 'receiving' ? { rotate: [0, -5, 5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ScanLine className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </motion.div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center">Receiving</span>

                {/* Scanning beam effect */}
                {activeZone === 'receiving' && (
                  <motion.div
                    className="absolute inset-x-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ y: [15, 45, 15], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                <ZoneLabel label="Scan Bay" active={activeZone === 'receiving'} position="bottom" />
              </motion.div>
            </div>

            {/* CENTER-LEFT: Storage Racks */}
            <div className="col-span-3 relative">
              <motion.div
                className={`h-full glass rounded-xl p-2 sm:p-3 flex flex-col ${
                  activeZone === 'storage' ? 'ring-2 ring-teal-400 shadow-glow' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">Storage Racks</span>
                  <motion.div
                    className="flex items-center gap-1 text-[9px] text-teal-600"
                    animate={activeZone === 'storage' ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Database className="w-3 h-3" />
                    <span>87%</span>
                  </motion.div>
                </div>

                {/* Rack Grid */}
                <div className="flex-1 grid grid-cols-4 gap-1.5">
                  {[4, 3, 4, 3, 4, 2, 3, 4, 2, 3, 4, 3].map((filled, i) => (
                    <StorageRack key={i} filled={filled} active={activeZone === 'storage' && i < 4} />
                  ))}
                </div>

                {/* Forklift moving in aisle */}
                <motion.div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2"
                  animate={{ x: [-20, 20, -20] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-6 sm:w-8 h-4 sm:h-5 bg-gradient-to-r from-amber-400 to-orange-500 rounded shadow-md flex items-center justify-center">
                    <Forklift className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                </motion.div>

                <ZoneLabel label="Storage Aisle" active={activeZone === 'storage'} position="bottom" />
              </motion.div>
            </div>

            {/* CENTER: Picking & Packing */}
            <div className="col-span-3 flex flex-col gap-2 relative">
              {/* Picking Zone */}
              <motion.div
                className={`relative glass rounded-xl p-2 flex-1 flex flex-col items-center justify-center ${
                  activeZone === 'picking' ? 'ring-2 ring-green-400 shadow-glow' : ''
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-1 mb-1">
                  <motion.div
                    className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg"
                    animate={activeZone === 'picking' ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </motion.div>
                  {/* Mini rack */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-3 h-4 rounded flex items-center justify-center ${
                          i < 2 ? 'bg-gradient-to-br from-primary-400 to-cyan-500' : 'bg-gray-200'
                        }`}
                        animate={activeZone === 'picking' && i < 2 ? { y: [0, -2, 0] } : {}}
                        transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
                      >
                        {i < 2 && <Box className="w-2 h-2 text-white" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600">Picking Zone</span>

                {/* Picker hand animation */}
                {activeZone === 'picking' && (
                  <motion.div
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    animate={{ x: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg" />
                  </motion.div>
                )}

                <ZoneLabel label="Pick Area" active={activeZone === 'picking'} position="bottom" />
              </motion.div>

              {/* Packing Station */}
              <motion.div
                className={`relative glass rounded-xl p-2 flex-1 flex flex-col items-center justify-center ${
                  activeZone === 'packing' ? 'ring-2 ring-yellow-400 shadow-glow' : ''
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="flex items-center gap-1.5 mb-1"
                  animate={activeZone === 'packing' ? {} : {}}
                >
                  <motion.div
                    className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
                    animate={activeZone === 'packing' ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Package className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Sealing effect */}
                  {activeZone === 'packing' && (
                    <motion.div
                      className="flex flex-col gap-0.5"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <div className="w-4 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded" />
                      <div className="w-4 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded" />
                    </motion.div>
                  )}
                </motion.div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600">Packing Station</span>

                <ZoneLabel label="Pack Area" active={activeZone === 'packing'} position="bottom" />
              </motion.div>
            </div>

            {/* CENTER-RIGHT: Conveyor Belt */}
            <div className="col-span-2 relative">
              <motion.div
                className="h-full glass rounded-xl p-2 flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-[10px] sm:text-xs font-bold text-gray-700 mb-1 text-center">Conveyor</span>

                {/* Vertical Conveyor */}
                <div className="flex-1 relative bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-lg overflow-hidden">
                  {/* Belt pattern */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 8px, rgba(0,0,0,0.08) 8px, rgba(0,0,0,0.08) 16px)'
                    }}
                    animate={{ backgroundPosition: ['0px 0', '0px 32px'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Moving packages on conveyor */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 -translate-x-1/2 w-5 h-4 bg-gradient-to-br from-primary-400 to-cyan-500 rounded shadow-md flex items-center justify-center"
                      animate={{ y: [-20, 180] }}
                      transition={{
                        duration: 4,
                        delay: i * 1.3,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    >
                      <Box className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Dispatch */}
            <div className="col-span-2 relative">
              <motion.div
                className={`h-full glass rounded-xl p-2 flex flex-col items-center justify-center ${
                  activeZone === 'dispatch' ? 'ring-2 ring-green-400 shadow-glow' : ''
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="w-10 sm:w-12 h-6 sm:h-7 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center mb-1"
                  animate={{
                    x: activeZone === 'dispatch' ? [0, 5, 0] : 0
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </motion.div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center mb-1">Dispatch</span>

                {/* Success indicator */}
                <motion.div
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[9px] font-medium"
                  animate={activeZone === 'dispatch' ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Check className="w-2.5 h-2.5" />
                  Shipped
                </motion.div>

                {/* Outbound arrow */}
                <motion.div
                  className="absolute -right-1 top-1/2 -translate-y-1/2"
                  animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 text-green-500" />
                </motion.div>

                <ZoneLabel label="Outbound" active={activeZone === 'dispatch'} position="bottom" />
              </motion.div>
            </div>
          </div>

          {/* Flow Arrows Overlay */}
          <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(14, 165, 233, 0.2)" />
                <stop offset="100%" stopColor="rgba(14, 165, 233, 0.5)" />
              </linearGradient>
            </defs>
            {/* Animated flow particles */}
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i}
                r="3"
                fill="url(#arrowGradient)"
                initial={{ cx: '5%', cy: '50%' }}
                animate={{
                  cx: ['5%', '25%', '50%', '75%', '95%'],
                  cy: ['50%', '40%', '50%', '60%', '50%'],
                }}
                transition={{
                  duration: 8,
                  delay: i * 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Clock, label: 'Cycle Time', value: '2.5 hrs', change: '-15%', positive: true },
            { icon: Package, label: 'Units Today', value: '12,450', change: '+8%', positive: true },
            { icon: Truck, label: 'Trucks', value: '42', change: '87% Util', positive: true },
            { icon: TrendingUp, label: 'Accuracy', value: '99.8%', change: 'Target: 99.5%', positive: true },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-3 hover:shadow-glow transition-all duration-300"
              whileHover={{ y: -2, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">{stat.label}</p>
                  <p className="text-base font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
              <p className={`text-[10px] ${stat.positive ? 'text-green-600' : 'text-red-600'} mt-1`}>
                {stat.change}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Warehouse Badge */}
        <motion.div
          className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 glass-dark px-4 py-2 rounded-full shadow-lg items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-5 h-5 rounded gradient-bg flex items-center justify-center">
            <Warehouse className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-medium text-gray-700">Powered by IBM Sterling WMS & OMS</span>
        </motion.div>
      </div>
    </section>
  );
}

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

  // ── Secure contact form state ────────────────────────────────────────────
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '', honeypot: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const lastSubmitRef = useRef<number>(0);

  /** Strip HTML tags / script content from any string (XSS input sanitization) */
  const sanitize = (value: string) =>
    value.replace(/<[^>]*>/g, '').replace(/[<>"'`]/g, '');

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!formData.name.trim() || formData.name.trim().length < 2)
      errors.name = 'Full name must be at least 2 characters.';
    if (formData.name.length > 100)
      errors.name = 'Full name must not exceed 100 characters.';
    if (!emailRegex.test(formData.email))
      errors.email = 'Please enter a valid email address.';
    if (!formData.service || formData.service === '')
      errors.service = 'Please select a service.';
    if (!formData.message.trim() || formData.message.trim().length < 10)
      errors.message = 'Message must be at least 10 characters.';
    if (formData.message.length > 2000)
      errors.message = 'Message must not exceed 2000 characters.';
    return errors;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: sanitize(value) }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: if filled, silently reject (bot detected)
    if (formData.honeypot) return;
    // Rate limit: 1 submission per 30 seconds
    const now = Date.now();
    if (now - lastSubmitRef.current < 30_000) {
      setFormStatus('error');
      return;
    }
    const errors = validateForm();
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setFormStatus('submitting');
    lastSubmitRef.current = now;
    // Simulate submission (replace with secure backend endpoint — never expose API keys here)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', service: '', message: '', honeypot: '' });
    }, 1200);
  };
  // ────────────────────────────────────────────────────────────────────────

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 350);
  };

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
                  href={`#${sectionId(item)}`}
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
              type="button"
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
              className="md:hidden glass-dark border-t border-white/20 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${sectionId(item)}`}
                    className="block text-gray-700 font-medium py-2"
                    onClick={(e) => handleMobileNavClick(e, `#${sectionId(item)}`)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block w-full text-center px-6 py-3 gradient-bg text-white font-medium rounded-full"
                  onClick={(e) => handleMobileNavClick(e, '#contact')}
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

      {/* Warehouse Operations Flow Section */}
      <WarehouseFlowSection />

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
                WMS & OMS Specialists
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our certified experts deliver world-class implementations that
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
              {ibmSterlingFeatures.map((stat) => (
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
              <form
                className="glass-dark rounded-2xl p-8 shadow-lg"
                onSubmit={handleFormSubmit}
                noValidate
                aria-label="Contact form"
              >
                {/* Honeypot field – hidden from real users, traps bots */}
                <div aria-hidden="true" style={{ display: 'none' }}>
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleFormChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      maxLength={100}
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${
                        formErrors.name ? 'border-red-400' : 'border-gray-200'
                      } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      maxLength={254}
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${
                        formErrors.email ? 'border-red-400' : 'border-gray-200'
                      } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                      placeholder="john@company.com"
                    />
                    {formErrors.email && <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-gray-700 font-medium mb-2">Service Interest</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      aria-required="true"
                      aria-describedby={formErrors.service ? 'service-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${
                        formErrors.service ? 'border-red-400' : 'border-gray-200'
                      } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                    >
                      <option value="">Select a service</option>
                      <option value="qa">QA Testing</option>
                      <option value="web">Web Development</option>
                      <option value="support">Application Support</option>
                      <option value="ibm">IBM Sterling WMS/OMS</option>
                    </select>
                    {formErrors.service && <p id="service-error" className="text-red-500 text-xs mt-1" role="alert">{formErrors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={4}
                      maxLength={2000}
                      aria-required="true"
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${
                        formErrors.message ? 'border-red-400' : 'border-gray-200'
                      } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    <div className="flex justify-between">
                      {formErrors.message
                        ? <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">{formErrors.message}</p>
                        : <span />}
                      <span className="text-xs text-gray-400 mt-1">{formData.message.length}/2000</span>
                    </div>
                  </div>

                  {formStatus === 'success' && (
                    <p className="text-green-600 text-sm font-medium" role="status">
                      ✓ Message sent! We'll be in touch soon.
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm font-medium" role="alert">
                      Please wait before submitting again, or check your inputs.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 gradient-bg text-white font-semibold rounded-xl shadow-lg hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
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
