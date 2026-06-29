import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Truck, ScanLine, Database, Forklift, Box, Package, ShoppingCart, Radio, CheckCircle2, Zap, Clock, Boxes } from 'lucide-react';

export function WarehouseBox({ delay = 0, size = 'sm' }: { delay?: number; size?: 'sm' | 'md' }) {
  const boxSize = size === 'sm' ? 'w-5 h-4' : 'w-7 h-5';
  const iconSize = size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5';

  return (
    <motion.div
      className={`${boxSize} bg-gradient-to-br from-primary-400 to-cyan-500 rounded shadow-lg flex items-center justify-center border border-white/30`}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: [0.7, 1, 0.7], y: [0, -3, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity }}
    >
      <Box className={`${iconSize} text-white`} />
    </motion.div>
  );
}

function ZoneLabel({ label, active, position }: { label: string; active: boolean; position: 'top' | 'bottom' | 'left' | 'right' }) {
  const positionClasses = {
    top: '-top-8 left-1/2 -translate-x-1/2',
    bottom: '-bottom-8 left-1/2 -translate-x-1/2',
    left: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-2',
    right: 'right-0 top-1/2 -translate-y-1/2 translate-x-full pl-2',
  } as const;

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} text-xs font-medium whitespace-nowrap`}
      animate={active ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.98 }}
      transition={{ duration: 0.45 }}
    >
      <span className={`px-2 py-1 rounded ${active ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}>
        {label}
      </span>
    </motion.div>
  );
}

function StatusIndicator({ status, active }: { status: string; active: boolean }) {
  return (
    <motion.div
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium ${
        active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
      }`}
      animate={active ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 1.6, repeat: Infinity }}
    >
      <motion.div
        className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'}`}
        animate={active ? { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] } : {}}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
      {status}
    </motion.div>
  );
}

