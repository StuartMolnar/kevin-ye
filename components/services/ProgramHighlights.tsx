'use client';
import React from 'react';
import useWindowWidth from '@/hooks/useWindowWidth';
import { smoothScrollTo } from '@/utils/scrollUtils';
import { Fade } from 'react-awesome-reveal';

type ProgramCardProps = {
  item: {
    icon: string,
    title: string,
    description: string,
  }
};

type ProgramHighlightProps = {
  items: {
    icon: string,
    title: string,
    description: string,
  }[],
};

const ProgramCard: React.FC<ProgramCardProps> = ({ item}) => {
  const windowWidth = useWindowWidth() || 0;
  const isMediumScreen = windowWidth >= 768;

  const cardContent = (
    <div className="flex flex-col h-full col-span-1 p-10 pt-10 shadow-custom md:pt-10">
      <img src={item.icon} alt="" className="w-[26px] h-[29px]" />
      <p className="font-medium text-header-sub md:text-header-sub-dsk pt-[22px]">{item.title}</p>
      {isMediumScreen ? (
        <p className="pt-[18px] md:block">{item.description}</p>
      ) : (
        <details className="overflow-hidden pt-[18px]">
          <summary className="cursor-pointer select-none text-gold md:hidden">
            Read More
          </summary>
          <p className="pt-[18px]">{item.description}</p>
        </details>
      )}
    </div>
  );

  return <Fade>{cardContent}</Fade>;
};

const ProgramHighlights = ({ items }: ProgramHighlightProps) => {

  return (
    <section id="program-highlights-section" className="flex flex-col items-center pt-10 md:pt-[90px] mx-[20px] md:mx-[60px] xl:mx-[200px]">
      <h1 className="font-bold text-h1 md:text-h1-dsk">Program Highlights</h1>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 max-w-[1500px] pt-[60px] md:gap-10 gap-y-5">
        {items.map((item, index) => (
          <ProgramCard key={index} item={item} />
        ))}
        <div className="flex flex-col col-span-1 p-10 bg-gold md:rounded-[2.5px] shadow-custom">
          <div className="flex items-center">
            <img src="/services/upward-arrow-icon.svg" alt="" className="w-[35px] h-[35px] mr-[18px]" />
            <h2 className="font-bold text-h2 md:text-h2-dsk">
              Get Started Now
            </h2>
          </div>
          <p className="pt-[24px]">
            Join my program and embark on a journey towards a stronger, healthier, and more confident you.
          </p>
          <div onClick={() => smoothScrollTo('contact-section')} className="inline-block font-medium border-black border rounded-[2.5px] py-[15px] px-[30px] max-w-[160px] cursor-pointer mt-[30px] hover:text-white hover:bg-black">
            Get In Touch
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramHighlights;
