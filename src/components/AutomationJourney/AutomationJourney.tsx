import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { automationSteps, statusBadges } from '../../data/content';

export function AutomationJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const particles = [
    { top: '12%', left: '6%', size: 'h-2 w-2' },
    { top: '20%', right: '12%', size: 'h-3 w-3' },
    { top: '72%', left: '18%', size: 'h-2 w-2' },
    { top: '78%', right: '20%', size: 'h-2 w-2' },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % automationSteps.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative mt-10 w-full"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_30px_100px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-8 top-6 h-28 w-28 rounded-full bg-primary-200/20 blur-3xl" />
          <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl" />
          {particles.map((particle, index) => (
            <motion.div
              key={`${particle.top}-${index}`}
              className={`absolute rounded-full bg-primary-400/50 ${particle.size}`}
              style={{ top: particle.top, left: particle.left, right: particle.right }}
              animate={{ y: [0, -10, 0], opacity: [0.35, 0.8, 0.35] }}
              transition={{ duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="relative">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                <Sparkles className="h-4 w-4" />
                See Automation in Action
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
                Watch a testing request transform into reliable automated validation.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                From planning to execution, our Robot Framework and Selenium workflow turns complex releases into confident, repeatable outcomes.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {statusBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-primary-100 bg-primary-50/80 px-3 py-1.5 text-sm text-primary-700">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex flex-col gap-4 lg:flex-row lg:items-stretch">
            {automationSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <div key={step.title} className="relative flex-1">
                  <motion.div
                    className={`relative h-full rounded-2xl border p-4 text-left transition-all duration-300 ${isActive ? 'border-primary-300 bg-white shadow-[0_0_0_1px_rgba(14,165,233,0.12),0_20px_45px_-20px_rgba(14,165,233,0.55)]' : 'border-white/70 bg-white/80 hover:border-primary-200 hover:shadow-lg'}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={isActive ? { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
                    whileHover={{ y: -6, scale: 1.01, rotate: -1 }}
                    onMouseEnter={() => setActiveStep(index)}
                    animate={isActive ? { y: [0, -4, 0], boxShadow: ['0 0 0 rgba(14,165,233,0.05)', '0 0 26px rgba(14,165,233,0.16)', '0 0 0 rgba(14,165,233,0.05)'] } : { y: 0 }}
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${isActive ? 'bg-gradient-to-br from-primary-500 to-cyan-500 text-white shadow-lg' : 'bg-primary-50 text-primary-600'}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <h4 className="text-base font-semibold text-gray-800">{step.title}</h4>
                      <span className="text-xs font-medium text-primary-600">0{index + 1}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
                  </motion.div>

                  {index < automationSteps.length - 1 && (
                    <div className="absolute right-[-0.75rem] top-1/2 z-0 hidden -translate-y-1/2 lg:block">
                      <motion.div
                        className="h-[2px] w-5 rounded-full bg-gradient-to-r from-primary-300 via-cyan-400 to-primary-300"
                        animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <motion.div
                        className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.85)]"
                        animate={{ x: [0, 12, 0], opacity: [0.55, 1, 0.55] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.16 }}
                      />
                    </div>
                  )}

                  {index < automationSteps.length - 1 && (
                    <div className="flex items-center justify-center py-1 lg:hidden">
                      <motion.div
                        className="h-8 w-[2px] rounded-full bg-gradient-to-b from-primary-300 via-cyan-400 to-primary-300"
                        animate={{ opacity: [0.5, 1, 0.5], scaleY: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
