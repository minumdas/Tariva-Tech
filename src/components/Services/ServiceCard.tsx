import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import type { ElementType } from 'react';

type Service = {
  icon: ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
};

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

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
          <Icon className="w-7 h-7 text-white" />
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
