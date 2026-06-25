'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeInView } from '@/components/animation/FadeInView';
import { Label } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

interface SuiteCardProps {
  title: string;
  excerpt: string;
  image: string;
  floorSize?: string;
  view?: string;
  href: string;
  index?: number;
}

export function SuiteCard({ title, excerpt, image, floorSize, view, href, index = 0 }: SuiteCardProps) {
  return (
    <FadeInView delay={index * 0.15}>
      <article className="group relative">
        <a href={href} className="block">
          {/* Image */}
          <div className="relative overflow-hidden mb-8">
            <motion.div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02 }}
              role="img"
              aria-label={title}
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl text-primary-text tracking-tight group-hover:text-primary-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="font-sans text-base text-secondary-text leading-relaxed line-clamp-2">
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-6 pt-2">
              {floorSize && (
                <span className="font-sans text-xs uppercase tracking-[0.04em] text-secondary-text">
                  {floorSize}
                </span>
              )}
              {view && (
                <span className="font-sans text-xs uppercase tracking-[0.04em] text-secondary-text">
                  {view}
                </span>
              )}
            </div>

            <Button variant="text">
              View Suite
            </Button>
          </div>
        </a>
      </article>
    </FadeInView>
  );
}

export function JournalCard({
  title,
  excerpt,
  image,
  category,
  readingTime,
  href,
  index = 0,
}: {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readingTime: number;
  href: string;
  index?: number;
}) {
  return (
    <FadeInView delay={index * 0.1}>
      <article className="group">
        <a href={href} className="block">
          <div className="relative overflow-hidden mb-6">
            <motion.div
              className="aspect-[16/10] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02 }}
              role="img"
              aria-label={title}
            />
          </div>

          <div className="flex items-center gap-4 mb-3">
            <span className="font-sans text-xs uppercase tracking-[0.04em] text-primary-accent">
              {category}
            </span>
            <span className="font-sans text-xs text-secondary-text">
              {readingTime} min read
            </span>
          </div>

          <h3 className="font-serif text-xl md:text-2xl text-primary-text tracking-tight leading-tight group-hover:text-primary-accent transition-colors duration-300">
            {title}
          </h3>
        </a>
      </article>
    </FadeInView>
  );
}

export function ExperienceCard({
  title,
  description,
  image,
  category,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  image: string;
  category: string;
  href: string;
  index?: number;
}) {
  return (
    <FadeInView delay={index * 0.12}>
      <article className="group relative overflow-hidden">
        <a href={href} className="block">
          <motion.div
            className="aspect-[3/4] w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02 }}
            role="img"
            aria-label={title}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="font-sans text-xs uppercase tracking-[0.04em] text-background/80 mb-2 block">
                {category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-background tracking-tight">
                {title}
              </h3>
            </div>
          </motion.div>
        </a>
      </article>
    </FadeInView>
  );
}