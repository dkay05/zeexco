import { useState } from 'react';
import { motion } from 'framer-motion';
import { Infinity as InfinityIcon, ChevronRight } from 'lucide-react';
import { SectionTag } from '@/components/shared/SectionTag';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const bulletPoints = [
  "Ultra-low latency trade execution",
  "Secure & encrypted transactions",
  "Deep liquidity from top-tier providers",
  "Competitive spreads across forex pairs",
  "24/5 global market access",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function WhySection() {
  const [activeTab, setActiveTab] = useState<'about' | 'features'>('about');

  return (
    <section id="why" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={leftVariants} className="order-2 lg:order-1">
            <SectionTag icon={InfinityIcon} iconColor="text-accent-purple">
              Your Global Trading Partner
            </SectionTag>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              A New Standard in Online Trading
            </h2>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Zeexco is a next-generation trading platform built to provide seamless access to international financial markets. 
              We empower traders with cutting-edge technology, transparent pricing, and real-time market insights.
            </p>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              With global market connectivity and robust infrastructure, Zeexco ensures precision and performance 
              whether you're trading EUR/USD, Gold, NASDAQ, or Crypto.
            </p>
            
            {/* Bullet Points */}
            <motion.ul 
              variants={containerVariants}
              className="space-y-3 mb-8"
            >
              {bulletPoints.map((point, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-accent-purple flex-shrink-0" />
                  <span className="text-text-secondary">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* Toggle Buttons */}
            <div className="flex gap-3">
              <Button
                variant={activeTab === 'about' ? 'default' : 'outline'}
                onClick={() => setActiveTab('about')}
                className={cn(
                  'rounded-full transition-all duration-300',
                  activeTab === 'about' 
                    ? 'bg-accent-purple hover:bg-accent-purple/90 text-white' 
                    : 'border-border text-text-secondary hover:text-white hover:bg-white/5'
                )}
              >
                About Zeexco
              </Button>
              <Button
                variant={activeTab === 'features' ? 'default' : 'outline'}
                onClick={() => setActiveTab('features')}
                className={cn(
                  'rounded-full transition-all duration-300',
                  activeTab === 'features' 
                    ? 'bg-accent-cyan hover:bg-accent-cyan/90 text-white' 
                    : 'border-border text-text-secondary hover:text-white hover:bg-white/5'
                )}
              >
                Platform Features
              </Button>
            </div>
          </motion.div>
          
          {/* Right Illustration */}
          <motion.div 
            variants={rightVariants}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <motion.img
                src="/faq-illustration.png"
                alt="Zeexco Trading Platform"
                className="w-full h-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              />
              
              {/* Glow effects */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-purple/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-cyan/20 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
