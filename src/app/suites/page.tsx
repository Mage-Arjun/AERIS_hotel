'use client';

import React from 'react';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { FadeInView } from '@/components/animation/FadeInView';
import { SuiteCard } from '@/components/features/SuiteCard';

const suites = [
  {
    title: 'The Atelier Suite',
    excerpt: 'A sanctuary of light and shadow, where architecture frames the landscape like a living canvas. Floor-to-ceiling windows capture the changing light throughout the day.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    floorSize: '120 m²',
    view: 'Ocean Front',
    href: '/suites/atelier',
  },
  {
    title: 'The Observatory',
    excerpt: 'Perched above the treeline, this suite offers uninterrupted views of the horizon and the night sky. A private terrace extends your living space into the open air.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    floorSize: '95 m²',
    view: 'Panoramic',
    href: '/suites/observatory',
  },
  {
    title: 'The Garden House',
    excerpt: 'Nestled within private gardens, indoor and outdoor spaces merge in seamless harmony through floor-to-ceiling glass walls that open to the surrounding greenery.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    floorSize: '110 m²',
    view: 'Garden',
    href: '/suites/garden-house',
  },
  {
    title: 'The Penthouse',
    excerpt: 'The pinnacle of refined living, occupying the entire top floor with sweeping views of the coastline and a private rooftop garden.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    floorSize: '200 m²',
    view: '360° Ocean & Mountain',
    href: '/suites/penthouse',
  },
];

export default function SuitesPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">Accommodation</Label>
            <Heading as="h1" className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Our Suites
            </Heading>
            <Text className="max-w-xl">
              Each suite is a study in architectural restraint — where natural materials,
              abundant light, and careful proportions create spaces of profound calm.
            </Text>
          </FadeInView>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {suites.map((suite, index) => (
              <SuiteCard key={suite.title} {...suite} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}