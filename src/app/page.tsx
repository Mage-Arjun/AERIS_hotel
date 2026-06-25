'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { EditorialSection } from '@/components/sections/EditorialSection';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animation/FadeInView';
import { SuiteCard, JournalCard, ExperienceCard } from '@/components/features/SuiteCard';
import { Button } from '@/components/ui/Button';
import { Heading, Text, Label, Quote } from '@/components/ui/Typography';

const featuredSuites = [
  {
    title: 'The Atelier Suite',
    excerpt: 'A sanctuary of light and shadow, where architecture frames the landscape like a living canvas.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    floorSize: '120 m²',
    view: 'Ocean Front',
    href: '/suites/atelier',
  },
  {
    title: 'The Observatory',
    excerpt: 'Perched above the treeline, this suite offers uninterrupted views of the horizon and the night sky.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    floorSize: '95 m²',
    view: 'Panoramic',
    href: '/suites/observatory',
  },
  {
    title: 'The Garden House',
    excerpt: 'Nestled within private gardens, indoor and outdoor spaces merge in seamless harmony.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    floorSize: '110 m²',
    view: 'Garden',
    href: '/suites/garden-house',
  },
];

const journalEntries = [
  {
    title: 'The Poetry of Limestone',
    excerpt: 'How local stone informed the architectural language of AERIS.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    category: 'Architecture',
    readingTime: 6,
    href: '/journal/poetry-of-limestone',
  },
  {
    title: 'A Conversation with Light',
    excerpt: 'The interplay of natural light throughout the seasons at our coastal sanctuary.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    category: 'Design',
    readingTime: 4,
    href: '/journal/conversation-with-light',
  },
  {
    title: 'The Art of Slow Dining',
    excerpt: 'Our culinary philosophy rooted in seasonality, locality, and patience.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    category: 'Food',
    readingTime: 5,
    href: '/journal/art-of-slow-dining',
  },
];

const testimonials = [
  {
    quote: 'An experience that transcends the ordinary. Every detail, from the architecture to the service, has been considered with extraordinary care.',
    author: 'Eleanor Hart',
    title: 'Architect & Designer',
  },
  {
    quote: 'I have traveled to many remarkable places, but AERIS occupies its own category. It is not merely a hotel — it is a philosophy made tangible.',
    author: 'James Calloway',
    title: 'Editor-in-Chief, Travel + Leisure',
  },
  {
    quote: 'The silence here has texture. It is the kind of place that changes how you see the world, long after you have left.',
    author: 'Sofia Ramirez',
    title: 'Photographer & Writer',
  },
];

