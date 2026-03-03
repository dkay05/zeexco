import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionTagProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  iconColor?: string;
}

export function SectionTag({ 
  icon: Icon, 
  children, 
  className,
  iconColor = 'text-accent-purple'
}: SectionTagProps) {
  return (
    <div className={cn('flex items-center gap-2 mb-4', className)}>
      {Icon && (
        <span className={cn('flex items-center justify-center w-5 h-5 rounded-full bg-white/10', iconColor)}>
          <Icon className="w-3 h-3" />
        </span>
      )}
      <span className="text-sm font-medium text-text-secondary tracking-wide">
        {children}
      </span>
    </div>
  );
}
