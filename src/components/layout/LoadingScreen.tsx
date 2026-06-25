'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              },
            }}
          >
            <span className="font-serif text-3xl md:text-4xl text-primary-text tracking-tight">
              AERIS
            </span>
            <motion.div
              className="mt-4 mx-auto h-px bg-primary-accent/50"
              initial={{ width: 0 }}
              animate={{
                width: 40,
                transition: {
                  duration: 1.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.3,
                },
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}