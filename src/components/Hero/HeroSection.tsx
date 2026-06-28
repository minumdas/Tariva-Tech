import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Cpu, Database, Globe, Shield } from 'lucide-react';
import type { MotionValue } from 'framer-motion';
import type { RefObject } from 'react';
import { FloatingIcon } from '../Common/FloatingIcon';
import { AutomationJourney } from '../AutomationJourney/AutomationJourney';

type HeroSectionProps = {
  heroRef: RefObject<HTMLDivElement>;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export function HeroSection({ heroRef, heroOpacity, heroScale, x, y }: HeroSectionProps) {
  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/20 to-cyan-100/20 rounded-full blur-3xl" />
      </div>

      <FloatingIcon icon={Database} delay={0} className="top-32 left-[10%] hidden lg:block" />
      <FloatingIcon icon={Cpu} delay={0.5} className="top-40 right-[15%] hidden lg:block" />
      <FloatingIcon icon={Shield} delay={1} className="bottom-40 left-[20%] hidden lg:block" />
      <FloatingIcon icon={Globe} delay={1.5} className="bottom-32 right-[10%] hidden lg:block" />

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
          </motion.div>

          <AutomationJourney />
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </motion.section>
  );
}
