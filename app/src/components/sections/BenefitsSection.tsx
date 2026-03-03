import { motion } from 'framer-motion';
import { Sparkles, X, Check } from 'lucide-react';
import { SectionTag } from '@/components/shared/SectionTag';
import { GradientText } from '@/components/shared/GradientText';
import { cn } from '@/lib/utils';

const leftBenefits = [
  "Limited market access and instruments",
  "Complex trading interfaces with steep learning curves",
  "Delayed trade execution and slippage",
  "Hidden fees and unfavorable spreads",
  "Poor customer support and service",
];

const rightBenefits = [
  "Advanced Trading Terminal (Web & Mobile)",
  "Real-Time Market Analysis Tools",
  "One-Click Trading Execution",
  "Negative Balance Protection",
  "Multi-Layer Security System",
  "Fast Deposits & Withdrawals",
  "Dedicated Customer Support",
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

const leftItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

interface BenefitItemProps {
  text: string;
  type: 'negative' | 'positive';
}

function BenefitItem({ text, type }: BenefitItemProps) {
  const isNegative = type === 'negative';
  
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
      <span className={cn(
        'flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mt-0.5',
        isNegative ? 'bg-red-500/20' : 'bg-accent-purple/20'
      )}>
        {isNegative ? (
          <X className="w-3 h-3 text-red-400" />
        ) : (
          <Check className="w-3 h-3 text-accent-purple" />
        )}
      </span>
      <span className={cn(
        'text-sm',
        isNegative ? 'text-text-secondary' : 'text-text-secondary'
      )}>
        {text}
      </span>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionTag icon={Sparkles} iconColor="text-accent-pink">
              Built for Performance & Trust
            </SectionTag>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why Choose{' '}
              <GradientText>Zeexco?</GradientText>
            </h2>
          </motion.div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Benefits */}
            <motion.div 
              variants={containerVariants}
              className="space-y-2"
            >
              {leftBenefits.map((benefit, index) => (
                <motion.div key={index} variants={leftItemVariants}>
                  <BenefitItem text={benefit} type="negative" />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Center Diagram */}
            <motion.div 
              variants={imageVariants}
              className="relative flex justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative"
              >
                <img
                  src="/circular-diagram.png"
                  alt="Benefits Diagram"
                  className="w-full max-w-md h-auto"
                />
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent-purple/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            </motion.div>
            
            {/* Right Benefits */}
            <motion.div 
              variants={containerVariants}
              className="space-y-2"
            >
              {rightBenefits.map((benefit, index) => (
                <motion.div key={index} variants={rightItemVariants}>
                  <BenefitItem text={benefit} type="positive" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
