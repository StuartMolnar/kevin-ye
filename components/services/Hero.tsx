import Image from 'next/image';
import { smoothScrollTo } from '@/utils/scrollUtils';
import React, { useContext } from 'react';
import BlurhashContext from '@/contexts/BlurhashContext';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  programTitle: string;
  programDescription: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, imageAlt, programTitle, programDescription }) => {
  
  const blurhashMap = useContext(BlurhashContext);
  const blurhash = blurhashMap[imageSrc];

  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:w-3/5 md:max-h-[100vw] lg:max-h-[40vw]">
        <Image 
            src={imageSrc} 
            alt={imageAlt} 
            layout="responsive"
            width={694}
            height={1041}
            className="object-cover w-full h-full"
            placeholder={blurhash ? "blur" : undefined}
            blurDataURL={blurhash ? `data:image/svg+xml;base64,${blurhash}` : undefined}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:max-w-[900px] px-[20px] md:px-20 pt-10 md:pt-0">
          <p className="font-medium text-header-sub md:text-header-sub-dsk text-gold">
            {programTitle}
          </p>
          <h1 className="pt-3 font-bold text-h1 md:text-h1-dsk">Become stronger, fitter, and more confident</h1>
          <div className="flex pt-3">
              <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
              <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
          </div>
          <p className="pt-10">
            {programDescription}
          </p>
          <div onClick={() => smoothScrollTo('program-highlights-section')} className="hidden md:block border border-black font-medium rounded-[2.5px] py-[15px] px-[30px] w-[150px] text-center mt-10 cursor-pointer hover:bg-black hover:text-white">Read More</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
