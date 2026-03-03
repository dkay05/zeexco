import { motion } from 'framer-motion';
import { Target, Shield, BarChart3, Settings, Calendar } from 'lucide-react';
import { SectionTag } from '@/components/shared/SectionTag';
import { GradientText } from '@/components/shared/GradientText';
import { cn } from '@/lib/utils';

const workflowSteps = [
  {
    title: 'Advanced Charting',
    icon: BarChart3,
    color: 'text-accent-purple',
    bgColor: 'bg-accent-purple/20',
    items: ['50+ Indicators', 'Real-time Data', 'Custom Layouts', 'Technical Analysis'],
  },
  {
    title: 'Risk Management',
    icon: Shield,
    color: 'text-accent-cyan',
    bgColor: 'bg-accent-cyan/20',
    items: ['Stop Loss', 'Take Profit', 'Position Sizing', 'Risk Calculator'],
  },
  {
    title: 'Automated Trading',
    icon: Settings,
    color: 'text-accent-pink',
    bgColor: 'bg-accent-pink/20',
    items: ['Trading Bots', 'Algorithm Support', 'Backtesting', 'Strategy Builder'],
  },
  {
    title: 'Market Tools',
    icon: Calendar,
    color: 'text-accent-orange',
    bgColor: 'bg-accent-orange/20',
    items: ['Economic Calendar', 'Market News', 'Price Alerts', 'Copy Trading'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

interface WorkflowNodeProps {
  title: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  items: string[];
  index: number;
  isLast: boolean;
}

function WorkflowNode({ title, icon: Icon, color, bgColor, items, index, isLast }: WorkflowNodeProps) {
  return (
    <motion.div variants={nodeVariants} className="relative flex flex-col items-center">
      {/* Node Circle */}
      <div className={cn(
        'relative w-16 h-16 rounded-full flex items-center justify-center',
        'border-2 border-border bg-bg-secondary',
        'transition-all duration-300 hover:scale-110'
      )}>
        <div className={cn('w-10 h-10 rounded-full flex items-center justify-center', bgColor)}>
          <Icon className={cn('w-5 h-5', color)} />
        </div>
        
        {/* Glow effect */}
        <div className={cn(
          'absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300',
          'blur-md -z-10'
        )} />
      </div>
      
      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      
      {/* Items */}
      <ul className="mt-3 space-y-1.5 text-center">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-text-muted capitalize">
            {item}
          </li>
        ))}
      </ul>
      
      {/* Connector Line */}
      {!isLast && (
        <motion.div 
          className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-0.5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ 
            transformOrigin: 'left',
            background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.5) 0%, rgba(6, 182, 212, 0.5) 100%)'
          }}
        />
      )}
    </motion.div>
  );
}

export function WorkflowSection() {
  return (
    <section id="workflow" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionTag icon={Target} iconColor="text-accent-cyan">
              Powerful Trading Features
            </SectionTag>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything You Need to{' '}
              <GradientText>Succeed.</GradientText>
            </h2>
            
            <p className="text-text-secondary max-w-xl mx-auto">
              Trade anytime, anywhere — from desktop, tablet, or mobile with our comprehensive trading tools.
            </p>
          </motion.div>
          
          {/* Workflow Nodes */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          >
            {workflowSteps.map((step, index) => (
              <WorkflowNode 
                key={step.title} 
                {...step} 
                index={index}
                isLast={index === workflowSteps.length - 1}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
