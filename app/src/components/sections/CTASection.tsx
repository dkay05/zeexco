import { motion } from 'framer-motion';
import { Heart, UserCheck, Wallet, TrendingUp } from 'lucide-react';
import { SectionTag } from '@/components/shared/SectionTag';
import { GradientText } from '@/components/shared/GradientText';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

const steps = [
  {
    icon: UserCheck,
    title: 'Register Your Profile',
    description: 'Create your account in minutes',
  },
  {
    icon: Wallet,
    title: 'Verify & Fund Your Account',
    description: 'Secure verification and instant funding',
  },
  {
    icon: TrendingUp,
    title: 'Start Trading Global Markets',
    description: 'Access 500+ instruments worldwide',
  },
];

function StepCard({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-bg-secondary/50 backdrop-blur-sm hover:border-accent-purple/30 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent-purple" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple font-semibold text-sm">
        {index + 1}
      </div>
    </motion.div>
  );
}

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionTag icon={Heart} iconColor="text-accent-pink">
              Start Your Trading Journey
            </SectionTag>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8"
          >
            Open Your Account in <GradientText>3 Easy Steps</GradientText>
          </motion.h2>
          
          {/* Steps Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {steps.map((step, index) => (
              <StepCard key={step.title} {...step} index={index} />
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              className="rounded-full bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-[1.02] animate-pulse-glow"
            >
              Start Trading Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
