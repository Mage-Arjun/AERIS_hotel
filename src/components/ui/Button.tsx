'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'text',
  size = 'md',
  href,
  children,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const sharedClasses = cn(
    'group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.04em] transition-colors duration-500',
    {
      'border-b border-primary-accent/30 pb-0.5 text-primary-text hover:border-primary-accent':
        variant === 'outline',
    'text-secondary-text hover:text-primary-accent': variant === 'text',
      'text-sm': size === 'sm',
      'text-base': size === 'md',
      'text-lg': size === 'lg',
    },
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-400 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <motion.div
        className="inline-block"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <a href={href} className={sharedClasses}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="inline-block"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <button type={type} onClick={onClick} className={sharedClasses}>
        {content}
      </button>
    </motion.div>
  );
}