'use client';
import React, { useRef } from 'react';
import ClientStory from './ClientStory';
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
  const sliderRef = useRef<SliderWithRef>(null);

  const settings: Settings = {
    dots: false,
    infinite: false,
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

  return (
    <section className="grid grid-cols-2">
        <div className="relative bg-gold h-[900px] col-span-1">
            <div className="absolute right-0 w-[15%] h-full bg-white"></div>
            <img src="/client-story-image.jpg" alt="" className="absolute w-[80%] top-1/2 transform -translate-y-1/2 -right-0 h-[500px] object-cover"/>
        </div>

        <div className="flex flex-col col-span-1">
        
            
            <Slider {...settings} ref={sliderRef} className="w-4/5 mx-auto pt-[114px]">
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
                <img src="/carousel-arrow-left.jpg" className=" w-[55px] h-[55px] cursor-pointer" onClick={handlePrev}/>
                <img src="/carousel-arrow-right.jpg" className=" w-[55px] h-[55px] cursor-pointer" onClick={handleNext}/>
              </div>
    </div>
    </section>

    
  );
};

export default ClientStories;

// {services.map((service, index) => (<ServiceCard title={service.title} imageUrl={service.imageUrl} description={service.description} func={service.func} />}