const experiences = [
  {
    title: 'Private Dining',
    description: 'An intimate culinary journey beneath the stars.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80',
    category: 'Culinary',
    href: '/experiences/private-dining',
  },
  {
    title: 'Sunrise Yoga',
    description: 'Begin your day with movement overlooking the ocean.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
    category: 'Wellness',
    href: '/experiences/sunrise-yoga',
  },
  {
    title: 'Boat Excursions',
    description: 'Explore the hidden coves and coastal wonders.',
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&q=80',
    category: 'Adventure',
    href: '/experiences/boat-excursions',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero scrollTarget="#philosophy" />

      {/* Section 2: Philosophy */}
      <section id="philosophy" className="py-40 md:py-48">
        <div className="content-width">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInView>
              <Label className="mb-6 block">Philosophy</Label>
            </FadeInView>
            <FadeInView delay={0.15}>
              <blockquote className="space-y-8">
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-text leading-[1.1] tracking-tight">
                  &ldquo;Architecture is the silent dialogue between space and the soul.&rdquo;
                </p>
                <cite className="font-sans text-sm uppercase tracking-[0.04em] text-secondary-text not-italic block">
                  — Tadao Ando
                </cite>
              </blockquote>
            </FadeInView>
            <FadeInView delay={0.3}>
              <p className="font-sans text-base md:text-lg text-secondary-text leading-relaxed mt-12 max-w-xl mx-auto">
                At AERIS, we believe true luxury is found in the spaces between —
                in the quality of light, the texture of materials, and the silence that
                allows you to hear your own thoughts.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Suites */}
      <section className="py-32 md:py-40 bg-cards">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">Accommodation</Label>
            <Heading as="h2" className="text-4xl md:text-5xl lg:text-6xl mb-16">
              Featured Suites
            </Heading>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {featuredSuites.map((suite, index) => (
              <SuiteCard key={suite.title} {...suite} index={index} />
            ))}
          </div>

          <FadeInView delay={0.3}>
            <div className="mt-16 text-center">
              <Button href="/suites" variant="outline">
                Explore All Suites
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Section 4: Dining */}
      <EditorialSection
        id="dining"
        label="Dining"
        title="A Culinary Journey"
        quote="Food is our common ground, a universal experience."
        author="James Beard"
        description="Our restaurant is an expression of the land and sea that surround us. Seasonal ingredients, prepared with precision and respect, served in an atmosphere of understated elegance."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80"
        imagePosition="right"
      >
        <div className="mt-8">
          <Button href="/dining" variant="outline">
            Discover Dining
          </Button>
        </div>
      </EditorialSection>

      {/* Section 5: Wellness */}
      <EditorialSection
        id="wellness"
        label="Wellness"
        title="Restoration of Self"
        description="A holistic approach to well-being that draws from ancient traditions and modern science. Our spa, meditation spaces, and fitness facilities are designed to restore balance and clarity."
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80"
        imagePosition="left"
        className="bg-cards"
      >
        <div className="mt-8">
          <Button href="/wellness" variant="outline">
            Explore Wellness
          </Button>
        </div>
      </EditorialSection>

      {/* Section 6: Experiences */}
      <section className="py-32 md:py-40">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">Experiences</Label>
            <Heading as="h2" className="text-4xl md:text-5xl lg:text-6xl mb-4">
              Curated Moments
            </Heading>
            <Text className="max-w-xl mb-16">
              Each experience is designed to connect you with the essence of this place —
                its landscape, its culture, its quiet magic.
            </Text>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.title} {...exp} index={index} />
            ))}
          </div>

          <FadeInView delay={0.3}>
            <div className="mt-16 text-center">
              <Button href="/experiences" variant="outline">
                View All Experiences
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Section 7: Architecture Gallery */}
      <section className="py-32 md:py-40 bg-primary-text">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block text-background/60">Architecture</Label>
            <Heading as="h2" className="text-4xl md:text-5xl lg:text-6xl mb-4 text-background">
              Built by Light
            </Heading>
            <Text className="max-w-xl mb-16 text-background/70">
              Our architecture is a study in contrasts — solid and transparent, 
              ancient and modern, monumental and intimate.
            </Text>
          </FadeInView>
        </div>

        {/* Full-bleed gallery */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 px-6 md:px-12"
            animate={{ x: ['0%', '-33%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1600585154${
                    i % 2 === 0 ? '340' : '760'
                  }-0db1235d8b9a?w=600&q=80)`,
                }}
                role="img"
                aria-label={`Architecture image ${i}`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 8: Journal */}
      <section className="py-32 md:py-40">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">Journal</Label>
            <Heading as="h2" className="text-4xl md:text-5xl lg:text-6xl mb-16">
              Stories & Ideas
            </Heading>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {journalEntries.map((entry, index) => (
              <JournalCard key={entry.title} {...entry} index={index} />
            ))}
          </div>

          <FadeInView delay={0.3}>
            <div className="mt-16 text-center">
              <Button href="/journal" variant="outline">
                Read the Journal
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section className="py-32 md:py-40 bg-secondary-bg">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-16 text-center block">What Guests Say</Label>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <FadeInView key={testimonial.author} delay={index * 0.15}>
                <blockquote className="space-y-6">
                  <p className="font-serif text-xl md:text-2xl text-primary-text leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer>
                    <cite className="font-sans text-sm not-italic block text-primary-text">
                      {testimonial.author}
                    </cite>
                    <span className="font-sans text-xs text-secondary-text">
                      {testimonial.title}
                    </span>
                  </footer>
                </blockquote>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Reservation CTA */}
      <section className="py-40 md:py-48 text-center">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-6 block">Begin Your Journey</Label>
            <Heading as="h2" className="text-4xl md:text-5xl lg:text-6xl mb-8 max-w-2xl mx-auto">
              A Room is Not Just a Space. It is a State of Mind.
            </Heading>
            <Text className="max-w-lg mx-auto mb-12">
              We invite you to experience a new definition of hospitality.
              Make an inquiry and let us curate your stay.
            </Text>
            <Button href="/reserve" variant="outline">
              Make a Reservation Inquiry
            </Button>
          </FadeInView>
        </div>
      </section>
    </>
  );
}