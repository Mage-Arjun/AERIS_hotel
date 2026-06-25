'use client';

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LoadingScreen } from './LoadingScreen';
import { CustomCursor } from './CustomCursor';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}