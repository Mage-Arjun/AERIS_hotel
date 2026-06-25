'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Suites', href: '/suites' },
  { label: 'Dining', href: '/dining' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Wellness', href: '/wellness' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  if (!mounted) return null;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-gradient-to-b from-black/15 to-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="content-width">
          <div className="flex items-center justify-between h-20 md:h-24 pt-3 md:pt-5">
            {/* Logo - left */}
            <motion.a
              href="/"
              className={
                'font-serif text-2xl md:text-3xl tracking-[0.06em] text-primary-text transition-colors duration-500 flex-shrink-0'
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              AERIS
            </motion.a>

            {/* Desktop nav - centered */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-0.5 mx-8">
              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative group px-4 py-2 font-sans text-sm uppercase tracking-[0.08em] transition-all duration-300',
                      isActive
                        ? 'text-primary-accent'
                        : isScrolled
                          ? 'text-primary-text/85 hover:text-primary-text'
                          : 'text-primary-text/80 hover:text-primary-text'
                    )}
                  >
                    {item.label}
                    {/* Active indicator */}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-4 right-4 h-[1.5px] bg-primary-accent transition-all duration-300 origin-center',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />
                  </a>
                );
              })}
            </div>

            {/* Reserve CTA - right */}
            <div className="hidden md:block flex-shrink-0">
              <a
                href="/reserve"
                className={cn(
                  'inline-block font-sans text-sm uppercase tracking-[0.08em] font-medium px-5 py-2 rounded-sm',
                  'border transition-all duration-300',
                    isScrolled
                    ? 'border-primary-accent/60 text-primary-accent hover:bg-primary-accent hover:text-white'
                    : 'border-primary-text/40 text-primary-text hover:bg-primary-text hover:text-white'
                )}
              >
                Reserve
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              <motion.span
                className={cn(
                  'block w-6 h-px transition-colors duration-300',
                  'bg-primary-text'
                )}
                animate={isMobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-px bg-primary-text"
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-px bg-primary-text"
                animate={isMobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav className="flex flex-col items-center gap-10" aria-label="Mobile navigation">
              {navItems.map((item, index) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'font-serif text-3xl md:text-4xl transition-colors duration-300 relative',
                      isActive
                        ? 'text-primary-accent'
                        : 'text-primary-text hover:text-primary-accent'
                    )}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-primary-accent"
                        layoutId="mobileActiveIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                );
              })}
              <motion.a
                href="/reserve"
                className="mt-6 font-sans text-sm uppercase tracking-[0.08em] border border-primary-accent/50 px-6 py-3 rounded-sm text-primary-accent hover:bg-primary-accent hover:text-white transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navItems.length * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onClick={() => setIsMobileOpen(false)}
              >
                Reserve
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}