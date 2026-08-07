import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import type { MouseEvent } from 'react';

type NavbarProps = {
  navItems: string[];
  sectionId: (label: string) => string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  onNavClick: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
  scrolled: boolean;
};

export function Navbar({ navItems, sectionId, mobileMenuOpen, setMobileMenuOpen, onNavClick, scrolled }: NavbarProps) {
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Tariva<span className="text-primary-500">Tech</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 whitespace-nowrap">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${sectionId(item)}`}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2 lg:gap-3 whitespace-nowrap">
           <a
              href="#automation-journey"
              className="text-sm px-3 py-2 rounded-full gradient-bg text-white font-medium shadow-sm hover:shadow-glow transition-all duration-300"
              onClick={(e) => onNavClick(e, '#automation-journey')}
            >
              Automation 
            </a>
              <a
              href="#warehouse-flow"
              className="text-sm px-3 py-2 rounded-full border border-primary-500/70 text-primary-600 font-medium hover:bg-primary-500 hover:text-white transition-all duration-300"
              onClick={(e) => onNavClick(e, '#warehouse-flow')}
            >
              WMS Visualization
            </a>

          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 gradient-bg text-white font-medium rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden glass-dark border-t border-white/20 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${sectionId(item)}`}
                  className="block text-gray-700 font-medium py-2"
                  onClick={(e) => onNavClick(e, `#${sectionId(item)}`)}
                >
                  {item}
                </a>
              ))}
             
              <a
                href="#automation-journey"
                className="block text-gray-700 font-medium py-2"
                onClick={(e) => onNavClick(e, "#automation-journey")}
              >
                Automation
              </a>
               <a
                href="#warehouse-flow"
                className="block text-gray-700 font-medium py-2"
                onClick={(e) => onNavClick(e, "#warehouse-flow")}
              >
                WMS Visualization
              </a>

              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 gradient-bg text-white font-medium rounded-full"
                onClick={(e) => onNavClick(e, '#contact')}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
