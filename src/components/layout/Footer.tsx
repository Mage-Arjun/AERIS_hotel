import React from 'react';
import { Label } from '@/components/ui/Typography';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Suites', href: '/suites' },
    { label: 'Dining', href: '/dining' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Wellness', href: '/wellness' },
    { label: 'Journal', href: '/journal' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary-bg border-t border-borders" role="contentinfo">
      <div className="content-width py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="/" className="font-serif text-2xl text-primary-text">
              AERIS
            </a>
            <p className="font-sans text-sm leading-relaxed text-secondary-text max-w-xs">
              Where Light Finds You.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <Label>Navigation</Label>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {footerLinks.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-secondary-text hover:text-primary-text transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Label>Contact</Label>
              <div className="space-y-2">
                <p className="font-sans text-sm text-secondary-text">
                  hello@aeris.com
                </p>
                <p className="font-sans text-sm text-secondary-text">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Follow Us</Label>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-secondary-text hover:text-primary-text transition-colors duration-300"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-secondary-text hover:text-primary-text transition-colors duration-300"
                  aria-label="Pinterest"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-borders flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-secondary-text">
            &copy; {new Date().getFullYear()} AERIS. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs text-secondary-text hover:text-primary-text transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}