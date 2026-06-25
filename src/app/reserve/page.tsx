'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, Text, Label } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { FadeInView } from '@/components/animation/FadeInView';

type BookingStep = 1 | 2 | 3 | 4 | 5 | 6;

interface BookingData {
  arrival: string;
  departure: string;
  guests: number;
  suite: string;
  purpose: string;
  airportTransfer: boolean;
  breakfast: boolean;
  spa: boolean;
  dining: boolean;
  accessibility: boolean;
  celebration: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

const suites = [
  { value: 'atelier', label: 'The Atelier Suite' },
  { value: 'observatory', label: 'The Observatory' },
  { value: 'garden-house', label: 'The Garden House' },
  { value: 'penthouse', label: 'The Penthouse' },
];

const purposes = [
  'Romantic Getaway',
  'Family Vacation',
  'Solo Retreat',
  'Business Trip',
  'Celebration',
  'Wellness Retreat',
  'Other',
];

const stepVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function ReservePage() {
  const [step, setStep] = useState<BookingStep>(1);
  const [data, setData] = useState<BookingData>({
    arrival: '',
    departure: '',
    guests: 2,
    suite: '',
    purpose: '',
    airportTransfer: false,
    breakfast: false,
    spa: false,
    dining: false,
    accessibility: false,
    celebration: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const update = (fields: Partial<BookingData>) => {
    setData({ ...data, ...fields });
  };

  const next = () => setStep((prev) => Math.min(prev + 1, 6) as BookingStep);
  const prev = () => setStep((prev) => Math.max(prev - 1, 1) as BookingStep);

  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="content-width">
          <FadeInView>
            <Label className="mb-4 block">Reservation</Label>
            <Heading as="h1" className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Make an Inquiry
            </Heading>
            <Text className="max-w-xl">
              No payment required. This is a non-binding inquiry — our concierge team 
              will respond within 24 hours to confirm availability and curate your stay.
            </Text>
          </FadeInView>

          {/* Progress indicator */}
          <FadeInView delay={0.2}>
            <div className="flex items-center gap-3 mt-16 mb-16">
              {[1, 2, 3, 4, 5, 6].map((s) => (
                <React.Fragment key={s}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs transition-colors duration-300 ${
                    s <= step ? 'bg-primary-accent text-background' : 'bg-borders text-secondary-text'
                  }`}>
                    {s}
                  </div>
                  {s < 6 && <div className={`flex-1 h-px transition-colors duration-300 ${s < step ? 'bg-primary-accent' : 'bg-borders'}`} />}
                </React.Fragment>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="pb-32 md:pb-40">
        <div className="content-width">
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Dates & Guests */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Label className="mb-8 block text-lg">Step 1 — Arrival & Departure</Label>
                  <div className="space-y-8">
                    <div>
                      <Label className="mb-2 block">Arrival Date</Label>
                      <input type="date" value={data.arrival} onChange={(e) => update({ arrival: e.target.value })}
                        className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <Label className="mb-2 block">Departure Date</Label>
                      <input type="date" value={data.departure} onChange={(e) => update({ departure: e.target.value })}
                        className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <Label className="mb-2 block">Number of Guests</Label>
                      <input type="number" min={1} max={10} value={data.guests} onChange={(e) => update({ guests: parseInt(e.target.value) })}
                        className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="mt-12">
                    <Button onClick={next} variant="outline">Continue</Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Suite */}
              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Label className="mb-8 block text-lg">Step 2 — Choose Your Suite</Label>
                  <div className="space-y-4">
                    {suites.map((s) => (
                      <button key={s.value} onClick={() => { update({ suite: s.value }); next(); }}
                        className={`w-full text-left p-6 border transition-all duration-300 ${
                          data.suite === s.value ? 'border-primary-accent bg-hover-bg' : 'border-borders hover:border-secondary-text'
                        }`}>
                        <span className="font-serif text-xl text-primary-text">{s.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button onClick={prev} variant="text">Back</Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Purpose */}
              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Label className="mb-8 block text-lg">Step 3 — Purpose of Your Visit</Label>
                  <div className="space-y-4">
                    {purposes.map((p) => (
                      <button key={p} onClick={() => { update({ purpose: p }); next(); }}
                        className={`w-full text-left p-6 border transition-all duration-300 ${
                          data.purpose === p ? 'border-primary-accent bg-hover-bg' : 'border-borders hover:border-secondary-text'
                        }`}>
                        <span className="font-sans text-base text-primary-text">{p}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button onClick={prev} variant="text">Back</Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Preferences */}
              {step === 4 && (
                <motion.div key="step4" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Label className="mb-8 block text-lg">Step 4 — Preferences</Label>
                  <div className="space-y-6">
                    {[
                      { key: 'airportTransfer', label: 'Airport Transfer' },
                      { key: 'breakfast', label: 'Breakfast Included' },
                      { key: 'spa', label: 'Spa Services' },
                      { key: 'dining', label: 'Dining Reservation' },
                      { key: 'accessibility', label: 'Accessibility Requirements' },
                    ].map((pref) => (
                      <label key={pref.key} className="flex items-center justify-between cursor-pointer py-3 border-b border-borders">
                        <span className="font-sans text-base text-primary-text">{pref.label}</span>
                        <input
                          type="checkbox"
                          checked={(data as any)[pref.key]}
                          onChange={(e) => update({ [pref.key]: e.target.checked } as any)}
                          className="w-4 h-4 accent-primary-accent"
                        />
                      </label>
                    ))}
                    <div>
                      <Label className="mb-2 block">Celebration or Special Occasion?</Label>
                      <input type="text" value={data.celebration} onChange={(e) => update({ celebration: e.target.value })}
                        placeholder="Anniversary, Birthday, Honeymoon..."
                        className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="mt-12 flex gap-4">
                    <Button onClick={prev} variant="text">Back</Button>
                    <Button onClick={next} variant="outline">Continue</Button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Guest Information */}
              {step === 5 && (
                <motion.div key="step5" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Label className="mb-8 block text-lg">Step 5 — Guest Information</Label>
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label className="mb-2 block">First Name</Label>
                        <input type="text" value={data.firstName} onChange={(e) => update({ firstName: e.target.value })}
                          className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                      </div>
                      <div>
                        <Label className="mb-2 block">Last Name</Label>
                        <input type="text" value={data.lastName} onChange={(e) => update({ lastName: e.target.value })}
                          className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <Label className="mb-2 block">Email</Label>
                      <input type="email" value={data.email} onChange={(e) => update({ email: e.target.value })}
                        className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <Label className="mb-2 block">Phone</Label>
                      <input type="tel" value={data.phone} onChange={(e) => update({ phone: e.target.value })}
                        className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <Label className="mb-2 block">Special Requests</Label>
                      <textarea value={data.specialRequests} onChange={(e) => update({ specialRequests: e.target.value })}
                        rows={3}
                        className="w-full bg-transparent border-b border-borders pb-2 font-sans text-base text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300 resize-none" />
                    </div>
                  </div>
                  <div className="mt-12 flex gap-4">
                    <Button onClick={prev} variant="text">Back</Button>
                    <Button onClick={next} variant="outline">Review Inquiry</Button>
                  </div>
                </motion.div>
              )}

              {/* Step 6: Confirmation */}
              {step === 6 && (
                <motion.div key="step6" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Label className="mb-8 block text-lg">Step 6 — Confirmation</Label>
                  <div className="space-y-6 p-8 bg-cards border border-borders">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-sans text-xs uppercase tracking-[0.04em] text-secondary-text">Arrival</span>
                        <span className="font-sans text-sm text-primary-text">{data.arrival || '—'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans text-xs uppercase tracking-[0.04em] text-secondary-text">Departure</span>
                        <span className="font-sans text-sm text-primary-text">{data.departure || '—'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans text-xs uppercase tracking-[0.04em] text-secondary-text">Guests</span>
                        <span className="font-sans text-sm text-primary-text">{data.guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans text-xs uppercase tracking-[0.04em] text-secondary-text">Suite</span>
                        <span className="font-sans text-sm text-primary-text">{suites.find(s => s.value === data.suite)?.label || '—'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans text-xs uppercase tracking-[0.04em] text-secondary-text">Name</span>
                        <span className="font-sans text-sm text-primary-text">{data.firstName} {data.lastName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Text className="mb-4">
                      This is a non-binding inquiry. Our concierge team will review your request 
                      and respond within 24 hours to confirm availability and discuss details.
                    </Text>
                    <p className="font-sans text-xs text-secondary-text mb-8">
                      No payment is collected at this stage.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button onClick={prev} variant="text">Back</Button>
                    <Button onClick={() => alert('Inquiry submitted — we will be in touch soon.')} variant="outline">
                      Submit Inquiry
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}