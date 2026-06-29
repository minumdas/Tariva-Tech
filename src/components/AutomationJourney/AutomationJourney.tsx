import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Animated SVG Module Components
const ClientRequestModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Avatar circle */}
    <circle cx="50" cy="30" r="16" fill="url(#avatarGradient)" />
    <circle cx="50" cy="30" r="16" fill="none" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.3" />
    {/* Avatar face */}
    <circle cx="45" cy="27" r="2" fill="white" />
    <circle cx="55" cy="27" r="2" fill="white" />
    <path d="M 45 35 Q 50 37 55 35" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />

    {/* Chat bubble */}
    <motion.g animate={isHovered ? { y: -3 } : { y: 0 }}>
      <rect x="35" y="52" width="30" height="20" rx="6" fill="rgba(14, 165, 233, 0.1)" stroke="#0ea5e9" strokeWidth="1" />
      <polygon points="38,72 35,78 42,72" fill="rgba(14, 165, 233, 0.1)" stroke="#0ea5e9" strokeWidth="1" />
      <line x1="40" y1="58" x2="60" y2="58" stroke="#0ea5e9" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="63" x2="55" y2="63" stroke="#0ea5e9" strokeWidth="1" opacity="0.6" />
    </motion.g>

    <defs>
      <radialGradient id="avatarGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#06b6d4" />
      </radialGradient>
    </defs>
  </svg>
);

const RequirementModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Magnifying glass */}
    <motion.circle cx="35" cy="35" r="18" fill="none" stroke="#06b6d4" strokeWidth="2.5" animate={isHovered ? { scale: 1.1 } : { scale: 1 }} />
    <motion.line x1="50" y1="50" x2="62" y2="62" stroke="#06b6d4" strokeWidth="2.5" animate={isHovered ? { y: 2 } : { y: 0 }} />

    {/* Document */}
    <g opacity="0.8">
      <rect x="55" y="42" width="20" height="28" rx="2" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="1.5" />
      <line x1="60" y1="50" x2="70" y2="50" stroke="#6366f1" strokeWidth="1" />
      <line x1="60" y1="56" x2="70" y2="56" stroke="#6366f1" strokeWidth="1" />
      <line x1="60" y1="62" x2="68" y2="62" stroke="#6366f1" strokeWidth="1" />
    </g>

    <defs>
      <linearGradient id="requirementGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
  </svg>
);

const PlanningModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Calendar */}
    <motion.rect x="25" y="25" width="50" height="45" rx="4" fill="rgba(168, 85, 247, 0.1)" stroke="#a855f7" strokeWidth="2" animate={isHovered ? { rotate: 2 } : { rotate: 0 }} />
    <line x1="25" y1="38" x2="75" y2="38" stroke="#a855f7" strokeWidth="1.5" />
    <rect x="32" y="18" width="8" height="10" rx="1" fill="#a855f7" />
    <rect x="60" y="18" width="8" height="10" rx="1" fill="#a855f7" />

    {/* Checklist items */}
    <g opacity="0.7">
      <circle cx="35" cy="50" r="2.5" fill="#a855f7" />
      <line x1="40" y1="50" x2="60" y2="50" stroke="#a855f7" strokeWidth="1" />

      <motion.g animate={isHovered ? { x: 2 } : { x: 0 }}>
        <circle cx="35" cy="62" r="2.5" fill="#06b6d4" />
        <line x1="40" y1="62" x2="60" y2="62" stroke="#06b6d4" strokeWidth="1" />
      </motion.g>
    </g>
  </svg>
);

const RobotFrameworkModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Robot head */}
    <motion.rect x="35" y="18" width="30" height="32" rx="4" fill="rgba(14, 165, 233, 0.15)" stroke="#0ea5e9" strokeWidth="2" animate={isHovered ? { y: -2 } : { y: 0 }} />

    {/* Eyes */}
    <motion.circle cx="42" cy="28" r="3" fill="#0ea5e9" animate={isHovered ? { scale: 1.2 } : { scale: 1 }} />
    <motion.circle cx="58" cy="28" r="3" fill="#0ea5e9" animate={isHovered ? { scale: 1.2 } : { scale: 1 }} />

    {/* Mouth */}
    <path d="M 42 38 Q 50 42 58 38" stroke="#0ea5e9" strokeWidth="1.5" fill="none" strokeLinecap="round" />

    {/* Gears */}
    <g opacity="0.6">
      <circle cx="28" cy="60" r="8" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
      <motion.circle cx="28" cy="60" r="4" fill="none" stroke="#06b6d4" strokeWidth="1" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />

      <circle cx="72" cy="60" r="8" fill="none" stroke="#a855f7" strokeWidth="1.5" />
      <motion.circle cx="72" cy="60" r="4" fill="none" stroke="#a855f7" strokeWidth="1" animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
    </g>

    {/* Body */}
    <rect x="38" y="52" width="24" height="20" rx="2" fill="rgba(14, 165, 233, 0.1)" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.8" />
  </svg>
);

const SeleniumModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Browser window */}
    <motion.rect x="20" y="20" width="60" height="55" rx="3" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="2" animate={isHovered ? { scale: 1.05 } : { scale: 1 }} />
    <rect x="20" y="20" width="60" height="12" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="1" />

    {/* Address bar simulation */}
    <circle cx="27" cy="27" r="1.5" fill="#06b6d4" opacity="0.7" />
    <circle cx="32" cy="27" r="1.5" fill="#06b6d4" opacity="0.7" />
    <circle cx="37" cy="27" r="1.5" fill="#06b6d4" opacity="0.7" />

    {/* Page content */}
    <motion.g animate={isHovered ? { opacity: 0.8 } : { opacity: 0.5 }}>
      <rect x="27" y="38" width="20" height="6" rx="1" fill="#06b6d4" opacity="0.4" />
      <rect x="27" y="48" width="35" height="3" rx="1" fill="#06b6d4" opacity="0.4" />
      <rect x="27" y="54" width="30" height="3" rx="1" fill="#06b6d4" opacity="0.4" />
    </motion.g>

    {/* Globe indicator */}
    <motion.circle cx="70" cy="40" r="5" fill="none" stroke="#06b6d4" strokeWidth="1" animate={isHovered ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
  </svg>
);

const TestExecutionModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Progress bars */}
    <motion.g animate={isHovered ? { y: -2 } : { y: 0 }}>
      <rect x="25" y="25" width="50" height="4" rx="2" fill="rgba(14, 165, 233, 0.15)" stroke="#0ea5e9" strokeWidth="1" />
      <motion.rect x="25" y="25" width="35" height="4" rx="2" fill="#0ea5e9" animate={{ width: [15, 50, 15] }} transition={{ duration: 2, repeat: Infinity }} />

      <rect x="25" y="35" width="50" height="4" rx="2" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="1" />
      <motion.rect x="25" y="35" width="40" height="4" rx="2" fill="#06b6d4" animate={{ width: [20, 50, 20] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} />

      <rect x="25" y="45" width="50" height="4" rx="2" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" strokeWidth="1" />
      <motion.rect x="25" y="45" width="30" height="4" rx="2" fill="#a855f7" animate={{ width: [10, 50, 10] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }} />
    </motion.g>

    {/* Terminal dots */}
    <g opacity="0.6">
      <circle cx="30" cy="62" r="1.5" fill="#0ea5e9" />
      <circle cx="38" cy="62" r="1.5" fill="#06b6d4" />
      <circle cx="46" cy="62" r="1.5" fill="#a855f7" />
      <motion.line x1="55" y1="62" x2="65" y2="62" stroke="#0ea5e9" strokeWidth="1" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </g>
  </svg>
);

const ReportsModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Chart bars */}
    <motion.rect x="25" y="50" width="8" height="28" rx="2" fill="rgba(14, 165, 233, 0.6)" animate={isHovered ? { y: -2, height: 32 } : { y: 0, height: 28 }} />
    <motion.rect x="38" y="45" width="8" height="33" rx="2" fill="rgba(6, 182, 212, 0.6)" animate={isHovered ? { y: -3, height: 37 } : { y: 0, height: 33 }} />
    <motion.rect x="51" y="40" width="8" height="38" rx="2" fill="rgba(168, 85, 247, 0.6)" animate={isHovered ? { y: -4, height: 42 } : { y: 0, height: 38 }} />
    <motion.rect x="64" y="48" width="8" height="30" rx="2" fill="rgba(34, 197, 94, 0.6)" animate={isHovered ? { y: -2, height: 34 } : { y: 0, height: 30 }} />

    {/* Axis lines */}
    <line x1="20" y1="80" x2="75" y2="80" stroke="rgba(100, 100, 100, 0.3)" strokeWidth="1" />
    <line x1="20" y1="20" x2="20" y2="80" stroke="rgba(100, 100, 100, 0.3)" strokeWidth="1" />

    {/* Success checkmark */}
    <motion.g animate={isHovered ? { scale: 1.1 } : { scale: 1 }}>
      <circle cx="70" cy="28" r="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="1" />
      <path d="M 67 28 L 69 30 L 73 26" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
    </motion.g>
  </svg>
);

