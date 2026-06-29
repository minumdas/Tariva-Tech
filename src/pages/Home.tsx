import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '../components/Navbar/Navbar';
import { HeroSection } from '../components/Hero/HeroSection';
import { WarehouseFlowSection } from '../components/Warehouse/WarehouseFlowSection';
import { ServicesSection } from '../components/Services/ServicesSection';
import { AboutSection } from '../components/About/AboutSection';
import { TechnologiesSection } from '../components/Technologies/TechnologiesSection';
import { ContactSection } from '../components/Contact/ContactSection';
import { Footer } from '../components/Footer/Footer';
import { navItems, sectionId } from '../data/content';
import { AutomationJourney } from '../components/AutomationJourney/AutomationJourney';

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '', honeypot: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const lastSubmitRef = useRef<number>(0);

  const sanitize = (value: string) => value.replace(/<[^>]*>/g, '').replace(/[<>"'`]/g, '');

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!formData.name.trim() || formData.name.trim().length < 2) errors.name = 'Full name must be at least 2 characters.';
    if (formData.name.length > 100) errors.name = 'Full name must not exceed 100 characters.';
    if (!emailRegex.test(formData.email)) errors.email = 'Please enter a valid email address.';
    if (!formData.service) errors.service = 'Please select a service.';
    if (!formData.message.trim() || formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
    if (formData.message.length > 2000) errors.message = 'Message must not exceed 2000 characters.';
    return errors;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: sanitize(value) }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus('error');
      return;
    }
    setFormStatus('submitting');
    lastSubmitRef.current = Date.now();
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', service: '', message: '', honeypot: '' });
    }, 1200);
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      window.location.hash = href;
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
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-x-hidden">
      <Navbar
        navItems={navItems}
        sectionId={sectionId}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavClick={handleMobileNavClick}
        scrolled={scrolled}
      />
      <HeroSection heroRef={heroRef} heroOpacity={heroOpacity} heroScale={heroScale} x={x} y={y} />
      
      <WarehouseFlowSection />
       <AutomationJourney />
      <ServicesSection />
      <AboutSection />
      <TechnologiesSection />
      <ContactSection
        formData={formData}
        formErrors={formErrors}
        formStatus={formStatus}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        sanitize={sanitize}
      />
      <Footer />
    </div>
  );
}
