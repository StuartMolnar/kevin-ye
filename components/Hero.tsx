import React, { } from 'react';
import Image from 'next/image';

const Hero = () => {
    
    const smoothScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
        });
    };

  return (
    <section id="hero-section" className="relative flex mx-[20px] md:mx-[60px] xl:mx-[200px]">
          <div className="z-10 flex flex-col">
            <div>
              <p className="font-bold text-hero md:text-hero-dsk">Transformation Coach</p>
              <p className="font-bold text-hero md:text-hero-dsk">Personal Trainer</p>
              <p className="font-bold text-hero md:text-hero-dsk">Powerlifting Expert</p>
            </div>

            <div className="flex pt-[18px] md:pt-10">
              <img src="/hero-bar-gold.svg" alt="" className="w-[115px] md:w-64 h-[5px] md:h-3 -ml-1" />
              <img src="/hero-bar-black.svg" alt="" className="w-[115px] md:w-64 h-[5px] md:h-3 -ml-2" />
            </div>

            <div className="pt-[24px] md:pt-10">
              <p className="font-medium text-hero-sub md:text-hero-sub-dsk max-w-112">
                I help individuals unlock their true potential and overcome limitations set in their mind.
              </p>
            </div>
              
            <div className="flex flex-col pt-[24px] md:pt-10 space-y-[18px] md:space-x-5 md:flex-row md:space-y-0">
              <div className="flex space-x-5">
                <a href="https://www.youtube.com/channel/UC_gOew52b0yIK8i7SelGwSA" target="_blank" className="">
                  <img src="/youtube.svg" alt="" className="w-14 h-14" />
                </a>
                <a href="https://www.instagram.com/ye_kev/" target="_blank" className="">
                  <img src="/insta.svg" alt="" className="w-14 h-14" />
                </a>
                <a href="https://www.tiktok.com/@fitbykev" target="_blank" className="">
                  <img src="/tiktok.svg" alt="" className="w-14 h-14" />
                </a>
              </div>              
              <div onClick={() => smoothScrollTo('services-section')} className="h-14 max-w-[320px] p-4 font-medium flex items-center justify-center border-black hover:bg-black hover:text-white border-[1.5px] rounded-[2.5px] cursor-pointer">
                  View My Fitness Programs
              </div>
            </div>
          </div>

          <div className="absolute hidden xl:block right-0 customHeroLogo:left-[60%] transition-all duration-200 ease-in-out">
            <Image 
              src="/kevin-ye-logo-hero.svg" 
              alt=""
              layout="intrinsic"
              width={622}
              height={632}
            />
          </div>
        </section>

    
  );
};

export default Hero

