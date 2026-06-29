import { motion } from 'framer-motion';
import { Award, Clock, TrendingUp, Users } from 'lucide-react';
import { ProgressBar } from '../Common/ProgressBar';
import { techStack } from '../../data/content';

export function TechnologiesSection() {
  return (
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
              { icon: Award, title: 'Skilled Professionals', desc: 'Experienced team delivering enterprise application support and development services' },
              { icon: TrendingUp, title: 'Enterprise Implementation Experience', desc: 'Hands-on experience in multiple large-scale application support environments' },
              { icon: Users, title: 'Dedicated Team', desc: 'A team of professionals focused on resolving issues and ensuring system stability' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock application support services' },
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
  );
}
