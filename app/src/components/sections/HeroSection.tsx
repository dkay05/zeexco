import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SectionTag } from '@/components/shared/SectionTag';
import { GradientText } from '@/components/shared/GradientText';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.5,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-accent-pink/10 rounded-full blur-[96px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tag */}
          <motion.div variants={itemVariants}>
            <SectionTag icon={Sparkles} iconColor="text-accent-orange">
              Trade Without Limits
            </SectionTag>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Trade Smarter Across{' '}
            <GradientText>Global Markets.</GradientText>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-12"
          >
            Zeexco is a powerful multi-asset trading platform designed for forex, global stocks, commodities, indices, and crypto markets — all in one secure environment.
          </motion.p>
        </motion.div>
        
        {/* Hero Illustration */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 relative"
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.img
              src="/hero-illustration.png"
              alt="Zeexco Trading Platform"
              className="w-full h-auto"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
