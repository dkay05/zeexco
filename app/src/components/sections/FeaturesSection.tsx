import { motion } from 'framer-motion';
import { Check, TrendingUp, BarChart3, Coins, Building2, Bitcoin } from 'lucide-react';
import { SectionTag } from '@/components/shared/SectionTag';
import { GradientText } from '@/components/shared/GradientText';
import { cn } from '@/lib/utils';

const features = [
  {
    tag: 'Forex Trading',
    tagColor: 'bg-accent-purple/20 text-accent-purple',
    icon: TrendingUp,
    title: 'Trade major, minor, and exotic currency pairs with tight spreads and flexible leverage.',
    items: ['EUR/USD', 'GBP/JPY', 'USD/JPY', 'AUD/USD'],
  },
  {
    tag: 'Global Indices',
    tagColor: 'bg-accent-cyan/20 text-accent-cyan',
    icon: BarChart3,
    title: 'Trade top indices like US30, NAS100, SPX500, DAX40 and more.',
    items: ['US30', 'NAS100', 'SPX500', 'DAX40'],
  },
  {
    tag: 'Commodities',
    tagColor: 'bg-accent-pink/20 text-accent-pink',
    icon: Coins,
    title: 'Gold, Silver, Crude Oil, Natural Gas with real-time pricing.',
    items: ['Gold', 'Silver', 'Crude Oil', 'Natural Gas'],
  },
  {
    tag: 'Crypto CFDs',
    tagColor: 'bg-accent-orange/20 text-accent-orange',
    icon: Bitcoin,
    title: 'Trade popular cryptocurrencies with volatility advantage.',
    items: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin'],
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

interface FeatureCardProps {
  tag: string;
  tagColor: string;
  icon: React.ElementType;
  title: string;
  items: string[];
  index: number;
}

function FeatureCard({ tag, tagColor, icon: Icon, title, items }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className={cn(
        'relative p-6 rounded-2xl border border-border bg-bg-secondary/50',
        'backdrop-blur-sm transition-all duration-300',
        'hover:border-accent-purple/30 hover:shadow-glow-purple'
      )}
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent-purple/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Tag */}
        <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4', tagColor)}>
          <Icon className="w-3 h-3 mr-1.5" />
          {tag}
        </span>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-4">
          {title}
        </h3>
        
        {/* Items */}
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-accent-purple/20">
                <Check className="w-2.5 h-2.5 text-accent-purple" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionTag icon={Check} iconColor="text-accent-cyan">
              500+ Global Instruments
            </SectionTag>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Access{' '}
              <GradientText>Global Markets.</GradientText>
            </h2>
            
            <p className="text-text-secondary max-w-xl mx-auto">
              Trade forex, indices, commodities, stocks, and crypto — all from one powerful platform.
            </p>
          </motion.div>
          
          {/* Feature Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureCard key={feature.tag} {...feature} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
