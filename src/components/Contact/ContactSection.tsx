import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';

type ContactSectionProps = {
  formData: { name: string; email: string; service: string; message: string; honeypot: string };
  formErrors: Record<string, string>;
  formStatus: 'idle' | 'submitting' | 'success' | 'error';
  handleFormChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFormSubmit: (e: FormEvent) => void;
  sanitize: (value: string) => string;
};

export function ContactSection({ formData, formErrors, formStatus, handleFormChange, handleFormSubmit, sanitize }: ContactSectionProps) {
  return (
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
              {[{ icon: MapPin, text: 'Bangalore, India' }, { icon: Mail, text: 'info@tarivatech.com' }].map((item, index) => (
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
            <form className="glass-dark rounded-2xl p-8 shadow-lg" onSubmit={handleFormSubmit} noValidate aria-label="Contact form">
              <div aria-hidden="true" style={{ display: 'none' }}>
                <input type="text" name="honeypot" value={formData.honeypot} onChange={handleFormChange} tabIndex={-1} autoComplete="off" />
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${formErrors.name ? 'border-red-400' : 'border-gray-200'} focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${formErrors.email ? 'border-red-400' : 'border-gray-200'} focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${formErrors.service ? 'border-red-400' : 'border-gray-200'} focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
                  >
                    <option value="">Select a service</option>
                    <option value="QA Testing">QA Testing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Application Support">Application Support</option>
                    <option value="IBM Sterling WMS/OMS">IBM Sterling WMS/OMS</option>  
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 border ${formErrors.message ? 'border-red-400' : 'border-gray-200'} focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none`}
                    placeholder="Tell us about your project..."
                  />
                  <div className="flex justify-between">
                    {formErrors.message ? <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">{formErrors.message}</p> : <span />}
                    <span className="text-xs text-gray-400 mt-1">{formData.message.length}/2000</span>
                  </div>
                </div>

                {formStatus === 'success' && <p className="text-green-600 text-sm font-medium" role="status">✓ Message sent! We'll be in touch soon.</p>}
                {formStatus === 'error' && <p className="text-red-500 text-sm font-medium" role="alert">Please wait before submitting again, or check your inputs.</p>}

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
  );
}
