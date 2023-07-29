'use client';
import React, { useRef } from 'react';
import ClientStory from './ClientStory';
import CarouselArrow from './CarouselArrow';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import _blurhashMap from "@/public/blurhash_map.json";

const blurhashMap: { [key: string]: string | undefined } = _blurhashMap;

const clients = [
    {'title': 'Client Stories',
     'description': "Coming soon..."},
     {'title': 'Client Stories',
     'description': "Coming soon..."},
];

interface SliderWithRef extends Slider {
  slickNext: () => void;
  slickPrev: () => void;
}

const ClientStories = () => {
  const sliderRef = useRef<SliderWithRef>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-16 md:mt-[170px]">
      <div className="hidden lg:block relative bg-gold h-[900px] col-span-1">
          <div className="absolute right-0 w-[15%] h-full bg-white"></div>
          <div className="absolute w-[80%] top-1/2 transform -translate-y-1/2 -right-0 h-[500px]">
              <Image 
                  src="/client-story-image.webp" 
                  alt="Client story" 
                  layout="fill" 
                  objectFit="cover"
                  placeholder={blurhashMap["client-story-image.webp"] ? "blur" : undefined}
                  blurDataURL={blurhashMap["client-story-image.webp"] ? `data:image/svg+xml;base64,${blurhashMap["client-story-image.webp"]}` : undefined}
              />
          </div>
      </div>

      
      <div className="lg:hidden relative bg-gold h-[400px] md:h-[650px] border-none col-span-1">
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-[15%] bg-white"></div>
        <img src="/client-story-image.webp" alt="" className="absolute max-w-[80vw] left-1/2 transform -translate-x-1/2 bottom-0 h-[300px] md:h-[500px] object-cover"/>
      </div>

      <div id="client-stories-section" className="flex flex-col col-span-1">
      
          
          <Slider {...settings} ref={sliderRef} className="w-4/5 mx-auto pt-[40px] md:pt-[80px] lg:pt-[114px]">
          {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                  <ClientStory
                      title={client.title} 
                      description={client.description} 
                  />
              </div>
          ))}
          </Slider>
          <div className="flex w-4/5 mx-auto pt-[26px] space-x-4">
            <CarouselArrow initialSrc="/carousel-arrow-left.svg"  hoverSrc="/carousel-arrow-left-hover.svg" onClick={handlePrev}/>
            <CarouselArrow  initialSrc="/carousel-arrow-right.svg" hoverSrc="/carousel-arrow-right-hover.svg" onClick={handleNext}/>
          </div>
      </div>
    </section>

    
  );
};

export default ClientStories;