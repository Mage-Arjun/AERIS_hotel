'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  backgroundVideo?: string;
  backgroundImage?: string;
  scrollTarget?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const, delay: 1.3 },
  },
};

export function Hero({
  title = 'AERIS',
  subtitle = 'Where Light Finds You.',
  tagline = 'An intimate sanctuary carved by wind and tide — where every moment is a quiet masterpiece.',
  backgroundImage,
  scrollTarget = '#philosophy',
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            role="img"
            aria-label="Hero background"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-accent/10 via-background to-secondary-bg/60" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary-accent/5" />
      </div>

      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-accent/8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-secondary-accent/10"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full bg-primary-accent/5"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.6, ease: 'easeOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Title */}
          <motion.h1
            variants={childVariants}
            className="font-serif text-[clamp(64px,12vw,160px)] text-primary-text leading-[0.85] tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Decorative accent line */}
          <motion.div
            variants={lineVariants}
            className="h-[2px] w-24 bg-primary-accent/60 mt-2 mb-8 origin-center"
          />

          {/* Subtitle */}
          <motion.p
            variants={childVariants}
            className="font-sans text-lg md:text-xl text-primary-text/70 font-light tracking-wide mb-4"
          >
            {subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={childVariants}
            className="font-sans text-sm md:text-base text-primary-text/50 font-light max-w-xl leading-relaxed mb-10"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <a
              href="/suites"
              className={cn(
                'group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.08em] font-medium',
                'bg-primary-text text-white px-7 py-3.5 rounded-sm',
                'transition-all duration-400 hover:bg-primary-accent hover:-translate-y-0.5'
              )}
            >
              <span>Explore Suites</span>
              <span className="inline-block transition-transform duration-400 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/reserve"
              className={cn(
                'group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.08em] font-medium',
                'border border-primary-text/40 text-primary-text px-7 py-3.5 rounded-sm',
                'transition-all duration-400 hover:bg-primary-text hover:text-white hover:-translate-y-0.5'
              )}
            >
              <span>Reserve Your Stay</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href={scrollTarget}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        aria-label="Scroll to explore"
      >
        <span className="font-sans text-xs uppercase tracking-[0.04em] text-primary-text/50">
          Explore
        </span>
        <motion.div
          className="w-px h-8 bg-primary-text/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  );
}