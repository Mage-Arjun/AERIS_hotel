'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeInView } from '@/components/animation/FadeInView';
import { Label } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';

interface EditorialSectionProps {
  label?: string;
  title?: string;
  quote?: string;
  author?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function EditorialSection({
  label,
  title,
  quote,
  author,
  description,
  image,
  imagePosition = 'left',
  className,
  children,
  id,
}: EditorialSectionProps) {
  return (
    <section id={id} className={cn('py-32 md:py-40', className)}>
      <div className="content-width">
        {label && (
          <FadeInView>
            <Label className="mb-6 block">{label}</Label>
          </FadeInView>
        )}

        <div className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center',
          imagePosition === 'right' ? '' : ''
        )}>
          {/* Text content */}
          <div className={cn(
            imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
          )}>
            <FadeInView>
              {title && (
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-text leading-[0.95] tracking-tight mb-8">
                  {title}
                </h2>
              )}
              {quote && (
                <blockquote className="space-y-4">
                  <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-text leading-[1.1]">
                    &ldquo;{quote}&rdquo;
                  </p>
                  {author && (
                    <cite className="font-sans text-sm uppercase tracking-[0.04em] text-secondary-text not-italic block">
                      — {author}
                    </cite>
                  )}
                </blockquote>
              )}
              {description && (
                <p className="font-sans text-base md:text-lg text-secondary-text leading-relaxed mt-8">
                  {description}
                </p>
              )}
              {children}
            </FadeInView>
          </div>

          {/* Image */}
          {image && (
            <div className={cn(
              'relative overflow-hidden',
              imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
            )}>
              <FadeInView>
                <motion.div
                  className="aspect-[4/5] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                  role="img"
                  aria-label={title || 'Editorial image'}
                />
              </FadeInView>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}