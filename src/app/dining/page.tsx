'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { FadeInView } from '@/components/animation/FadeInView';
import { Button } from '@/components/ui/Button';

export default function DiningPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <FadeInView>
            <Label className="text-background/80 mb-4 block">Dining</Label>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[0.9] tracking-tight">
              A Culinary Journey
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInView>
              <div>
                <Label className="mb-4 block">Our Philosophy</Label>
                <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-8">
                  Rooted in Place
                </Heading>
                <Text className="mb-6">
                  Our culinary philosophy is rooted in the landscape that surrounds us. 
                  We work with local farmers, fishermen, and foragers to bring the 
                  freshest seasonal ingredients to your table.
                </Text>
                <Text>
                  Every dish tells a story of terroir — of the sea breeze that shapes 
                  our coastline, the sun that ripens our produce, and the hands that 
                  cultivated each ingredient with care.
                </Text>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="aspect-[4/5] bg-cover bg-center" 
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80)' }}
                role="img"
                aria-label="Restaurant interior"
              />
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-cards">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">The Chef</Label>
            <Heading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-8">
              Chef Matteo Rivera
            </Heading>
            <Text className="max-w-2xl mb-12">
              With a career spanning Michelin-starred kitchens across three continents, 
              Chef Rivera brings a philosophy of simplicity and precision. His cooking 
              honors the ingredient above all else.
            </Text>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Operating Hours', value: 'Breakfast: 7:00 - 10:30\nLunch: 12:00 - 14:30\nDinner: 18:00 - 22:00' },
              { label: 'Dress Code', value: 'Smart casual. Evening dining requests elegant attire.' },
              { label: 'Dietary', value: 'All dietary requirements accommodated with advance notice.' },
            ].map((item, i) => (
              <FadeInView key={item.label} delay={i * 0.1}>
                <div className="p-8 bg-background border border-borders">
                  <Label className="mb-3 block">{item.label}</Label>
                  <p className="font-sans text-sm text-secondary-text whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView delay={0.3}>
            <div className="mt-12 text-center">
              <Button href="/reserve" variant="outline">
                Reserve a Table
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}