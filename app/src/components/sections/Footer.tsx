import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const footerLinks = [
  { label: 'Markets', href: '#' },
  { label: 'Sports Trading', href: '#' },
  { label: 'Platform', href: '#' },
  { label: 'Accounts', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'About Us', href: '#' },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 mb-4 group">
            <TrendingUp className="w-6 h-6 text-accent-purple transition-transform duration-300 group-hover:scale-110" />
            <span className="text-lg font-semibold text-white">
              Zee<span className="text-accent-purple">xco</span>
            </span>
          </a>
          
          {/* Description */}
          <p className="text-text-secondary text-sm mb-6 max-w-2xl">
            Zeexco is a global multi-asset trading platform offering Forex, Sports Markets, Indices, Commodities, Stocks, and Crypto CFDs with advanced technology and secure execution.
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap gap-6 mb-6 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Support */}
          <div className="text-text-secondary text-sm mb-6">
            <p>Support: <a href="mailto:support@zeexco.com" className="text-accent-purple hover:text-accent-purple/80 transition-colors">support@zeexco.com</a> | 24/5 Customer Support</p>
          </div>
          
          {/* Risk Warning */}
          <div className="text-xs text-text-muted mb-6 max-w-2xl">
            <p>Trading Forex, CFDs, and Sports-based financial instruments involves high risk and may not be suitable for all investors. Please trade responsibly.</p>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-text-muted">
            © 2026 Zeexco. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