const ImprovementModule = ({ isHovered }: { isHovered: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Circular arrows */}
    <motion.g animate={isHovered ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 2, ease: 'linear' }}>
      <path d="M 50 25 A 25 25 0 0 1 70 45" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 70 45 L 68 38 L 76 42" fill="#a855f7" />

      <path d="M 50 75 A 25 25 0 0 1 30 55" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 30 55 L 32 62 L 24 58" fill="#0ea5e9" />
    </motion.g>

    {/* Center sparkle */}
    <motion.g animate={isHovered ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.7 }}>
      <circle cx="50" cy="50" r="8" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="1.5" />
      <path d="M 50 45 L 52 50 L 50 55 L 48 50 Z" fill="#a855f7" opacity="0.6" />
    </motion.g>
  </svg>
);

// Central Hub Component
const CentralHub = () => (
  <motion.g animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
    {/* Outer glow rings */}
    <motion.circle cx="50%" cy="50%" r="45" fill="none" stroke="url(#glowGradient)" strokeWidth="1.5" opacity="0.4" animate={{ r: [45, 50, 45] }} transition={{ duration: 2.5, repeat: Infinity }} />
    <motion.circle cx="50%" cy="50%" r="38" fill="none" stroke="url(#glowGradient2)" strokeWidth="1" opacity="0.3" animate={{ r: [38, 42, 38] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />

    {/* Central circle */}
    <circle cx="50%" cy="50%" r="28" fill="url(#hubGradient)" />
    <circle cx="50%" cy="50%" r="28" fill="none" stroke="url(#glowGradient)" strokeWidth="2" opacity="0.8" />

    {/* Automation icon - stylized circuit board */}
    <g opacity="0.9" transform="translate(50%, 50%)">
      {/* Nodes */}
      <circle cx="-8" cy="-8" r="2.5" fill="white" />
      <circle cx="8" cy="-8" r="2.5" fill="white" />
      <circle cx="-8" cy="8" r="2.5" fill="white" />
      <circle cx="8" cy="8" r="2.5" fill="white" />
      <circle cx="0" cy="0" r="2" fill="white" />

      {/* Connecting lines */}
      <line x1="-8" y1="-8" x2="8" y2="-8" stroke="white" strokeWidth="1.2" opacity="0.8" />
      <line x1="-8" y1="-8" x2="-8" y2="8" stroke="white" strokeWidth="1.2" opacity="0.8" />
      <line x1="8" y1="-8" x2="8" y2="8" stroke="white" strokeWidth="1.2" opacity="0.8" />
      <line x1="-8" y1="8" x2="8" y2="8" stroke="white" strokeWidth="1.2" opacity="0.8" />
      <line x1="0" y1="-8" x2="0" y2="8" stroke="white" strokeWidth="1" opacity="0.6" />
    </g>

    <defs>
      <radialGradient id="hubGradient" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
      </radialGradient>
      <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="glowGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
      </linearGradient>
    </defs>
  </motion.g>
);

// Data Particle Animation
const DataParticle = ({ delay, pathId }: { delay: number; pathId: string }) => (
  <motion.g>
    <motion.circle
      r="2.5"
      fill="url(#particleGradient)"
      opacity="0.8"
      animate={{}}
      transition={{}}
    >
      <animateMotion dur="3s" begin={`${delay}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </motion.circle>
  </motion.g>
);

// Main Illustration Component
export function AutomationJourney() {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setScreenSize('mobile');
      else if (window.innerWidth < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const modules = [
    { title: 'Client Request', component: ClientRequestModule, color: 'from-blue-500 to-cyan-500' },
    { title: 'Requirement Analysis', component: RequirementModule, color: 'from-cyan-500 to-teal-500' },
    { title: 'Test Planning', component: PlanningModule, color: 'from-purple-500 to-pink-500' },
    { title: 'Robot Framework', component: RobotFrameworkModule, color: 'from-blue-500 to-cyan-500' },
    { title: 'Selenium Testing', component: SeleniumModule, color: 'from-cyan-500 to-blue-500' },
    { title: 'Test Execution', component: TestExecutionModule, color: 'from-blue-500 to-purple-500' },
    { title: 'Reports & Analytics', component: ReportsModule, color: 'from-green-500 to-emerald-500' },
    { title: 'Continuous Improvement', component: ImprovementModule, color: 'from-purple-500 to-indigo-500' },
  ];

  // Calculate positions based on screen size
  const getModulePosition = (index: number) => {
    const angleSlice = 360 / modules.length;
    const angle = (index * angleSlice - 90) * (Math.PI / 180);
    const radius = screenSize === 'desktop' ? 35 : screenSize === 'tablet' ? 32 : 0;

    if (screenSize === 'mobile') {
      return { top: `${25 + index * 11}%`, left: '50%' };
    }

    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { left: `${x}%`, top: `${y}%` };
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/3 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl" />

        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
          animate={{ y: [0, 40] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-400/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 mb-4" animate={{ boxShadow: ['0 0 20px rgba(14, 165, 233, 0.1)', '0 0 40px rgba(14, 165, 233, 0.2)', '0 0 20px rgba(14, 165, 233, 0.1)'] }} transition={{ duration: 2, repeat: Infinity }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-4 h-4 text-primary-600" />
            </motion.div>
            <span className="text-sm font-semibold text-primary-700">See Automation in Action</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Robot Framework + Selenium Lifecycle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">Watch how testing requests transform into reliable, automated validation with intelligent orchestration.</p>
        </motion.div>

        {/* Main Illustration Container */}
        {screenSize === 'mobile' ? (
          // Mobile: Vertical Stack
          <motion.div className="space-y-6">
            {modules.map((module, index) => {
              const Component = module.component;
              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredModule(index)}
                  onMouseLeave={() => setHoveredModule(null)}
                  className="relative"
                >
                  <div className="flex items-center gap-4 glass rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-primary-300/50 transition-all">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${module.color} p-2 sm:p-3 flex-shrink-0 shadow-lg`}>
                      <Component isHovered={hoveredModule === index} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Step {String(index + 1).padStart(2, '0')}</p>
                    </div>
                    {index < modules.length - 1 && <motion.div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary-400 to-transparent" animate={{ scaleY: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} />}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          // Desktop/Tablet: Circular/Radial Layout
          <div className="relative" style={{ aspectRatio: '16/9', minHeight: screenSize === 'tablet' ? '500px' : '600px' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {/* Connection paths */}
              {modules.map((_, index) => {
                const current = getModulePosition(index);
                const next = getModulePosition((index + 1) % modules.length);

                if (screenSize === 'mobile') return null;

                const startX = parseFloat(current.left as string);
                const startY = parseFloat(current.top as string);
                const endX = parseFloat(next.left as string);
                const endY = parseFloat(next.top as string);

                const midX = (startX + endX) / 2;
                const midY = (startY + endY) / 2;

                return (
                  <motion.path
                    key={`path-${index}`}
                    d={`M ${startX} ${startY} Q ${midX + 3} ${midY - 3} ${endX} ${endY}`}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="0.8"
                    opacity="0.4"
                    animate={{ strokeDasharray: '4 4', strokeDashoffset: [0, -8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Central hub */}
              <CentralHub />

              {/* Data particles */}
              {modules.map((_, index) => (
                <motion.circle key={`particle-${index}`} cx="50" cy="50" r="1.5" fill="url(#particleGradient)" opacity="0.7">
                  <animateMotion dur="4s" begin={`${index * 0.3}s`} repeatCount="indefinite">
                    <mpath href={`#path-${index}`} />
                  </animateMotion>
                </motion.circle>
              ))}

              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="particleGradient">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </radialGradient>
              </defs>
            </svg>

            {/* Module circles positioned around hub */}
            {modules.map((module, index) => {
              const Component = module.component;
              const position = getModulePosition(index);
              const isHovered = hoveredModule === index;

              return (
                <motion.div
                  key={module.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={position as any}
                  onMouseEnter={() => setHoveredModule(index)}
                  onMouseLeave={() => setHoveredModule(null)}
                  animate={isHovered ? { scale: 1.15, zIndex: 20 } : { scale: 1, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Module background circle */}
                  <motion.div className={`w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 rounded-full bg-gradient-to-br ${module.color} shadow-xl flex items-center justify-center p-3 border-2 border-white/30`} animate={isHovered ? { boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)' } : { boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                    <Component isHovered={isHovered} />
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs sm:text-sm px-3 py-2 rounded-lg opacity-0 pointer-events-none" animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                    <div className="font-semibold">{module.title}</div>
                    <div className="text-gray-300 text-xs">Step {String(index + 1).padStart(2, '0')}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom Stats */}
        <motion.div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          {[
            { label: 'Test Cases', value: '2,450+', icon: '📊' },
            { label: 'Success Rate', value: '99.8%', icon: '✓' },
            { label: 'Execution Speed', value: '5x Faster', icon: '⚡' },
            { label: 'Coverage', value: '100%', icon: '🎯' },
          ].map((stat, i) => (
            <motion.div key={i} className="glass rounded-xl p-4 text-center border border-white/20" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 400 }}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
