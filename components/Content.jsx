"use client";
import React from 'react';
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import {statData} from "../constance/constance.js"



const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const increment = value / (duration / 16);

          const update = () => {
            start += increment;
            if (start < value) {
              setCount(Math.floor(start));
              requestAnimationFrame(update);
            } else {
              setCount(value);
            }
          };
          update();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
};

const ContentSection = () => {


  return (
    <section className=" bg-white h-[100vh]">
      <div className="max-w-7xl mx-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-2 items-center py-10">
        
      {/* Left Content */}
        <div className=' '>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
            Experience the Beauty of Sri Lanka
          </h2>

           <p className="mt-6 text-gray-600 leading-relaxed text-md ">
            University student content focuses on authentic, engaging, and relatable narratives about college life, study tips, and personal development. Popular formats include studygrams, vlogs, and blogs covering topics like productivity, campus experiences, and student hacks. This content, often created by students for peers, helps build a personal brand, document personal journeys, and provide valuable insights into university life. 
          </p>
          <ul className="text-sm text-gray-600 mt-4  ">
            <li className='py-2 '>Study Tips & Productivity: Content showing study sessions (studygrams), note-taking methods, time management techniques, and academic hacks to succeed.</li>
            <li className='py-2'>
              Vlogs & Lifestyle: "Day in the Life" videos, dorm tours, campus, meal prep for students, and navigating social life, which often perform well on social media.
            </li>
            
          </ul>


          <button className="mt-8 inline-flex items-center px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition">
            Read More
          </button>
        </div>

      {/* Right Image */}
        <div className="relative w-full h-[350] md:h-[420] rounded-sm overflow-hidden shadow-lg mx-20">
          <Image
            src="/images/univercity.jpg"
            alt="Sri Lanka"
            fill
            className="object-cover"
          />
        </div>

      </div>
       <div className="h-50 w-full bg-gray-200">
        {/* Title */}
        <div className="flex items-center gap-4 mb-10  mx-20 py-4 g-amber-400 ">
          <span className="text-sm uppercase tracking-widest text-gray-500 py">
            Our Target
          </span>
          <span className="h-[2px] w-16 bg-red-500"></span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center  mx-10 ">
          {statData.map((item, index) => (
            <div key={index}>
              <h2 className="text-4xl md:text-5xl font-bold text-red-600">
                <Counter value={item.value} />
              </h2>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
