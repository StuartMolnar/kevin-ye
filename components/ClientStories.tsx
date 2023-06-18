'use client';
import React, { useRef, useState } from 'react';
import ClientStory from './ClientStory';
import CarouselArrow from './CarouselArrow';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
    {'title': 'Strength Training',
     'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat. \\p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat."},
     {'title': 'Cardio Training',
     'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat. \\p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. Quisque ac est eu nunc commodo molestie id at dui. Aenean egestas tellus ante, ut maximus nunc luctus eget. Sed tincidunt id tortor quis venenatis. Suspendisse rutrum accumsan congue. Proin pharetra tincidunt enim, et fringilla leo interdum in. Cras eget magna egestas, semper felis facilisis, volutpat nisi. Donec ex massa, semper eu urna at, bibendum dapibus nulla. Sed tristique dignissim feugiat."},
];

interface SliderWithRef extends Slider {
  slickNext: () => void;
  slickPrev: () => void;
}

const ClientStories = () => {
  /* ----- Carousel Slider ----- */
  const sliderRef = useRef<SliderWithRef>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div></div>,
    prevArrow: <div></div>,
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  /* ----- Arrow Hover Effect ----- */
  const [leftArrowSrc, setLeftArrowSrc] = useState("/carousel-arrow-left.svg");
  const [rightArrowSrc, setRightArrowSrc] = useState("/carousel-arrow-right.svg");

  const handleMouseEnterLeft = () => {
    setLeftArrowSrc("/carousel-arrow-left-hover.svg");
  };

  const handleMouseLeaveLeft = () => {
    setLeftArrowSrc("/carousel-arrow-left.svg");
  };

  const handleMouseEnterRight = () => {
    setRightArrowSrc("/carousel-arrow-right-hover.svg");
  };

  const handleMouseLeaveRight = () => {
    setRightArrowSrc("/carousel-arrow-right.svg");
  };

  return (
    <section id="client-stories-section" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block relative bg-gold h-[900px] col-span-1">
          <div className="absolute right-0 w-[15%] h-full bg-white"></div>
          <img src="/client-story-image.jpg" alt="" className="absolute w-[80%] top-1/2 transform -translate-y-1/2 -right-0 h-[500px] object-cover"/>
      </div>

      
      <div className="lg:hidden relative bg-gold h-[400px] md:h-[650px] col-span-1">
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-[15%] bg-white"></div>
        <img src="/client-story-image.jpg" alt="" className="absolute max-w-[80vw] left-1/2 transform -translate-x-1/2 bottom-0 h-[300px] md:h-[500px] object-cover"/>
      </div>

      <div className="flex flex-col col-span-1">
      
          
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

// {services.map((service, index) => (<ServiceCard title={service.title} imageUrl={service.imageUrl} description={service.description} func={service.func} />}