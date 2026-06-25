'use client';

import React from 'react';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { FadeInView } from '@/components/animation/FadeInView';
import { ExperienceCard } from '@/components/features/SuiteCard';

const experiences = [
  { title: 'Private Dining', description: 'An intimate culinary journey beneath the stars.', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80', category: 'Culinary', href: '/experiences/private-dining' },
  { title: 'Photography Tours', description: 'Capture the landscape through the lens with a professional photographer.', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80', category: 'Culture', href: '/experiences/photography-tours' },
  { title: 'Sunrise Yoga', description: 'Begin your day with movement overlooking the ocean.', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80', category: 'Wellness', href: '/experiences/sunrise-yoga' },
  { title: 'Boat Excursions', description: 'Explore hidden coves and coastal wonders by sea.', image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&q=80', category: 'Adventure', href: '/experiences/boat-excursions' },
  { title: 'Cooking Classes', description: 'Learn the secrets of local cuisine from our chefs.', image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600&q=80', category: 'Culinary', href: '/experiences/cooking-classes' },
  { title: 'Meditation & Mindfulness', description: 'Guided sessions in our tranquil meditation pavilion.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80', category: 'Wellness', href: '/experiences/meditation' },
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">Experiences</Label>
            <Heading as="h1" className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Curated Moments
            </Heading>
            <Text className="max-w-xl">
              Each experience is designed to connect you with the essence of this place —
              its landscape, its culture, its quiet magic.
            </Text>
          </FadeInView>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.title} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}