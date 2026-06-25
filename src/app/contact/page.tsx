'use client';

import React, { useState } from 'react';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { FadeInView } from '@/components/animation/FadeInView';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handled by Sanity or email service
  };

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <FadeInView>
            <Label className="text-background/80 mb-4 block">Contact</Label>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[0.9] tracking-tight">
              Get in Touch
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <FadeInView>
              <Label className="mb-6 block">Contact Information</Label>
              <Heading as="h2" className="text-3xl md:text-4xl mb-8">
                We Would Love to Hear from You
              </Heading>
              <Text className="mb-12 max-w-md">
                Whether you have a question about our suites, wish to plan your visit, 
                or simply want to learn more about AERIS — we are here for you.
              </Text>

              <div className="space-y-8">
                <div>
                  <Label className="mb-2 block">Email</Label>
                  <a href="mailto:hello@aeris.com" className="font-sans text-base text-primary-text hover:text-primary-accent transition-colors duration-300">
                    hello@aeris.com
                  </a>
                </div>
                <div>
                  <Label className="mb-2 block">Phone</Label>
                  <a href="tel:+15551234567" className="font-sans text-base text-primary-text hover:text-primary-accent transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <Label className="mb-2 block">Address</Label>
                  <p className="font-sans text-base text-primary-text">
                    AERIS Resort<br />
                    42 Coastal Highway<br />
                    Big Sur, California 93920
                  </p>
                </div>
                <div>
                  <Label className="mb-2 block">Operating Hours</Label>
                  <p className="font-sans text-sm text-secondary-text">
                    Concierge: 24 hours<br />
                    Reception: 6:00 - 23:00
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Contact Form */}
            <FadeInView delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div>
                  <Label className="mb-2 block">Name</Label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300"
                    placeholder="Your name"
                    aria-label="Your name"
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Email</Label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300"
                    placeholder="your@email.com"
                    aria-label="Your email address"
                    required
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Phone</Label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
                    aria-label="Your phone number"
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Message</Label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300 resize-none"
                    placeholder="How can we help you?"
                    aria-label="Your message"
                    required
                  />
                </div>

                <Button type="submit" variant="outline">
                  Send Message
                </Button>
              </form>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-secondary-bg flex items-center justify-center">
        <div className="text-center">
          <Label className="block mb-2">Location</Label>
          <p className="font-sans text-sm text-secondary-text">
            Big Sur, California | Map integration available with Google Maps or Mapbox
          </p>
        </div>
      </section>
    </>
  );
}