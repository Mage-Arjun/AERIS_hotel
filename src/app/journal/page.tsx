'use client';

import React from 'react';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { FadeInView } from '@/components/animation/FadeInView';
import { JournalCard } from '@/components/features/SuiteCard';

const articles = [
  { title: 'The Poetry of Limestone', excerpt: 'How local stone informed the architectural language of AERIS.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', category: 'Architecture', readingTime: 6, href: '/journal/poetry-of-limestone' },
  { title: 'A Conversation with Light', excerpt: 'The interplay of natural light throughout the seasons at our coastal sanctuary.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', category: 'Design', readingTime: 4, href: '/journal/conversation-with-light' },
  { title: 'The Art of Slow Dining', excerpt: 'Our culinary philosophy rooted in seasonality, locality, and patience.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', category: 'Food', readingTime: 5, href: '/journal/art-of-slow-dining' },
  { title: 'The Silence Between Waves', excerpt: 'Meditations on the restorative power of the ocean.', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80', category: 'Travel', readingTime: 7, href: '/journal/silence-between-waves' },
  { title: 'Crafting the Details', excerpt: 'A look at the artisans and craftspeople behind our interiors.', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80', category: 'Design', readingTime: 5, href: '/journal/crafting-the-details' },
  { title: 'The Garden as Architecture', excerpt: 'How our landscape design blurs the boundary between building and nature.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80', category: 'Architecture', readingTime: 8, href: '/journal/garden-as-architecture' },
];

const categories = ['All', 'Architecture', 'Travel', 'Food', 'Culture', 'Design', 'Photography'];

export default function JournalPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">Journal</Label>
            <Heading as="h1" className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Stories & Ideas
            </Heading>
            <Text className="max-w-xl">
              Explorations in architecture, travel, food, culture, design, and photography —
              written with the same care we bring to every detail.
            </Text>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-12" role="tablist" aria-label="Article categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`font-sans text-xs uppercase tracking-[0.04em] px-4 py-2 border transition-colors duration-300 ${
                    cat === 'All' ? 'border-primary-text text-primary-text' : 'border-borders text-secondary-text hover:border-primary-text hover:text-primary-text'
                  }`}
                  role="tab"
                  aria-selected={cat === 'All'}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {articles.map((article, index) => (
              <JournalCard key={article.title} {...article} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}