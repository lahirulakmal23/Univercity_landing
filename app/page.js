import Hero from '@/components/Hero';
import React from 'react';
import Content from '@/components/Content';
import Courses from '@/components/courses'
import Gallery from '@/components/Gallery'
import About from '@/components/About';


export default function Home() {
  return (
    <main>
      <Hero />
      <Content/>
      <Courses/>
      <Gallery/>
      <About/>
    </main>
  );
}
