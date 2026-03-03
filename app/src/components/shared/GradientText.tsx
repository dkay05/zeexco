import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'full' | 'purple';
}

export function GradientText({ children, className, variant = 'full' }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        variant === 'full' 
          ? 'bg-gradient-to-r from-accent-purple via-accent-pink to-accent-orange'
          : 'bg-gradient-to-r from-accent-purple to-accent-pink',
        className
      )}
    >
      {children}
    </span>
  );
}
