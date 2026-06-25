'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { FadeInView } from '@/components/animation/FadeInView';
import { Button } from '@/components/ui/Button';

const timeline = [
  { year: '2018', event: 'The vision for AERIS begins — a search for the perfect coastal site.' },
  { year: '2019', event: 'Discovery of the peninsula. Architectural design commences with Studio Adachi.' },
  { year: '2020', event: 'Groundbreaking. Local stone and materials sourced from within 200 km.' },
  { year: '2022', event: 'Structure complete. Interior design and landscape architecture begin.' },
  { year: '2023', event: 'AERIS opens its doors. Named one of the most anticipated openings.' },
  { year: '2024', event: 'Awarded Architectural Digest\'s Hotel of the Year.' },
];

const awards = [
  'Architectural Digest Hotel of the Year — 2024',
  'World Architecture Festival — Best Hospitality Design — 2023',
  'Michelin Key — 3 Keys — 2024',
  'Condé Nast Traveler — World\'s Best Places to Stay — 2024',
  'Design Hotels — Member Since 2023',
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <FadeInView>
            <Label className="text-background/80 mb-4 block">About</Label>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[0.9] tracking-tight">
              The Story of AERIS
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 md:py-40">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <FadeInView>
              <Label className="mb-6 block">Our Story</Label>
              <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-8">
                A Sanctuary Born from a Simple Idea
              </Heading>
              <Text className="mb-8">
                AERIS began with a question: what if a hotel could feel less like a destination 
                and more like a state of being? What if every surface, every shadow, every silence 
                was intentional?
              </Text>
              <Text className="mb-8">
                We spent three years searching for the right place — a peninsula where the forest 
                meets the sea, where the light changes with the seasons, where the only sounds are 
                wind and water. Here, we commissioned Studio Adachi to create architecture that 
                would honor the land rather than dominate it.
              </Text>
              <Text>
                The result is a place that feels both ancient and new — where limestone walls 
                warm in the afternoon sun, where corridors open onto unexpected views, and where 
                every room frames the landscape like a living painting.
              </Text>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-32 md:py-40 bg-cards">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInView>
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80)' }}
                role="img"
                aria-label="Interior architecture detail"
              />
            </FadeInView>
            <FadeInView delay={0.15}>
              <Label className="mb-4 block">Design Philosophy</Label>
              <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-8">
                Architecture as a Frame for Life
              </Heading>
              <Text className="mb-6">
                Our design philosophy is rooted in the principles of Japanese minimalism 
                and Scandinavian warmth — a balance of restraint and comfort, of shadow and light.
              </Text>
              <Text>
                Every material was chosen for its integrity: local limestone, handcrafted 
                timber, natural linen, and travertine. Nothing is synthetic. Nothing is 
                disposable. Everything is meant to age gracefully.
              </Text>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 md:py-40">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-12 block text-center">Timeline</Label>
          </FadeInView>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <FadeInView key={item.year} delay={index * 0.1}>
                <div className="flex gap-8 pb-12 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-accent mt-2" />
                    {index < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-borders mt-2" />
                    )}
                  </div>
                  <div>
                    <span className="font-serif text-xl text-primary-accent">{item.year}</span>
                    <p className="font-sans text-sm text-secondary-text mt-1">{item.event}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-32 md:py-40 bg-secondary-bg">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-12 block text-center">Recognition</Label>
            <div className="max-w-2xl mx-auto space-y-6">
              {awards.map((award, index) => (
                <FadeInView key={award} delay={index * 0.1}>
                  <div className="flex items-center gap-4">
                    <span className="w-1 h-1 rounded-full bg-primary-accent flex-shrink-0" />
                    <p className="font-sans text-sm md:text-base text-primary-text">{award}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 text-center">
        <div className="content-width">
          <FadeInView>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Experience AERIS
            </Heading>
            <Text className="max-w-lg mx-auto mb-8">
              We invite you to discover the quiet luxury that awaits.
            </Text>
            <Button href="/reserve" variant="outline">
              Make an Inquiry
            </Button>
          </FadeInView>
        </div>
      </section>
    </>
  );
}