function StorageRack({ filled = 0, active = false }: { filled?: number; active?: boolean }) {
  const levels = 4;

  return (
    <div className={`flex flex-col gap-1 p-1 rounded-lg ${active ? 'bg-primary-50/50' : 'bg-gray-100/50'}`}>
      {[...Array(levels)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-6 h-4 rounded flex items-center justify-center transition-colors ${
            i < filled ? 'bg-gradient-to-br from-primary-400 to-cyan-500 shadow-sm' : 'bg-gray-200/50'
          }`}
          animate={active && i < filled ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 2, delay: i * 0.18, repeat: Infinity }}
        >
          {i < filled && <Box className="w-2.5 h-2.5 text-white" />}
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedConveyor({ active = false }: { active?: boolean }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full gap-2">
      {/* Conveyor Belt */}
      <div className="w-full flex-1 flex items-center justify-center px-1 sm:px-2">
        <div className="relative w-full h-16 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden shadow-lg border border-gray-700">
          {/* Belt motion background */}
          <motion.div
            className="absolute inset-0 bg-repeat-x opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                #4b5563 0px,
                #4b5563 10px,
                #374151 10px,
                #374151 20px
              )`,
            }}
            animate={active ? { x: [-20, 0] } : { x: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />

          {/* Moving packages on conveyor */}
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              className="absolute top-1/2 -translate-y-1/2 w-6 h-5 sm:w-8 sm:h-6 rounded-md bg-gradient-to-br from-primary-400 to-cyan-500 shadow-lg flex items-center justify-center border border-white/20"
              animate={active ? { x: ['-50%', '110%'] } : { x: '-50%' }}
              transition={{
                duration: 2.5,
                delay: item * 0.8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <motion.div animate={{ rotate: active ? 360 : 0 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
                <Box className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </motion.div>
            </motion.div>
          ))}

          {/* Conveyor side decorations */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-orange-500" />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-orange-500" />
        </div>
      </div>

      {/* Conveyor label */}
      <motion.div
        className="text-[10px] sm:text-xs font-bold text-gray-700 bg-white/70 px-2 py-0.5 rounded-full"
        animate={active ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Conveyor
      </motion.div>
    </div>
  );
}

export function WarehouseFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const springConfig = { damping: 25, stiffness: 100 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const zones = ['inbound', 'receiving', 'storage', 'picking', 'packing', 'conveyor', 'dispatch'];
    const interval = setInterval(() => {
      setActiveZone(zones[Math.floor(Date.now() / 3500) % zones.length]);
    }, 3500);
    setActiveZone('inbound');
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  return (
    <section
      id="warehouse-flow"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/40" />

      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 0%, transparent 0),
            linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px, 60px 60px, 60px 60px',
          x: parallaxX,
          y: parallaxY,
        }}
      />

      <motion.div
        className="absolute top-10 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl pointer-events-none"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            animate={{ boxShadow: ['0 0 20px rgba(14, 165, 233, 0.1)', '0 0 30px rgba(14, 165, 233, 0.2)', '0 0 20px rgba(14, 165, 233, 0.1)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div className="w-2 h-2 rounded-full bg-green-500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
            <span className="text-sm font-semibold text-gray-700">Live Smart Warehouse</span>
            <motion.div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-100 text-primary-700 text-xs" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }}>
              <Radio className="w-3 h-3" />
              Connected
            </motion.div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Visualization</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Real-time visualization of WMS & OMS orchestrating warehouse operations</p>
        </motion.div>

        <motion.div className="glass-dark rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl relative" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ minHeight: 420, maxHeight: 520 }}>
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
          </div>

          <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3 mb-3">
            <StatusIndicator status="Receiving Active" active={activeZone === 'receiving'} />
            <StatusIndicator status="Inventory Updated" active={activeZone === 'storage'} />
            <StatusIndicator status="Picking in Progress" active={activeZone === 'picking'} />
            <StatusIndicator status="Packing in Progress" active={activeZone === 'packing'} />
            <StatusIndicator status="Ready for Shipment" active={activeZone === 'dispatch'} />
          </div>

          <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 text-[10px] sm:text-xs text-gray-600">
            <span className="px-2.5 py-1 rounded-full bg-white/70">24 orders queued</span>
            <span className="px-2.5 py-1 rounded-full bg-white/70">87% storage filled</span>
            <span className="px-2.5 py-1 rounded-full bg-white/70">3 dock lanes active</span>
            <span className="px-2.5 py-1 rounded-full bg-white/70">12 min avg dispatch</span>
          </div>

          <div className="relative grid grid-cols-12 gap-2 sm:gap-3" style={{ height: 'calc(100% - 50px)' }}>
            {/* Inbound */}
            <div className="col-span-2 flex flex-col gap-2 relative">
              <motion.div className={`relative glass rounded-xl p-2 flex-1 flex flex-col items-center justify-center ${activeZone === 'inbound' ? 'ring-2 ring-primary-400 shadow-glow' : ''}`} animate={activeZone === 'inbound' ? { scale: [1, 1.02, 1] } : {}} whileHover={{ scale: 1.03 }} transition={{ duration: 2, repeat: Infinity }}>
                <motion.div className="w-10 sm:w-12 h-6 sm:h-7 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center mb-1" animate={{ x: activeZone === 'inbound' ? [0, 3, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </motion.div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center">Inbound</span>

                {activeZone === 'inbound' && (
                  <motion.div className="absolute -right-2 top-1/3" animate={{ y: [0, 8, 0], opacity: [1, 0.7, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <WarehouseBox />
                  </motion.div>
                )}

                <ZoneLabel label="Dock" active={activeZone === 'inbound'} position="bottom" />
              </motion.div>

              <motion.div className={`relative glass rounded-xl p-2 flex-1 flex flex-col items-center justify-center ${activeZone === 'receiving' ? 'ring-2 ring-cyan-400 shadow-glow' : ''}`} whileHover={{ scale: 1.03 }}>
                <motion.div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg mb-1" animate={activeZone === 'receiving' ? { rotate: [0, -5, 5, 0] } : {}} transition={{ duration: 2, repeat: Infinity }}>
                  <ScanLine className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </motion.div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center">Receiving</span>

                {activeZone === 'receiving' && (
                  <motion.div className="absolute inset-x-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" animate={{ y: [15, 45, 15], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                )}

                <ZoneLabel label="Scan Bay" active={activeZone === 'receiving'} position="bottom" />
              </motion.div>
            </div>

            {/* Storage */}
            <div className="col-span-2 relative">
              <motion.div className={`h-full glass rounded-xl p-2 sm:p-3 flex flex-col ${activeZone === 'storage' ? 'ring-2 ring-teal-400 shadow-glow' : ''}`} whileHover={{ scale: 1.02 }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">Storage Racks</span>
                  <motion.div className="flex items-center gap-1 text-[9px] text-teal-600" animate={activeZone === 'storage' ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 1, repeat: Infinity }}>
                    <Database className="w-3 h-3" />
                    <span>87%</span>
                  </motion.div>
                </div>

                <div className="flex-1 grid grid-cols-4 gap-1">
                  {[4, 3, 4, 3, 4, 2, 3, 4].map((filled, i) => (
                    <StorageRack key={i} filled={filled} active={activeZone === 'storage' && i < 3} />
                  ))}
                </div>

                <motion.div className="absolute bottom-2 left-1/2 -translate-x-1/2" animate={{ x: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                  <div className="w-6 sm:w-7 h-4 sm:h-5 bg-gradient-to-r from-amber-400 to-orange-500 rounded shadow-md flex items-center justify-center">
                    <Forklift className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                </motion.div>

                <ZoneLabel label="Aisle" active={activeZone === 'storage'} position="bottom" />
              </motion.div>
            </div>

            {/* Picking */}
            <div className="col-span-2 relative">
              <motion.div className={`h-full glass rounded-xl p-2 sm:p-3 flex flex-col justify-between ${activeZone === 'picking' ? 'ring-2 ring-amber-400 shadow-glow' : ''}`} whileHover={{ scale: 1.02 }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">Picking</span>
                  <motion.div className="flex items-center gap-1 text-[9px] text-amber-600" animate={activeZone === 'picking' ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 1, repeat: Infinity }}>
                    <ShoppingCart className="w-3 h-3" />
                    <span>24</span>
                  </motion.div>
                </div>

                <div className="flex-1 flex items-center justify-center gap-1">
                  {[1, 2, 3].map((item) => (
                    <motion.div key={item} className="w-5 sm:w-6 h-5 sm:h-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-sm flex items-center justify-center" animate={activeZone === 'picking' ? { y: [0, -3, 0], scale: [1, 1.05, 1] } : {}} transition={{ duration: 1.5, delay: item * 0.15, repeat: Infinity }}>
                      <Package className="w-3 h-3 text-white" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between text-[9px] text-gray-500">
                    <span>Pick queue</span>
                    <span className="font-semibold text-gray-700">24 items</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-gray-500">
                    <span>Priority lane</span>
                    <span className="font-semibold text-gray-700">A-03</span>
                  </div>
                </div>

                <ZoneLabel label="Pick Zone" active={activeZone === 'picking'} position="bottom" />
              </motion.div>
            </div>

            {/* Packing */}
            <div className="col-span-2 relative">
              <motion.div className={`h-full glass rounded-xl p-2 sm:p-3 flex flex-col justify-between ${activeZone === 'packing' ? 'ring-2 ring-purple-400 shadow-glow' : ''}`} whileHover={{ scale: 1.02 }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">Packing</span>
                  <motion.div className="flex items-center gap-1 text-[9px] text-purple-600" animate={activeZone === 'packing' ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 1, repeat: Infinity }}>
                    <Boxes className="w-3 h-3" />
                    <span>12</span>
                  </motion.div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-2">
                  {[1, 2].map((row) => (
                    <div key={row} className="flex gap-1">
                      {[1, 2].map((col) => (
                        <motion.div key={col} className="w-5 sm:w-6 h-5 sm:h-6 rounded-md bg-gradient-to-br from-purple-400 to-indigo-500 shadow-sm flex items-center justify-center" animate={activeZone === 'packing' ? { scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] } : {}} transition={{ duration: 2, delay: (row - 1) * 0.2 + (col - 1) * 0.1, repeat: Infinity }}>
                          <Box className="w-3 h-3 text-white" />
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between text-[9px] text-gray-500">
                    <span>Pack queue</span>
                    <span className="font-semibold text-gray-700">12 orders</span>
                  </div>
                </div>

                <ZoneLabel label="Pack Area" active={activeZone === 'packing'} position="bottom" />
              </motion.div>
            </div>

            {/* Conveyor */}
            <div className="col-span-2 relative">
              <motion.div className={`h-full glass rounded-xl p-1 sm:p-2 flex flex-col items-center justify-center ${activeZone === 'conveyor' ? 'ring-2 ring-orange-400 shadow-glow' : ''}`} whileHover={{ scale: 1.02 }}>
                <AnimatedConveyor active={activeZone === 'conveyor'} />
              </motion.div>
            </div>

            {/* Dispatch */}
            <div className="col-span-2 relative">
              <motion.div className={`h-full glass rounded-xl p-2 sm:p-3 flex flex-col ${activeZone === 'dispatch' ? 'ring-2 ring-green-400 shadow-glow' : ''}`} whileHover={{ scale: 1.02 }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">Dispatch</span>
                  <motion.div className="flex items-center gap-1 text-[9px] text-green-600" animate={activeZone === 'dispatch' ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 1, repeat: Infinity }}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Ready</span>
                  </motion.div>
                </div>

                <div className="flex-1 flex flex-col gap-1.5 justify-center">
                  <motion.div className="w-full h-6 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 shadow-sm flex items-center justify-center" animate={activeZone === 'dispatch' ? { scale: [1, 1.02, 1] } : {}} transition={{ duration: 1.5, repeat: Infinity }}>
                    <Truck className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                  <motion.div className="w-full h-6 rounded-lg bg-gradient-to-r from-primary-400 to-cyan-500 shadow-sm flex items-center justify-center" animate={activeZone === 'dispatch' ? { scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] } : {}} transition={{ duration: 2, delay: 0.3, repeat: Infinity }}>
                    <Radio className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                </div>

                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between text-[9px] text-gray-500">
                    <span>Dock ready</span>
                    <span className="font-semibold text-gray-700">6 loads</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-gray-500">
                    <span>ETA</span>
                    <span className="font-semibold text-gray-700">12 min</span>
                  </div>
                </div>

                <ZoneLabel label="Outbound" active={activeZone === 'dispatch'} position="bottom" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Metrics */}
        <motion.div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.div className="glass rounded-xl p-3 sm:p-4 text-center" whileHover={{ scale: 1.03 }}>
            <motion.div className="flex items-center justify-center gap-1.5 mb-2" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500" />
              <span className="text-xs sm:text-sm text-gray-600">Cycle Time</span>
            </motion.div>
            <p className="text-lg sm:text-2xl font-bold text-gray-900">2.5 hrs</p>
            <p className="text-[10px] text-green-600 font-semibold">-15%</p>
          </motion.div>

          <motion.div className="glass rounded-xl p-3 sm:p-4 text-center" whileHover={{ scale: 1.03 }}>
            <motion.div className="flex items-center justify-center gap-1.5 mb-2" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-500" />
              <span className="text-xs sm:text-sm text-gray-600">Units Today</span>
            </motion.div>
            <p className="text-lg sm:text-2xl font-bold text-gray-900">12,450</p>
            <p className="text-[10px] text-green-600 font-semibold">+8%</p>
          </motion.div>

          <motion.div className="glass rounded-xl p-3 sm:p-4 text-center" whileHover={{ scale: 1.03 }}>
            <motion.div className="flex items-center justify-center gap-1.5 mb-2" animate={{ y: [0, -2, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
              <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500" />
              <span className="text-xs sm:text-sm text-gray-600">Trucks</span>
            </motion.div>
            <p className="text-lg sm:text-2xl font-bold text-gray-900">42</p>
            <p className="text-[10px] text-gray-500 font-semibold">RTG</p>
          </motion.div>

          <motion.div className="glass rounded-xl p-3 sm:p-4 text-center" whileHover={{ scale: 1.03 }}>
            <motion.div className="flex items-center justify-center gap-1.5 mb-2" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
              <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
              <span className="text-xs sm:text-sm text-gray-600">Accuracy</span>
            </motion.div>
            <p className="text-lg sm:text-2xl font-bold text-gray-900">99.8%</p>
            <p className="text-[10px] text-gray-500 font-semibold">Target: 99.5%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
