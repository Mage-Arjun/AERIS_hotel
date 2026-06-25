import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
  className?: string;
}

export function Heading({ as: Tag = 'h2', children, className }: HeadingProps) {
  return (
    <Tag className={cn('font-serif font-normal tracking-tight', className)}>
      {children}
    </Tag>
  );
}

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

export function Text({ children, className, size = 'base' }: TextProps) {
  return (
    <p
      className={cn(
        'font-sans leading-relaxed text-secondary-text',
        {
          'text-sm': size === 'sm',
          'text-base md:text-lg': size === 'base',
          'text-lg md:text-xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </p>
  );
}

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export function Label({ children, className }: LabelProps) {
  return (
    <span
      className={cn(
        'font-sans text-xs uppercase tracking-[0.04em] text-secondary-text',
        className
      )}
    >
      {children}
    </span>
  );
}

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function Quote({ children, author, className }: QuoteProps) {
  return (
    <blockquote className={cn('space-y-6', className)}>
      <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-primary-text">
        &ldquo;{children}&rdquo;
      </p>
      {author && (
        <cite className="font-sans text-sm uppercase tracking-[0.04em] text-secondary-text not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}