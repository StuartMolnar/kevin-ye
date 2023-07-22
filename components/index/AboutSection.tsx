import Image from 'next/image';
import React, { useRef, useEffect, useState, useContext } from 'react';
import BlurhashContext from '@/contexts/BlurhashContext';

const AboutSection = () => {

  const blurhashMap = useContext(BlurhashContext);

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
                  src="/about-image.webp"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                  placeholder={blurhashMap["about-image.webp"] ? "blur" : undefined}
                  blurDataURL={blurhashMap["about-image.webp"] ? `data:image/svg+xml;base64,${blurhashMap["about-image.webp"]}` : undefined}
              />
          </div>

          <div id="about-section" className="flex flex-1 flex-col justify-center ml-0 md:p-[60px] xl:p-[200px] pt-[40px] px-[20px] transition-all duration-200 ease-in-out">
              <h1 className="font-bold text-h1 md:text-h1-dsk">
                About Kevin Ye
              </h1>
              <div className="hidden pt-3 md:flex">
                <img src="/about-bar-gold.svg" alt="" className="w-24 h-3 -ml-1" />
                <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <div className="md:hidden flex pt-[18px] ">
                <img src="/hero-bar-gold.svg" alt="" className="w-[73px]  h-[5px]" />
                <img src="/hero-bar-black.svg" alt="" className="w-[73px] h-[5px] ml-1" />
              </div>
              <div className="flex-row mt-[24px] md:mt-10 mb-[40px] md:mb-16 max-h-[450px] md:max-h-[10000px] overflow-auto space-y-4">
                <p className="">
                My name is Kevin Ye and I am a Fitness Coach with a background in Personal Training and Swim Coaching.  
                </p>
                
                <p className="">
                I specialize in helping people discover their passion for fitness. I believe everyone goes to the gym for their own unique reasons. However the most important part to anyone’s journey is consistency.
                </p>
                
                <p className="">
                You’re not going to make progress if you’re injured every couple months from poor programming and weight management. What about following an unsustainable diet plan hoping to lose as much weight as possible just to regain everything back and suffer from starvation for no reason?
                </p>
                
                <p className="">
                Sound too familiar? Don’t worry, I’ve been there too. 
                </p>
                
                <p className="">
                That’s why through my proven methods, I am able to deliver my clients the most optimal training plan that is suitable solely for their level of efficacy and commitment. 
                </p>
                
                <p className="">
                I will help develop the right program catered just for you, and keep you accountable throughout the entire journey. 
                </p>

              </div>
            </div>
        </section>
    
  );
};

export default AboutSection

