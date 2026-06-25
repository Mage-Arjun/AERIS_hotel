'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animation/FadeInView';
import { Button } from '@/components/ui/Button';

const wellnessItems = [
  { title: 'Spa', description: 'Holistic treatments using natural, locally-sourced ingredients.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80' },
  { title: 'Meditation', description: 'Guided sessions in our ocean-view meditation pavilion.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80' },
  { title: 'Massage', description: 'Traditional techniques reimagined for deep restoration.', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80' },
  { title: 'Fitness', description: 'State-of-the-art equipment with panoramic ocean views.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
  { title: 'Pool', description: 'An infinity edge that meets the horizon.', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80' },
  { title: 'Sauna & Steam', description: 'Ancient bathing rituals for purification and renewal.', image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80' },
];

export default function WellnessPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <FadeInView>
            <Label className="text-background/80 mb-4 block">Wellness</Label>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[0.9] tracking-tight">
              Restoration of Self
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="content-width">
          <FadeInView>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-8 max-w-2xl">
              A holistic approach to well-being that draws from ancient traditions and modern science.
            </Heading>
            <Text className="max-w-xl">
              Our wellness philosophy is rooted in the belief that true restoration 
              requires harmony between body, mind, and environment.
            </Text>
          </FadeInView>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wellnessItems.map((item, index) => (
              <FadeInView key={item.title} delay={index * 0.1}>
                <div className="group">
                  <div
                    className="aspect-[4/3] bg-cover bg-center mb-6"
                    style={{ backgroundImage: `url(${item.image})` }}
                    role="img"
                    aria-label={item.title}
                  />
                  <h3 className="font-serif text-xl md:text-2xl text-primary-text mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-secondary-text">{item.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}