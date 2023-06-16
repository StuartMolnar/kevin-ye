'use client';
import Hamburger from 'hamburger-react'
import React, { } from 'react';

const Hero = () => {
    
    const smoothScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
        });
    };

  return (
    <section id="hero-section" className="relative flex mx-[200px]">
          <div className="z-10 flex flex-col">
            <div>
              <p className="text-hero font-heavy">Transformation Coach</p>
              <p className="text-hero font-heavy">Personal Trainer</p>
              <p className="text-hero font-heavy">Powerlifting Expert</p>
            </div>

            <div className="flex pt-10">
              <img src="/hero-bar-gold.svg" alt="" className="w-64 h-3" />
              <img src="/hero-bar-black.svg" alt="" className="w-64 h-3 -ml-2" />
            </div>

            <div className="pt-10">
              <p className="font-medium text-hero-sub max-w-112">
                I help individuals unlock their true potential and overcome limitations set in their mind.
              </p>
            </div>
              
            <div className="flex pt-10 space-x-5">
              <a href="" className="">
                <img src="/linkedin.svg" alt="" className="w-14 h-14" />
              </a>
              <a href="" className="">
                <img src="/insta.svg" alt="" className="w-14 h-14" />
              </a>
              <a href="" className="">
                <img src="/tiktok.svg" alt="" className="w-14 h-14" />
              </a>
            <div onClick={() => smoothScrollTo('services-section')} className="h-14 p-4 font-medium flex items-center justify-center border-black border-[1.5px] rounded-[2.5px]">
                View My Fitness Programs
            </div>
            </div>
          </div>

          <div className="absolute right-0 customHeroLogo:left-[50%] transition-all duration-200 ease-in-out">
            <img src="/kevin-ye-logo-hero.svg" alt="" className="min-w-[622px] min-h-[632px]"/>
          </div>
        </section>

    
  );
};

export default Hero

