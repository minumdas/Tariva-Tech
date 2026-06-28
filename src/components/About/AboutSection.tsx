import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
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
              Robot Framework & Selenium Automation
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Build reliable, scalable, and maintainable automated test solutions using Robot Framework and Selenium WebDriver. From regression and smoke testing to cross-browser automation, ensuring faster releases with improved software quality.
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
        </div>
      </div>
    </section>
  );
}
