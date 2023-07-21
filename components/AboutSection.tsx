import React, { } from 'react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const AboutSection = () => {

    const containerRef = useRef<HTMLDivElement>(null);
  
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      if (containerRef.current) {
          setDimensions({
              width: containerRef.current.offsetWidth,
              height: containerRef.current.offsetHeight
          });
      }
    }, []);

  return (
    <section className="flex flex-col mt-16 md:flex-row md:mt-32">
          <div ref={containerRef} className='flex-1 h-[400px] md:h-auto relative'>
              <Image
                  src="/about-image.jpg"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
              />
          </div>

          <div id="about-section" className="flex flex-1 flex-col justify-center ml-0 md:p-[60px] xl:p-[200px] pt-[40px] px-[20px] transition-all duration-200 ease-in-out">
              <h1 className="font-bold text-h1 md:text-h1-dsk">
                About Kevin Ye
              </h1>
              <div className="hidden pt-3 md:flex">
                <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <div className="md:hidden flex pt-[18px] ">
                <img src="/hero-bar-gold.svg" alt="" className="w-[73px]  h-[5px]" />
                <img src="/hero-bar-black.svg" alt="" className="w-[73px] h-[5px] ml-1" />
              </div>
              <p className="mt-[24px] md:mt-10 mb-[40px] md:mb-16 max-h-[450px] md:max-h-[10000px] overflow-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat.
              </p>
            </div>
        </section>
    
  );
};

export default AboutSection

