import Hero from '@/components/Hero';
import React from 'react';
import Content from '@/app/contact/page';
import Courses from '@/app/courses/page';
import Gallery from '@/app/gallery/page';
import About from '@/app/about/page';
import News from '@/app/news/page';


export default function Home() {
  return (
    <main>
      <Hero />
      <Content/>
      <Courses/>
      <Gallery/>
      <About/>
      <News/>
    </main>
  );
}
