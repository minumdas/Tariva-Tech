import { motion } from 'framer-motion';
import type { ElementType } from 'react';

type FloatingIconProps = {
  icon: ElementType;
  delay: number;
  className?: string;
};

export function FloatingIcon({ icon: Icon, delay, className = '' }: FloatingIconProps) {
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
