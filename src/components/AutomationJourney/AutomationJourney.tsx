import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MessageSquare,
  Search,
  ClipboardList,
  Bot,
  Monitor,
  Play,
  BarChart3,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  Zap,
  Target,
  Layers,
  type LucideIcon,
} from 'lucide-react';

type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
};

const STEPS: Step[] = [
  {
    title: 'Client Request',
    description: 'Capture testing needs and business goals from stakeholders.',
    icon: MessageSquare,
    color: 'text-sky-600',
    bg: 'bg-sky-50 border-sky-200',
  },
  {
    title: 'Requirement Analysis',
    description: 'Review specs, identify test scenarios, and define acceptance criteria.',
    icon: Search,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Test Planning',
    description: 'Design the test strategy, scope, schedule, and resource plan.',
    icon: ClipboardList,
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-200',
  },
  {
    title: 'Robot Framework',
    description: 'Build Page Object Model design pattern with keyword-driven approach.',
    icon: Bot,
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Test Data Management',
    description: 'Separation of test scripts, test data with framework making tests easier to fix, update, and scale.',
    icon: Monitor,
    color: 'text-teal-600',
    bg: 'bg-teal-50 border-teal-200',
  },
  {
    title: 'Test Execution',
    description: 'Run suites in CI/CD pipelines with parallel and scheduled runs.',
    icon: Play,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Reports & Analytics',
    description: 'Generate dashboards, logs, and pass/fail insights for every run.',
    icon: BarChart3,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Continuous Improvement',
    description: 'Refine tests, fix flaky cases, and expand coverage over time.',
    icon: RefreshCw,
    color: 'text-purple-600',
    bg: 'bg-purple-50 border-purple-200',
  },
];

const STATS = [
  { label: 'Test Cases', value: '2,450+', icon: Layers },
  { label: 'Success Rate', value: '99.8%', icon: CheckCircle2 },
  { label: 'Execution Speed', value: '5× Faster', icon: Zap },
  { label: 'Coverage', value: '100%', icon: Target },
];

const AUTO_PLAY_MS = 4500;

export function AutomationJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextStep, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, nextStep]);

  const current = STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="relative w-full py-14 sm:py-16 px-4 sm:px-6 lg:px-8" id="automation-journey">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1.5 text-xs font-semibold text-primary-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            See Automation in Action
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Test Automation Framework Design
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            A clear, end-to-end flow from client request to continuous improvement.
          </p>
        </motion.div>

        {/* Step progress bar */}
        <div
          className="mb-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hidden sm:flex items-center justify-between gap-1">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isDone = index < activeStep;

              return (
                <div key={step.title} className="flex items-center flex-1 min-w-0">
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="group flex flex-col items-center gap-1.5 flex-1 min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-lg p-1"
                    aria-label={`Step ${index + 1}: ${step.title}`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <div
                      className={`relative flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'border-primary-500 bg-primary-500 text-white shadow-md shadow-primary-200 scale-110'
                          : isDone
                            ? 'border-primary-300 bg-primary-100 text-primary-600'
                            : 'border-gray-200 bg-white text-gray-400 group-hover:border-primary-300 group-hover:text-primary-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] leading-tight text-center font-medium truncate w-full px-0.5 ${
                        isActive ? 'text-primary-700' : 'text-gray-500'
                      }`}
                    >
                      {step.title.split(' ')[0]}
                    </span>
                  </button>
                  {index < STEPS.length - 1 && (
                    <ChevronRight
                      className={`w-3 h-3 flex-shrink-0 mx-0.5 ${
                        index < activeStep ? 'text-primary-400' : 'text-gray-300'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: numbered pills */}
          <div className="flex sm:hidden gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {STEPS.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  index === activeStep
                    ? 'bg-primary-500 text-white'
                    : 'bg-white border border-gray-200 text-gray-600'
                }`}
              >
                {index + 1}. {step.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Progress track */}
          <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full"
              animate={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`glass rounded-2xl border p-5 sm:p-6 ${current.bg}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border flex items-center justify-center shadow-sm ${current.color}`}
              >
                <CurrentIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Step {String(activeStep + 1).padStart(2, '0')} of {STEPS.length}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{current.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{current.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Compact step grid overview */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`text-left rounded-xl border p-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
                  isActive
                    ? 'bg-white border-primary-300 shadow-sm ring-1 ring-primary-200'
                    : 'bg-white/60 border-gray-100 hover:border-gray-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isActive ? step.color : 'text-gray-400'}`} />
                </div>
                <p className={`text-xs font-semibold leading-tight ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-xl bg-white/80 border border-gray-100 px-4 py-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-bold text-gray-900 leading-none">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
