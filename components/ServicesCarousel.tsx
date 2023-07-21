'use client';
import React, { useRef, useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import useWindowWidth from '@/hooks/useWindowWidth';
import CarouselArrow from './CarouselArrow';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
    {
      title: 'Strength Training',
      imageUrl: '/strength-training.jpg',
      description: 'My strength training program is designed to help individuals of all fitness levels build strength, increase muscle mass, and achieve their goals. With personalized training plans, expert guidance, emphasis on proper technique, and a focus on progress tracking, I provide a comprehensive and supportive environment for your strength training journey.',
      link: '/strength-training'
    },
    {
      title: 'Conditional Training',
      imageUrl: '/conditional-training.jpg',
      description: 'My conditioning training program is tailored to help individuals of all fitness levels improve their overall fitness, enhance athletic performance, and boost endurance. With personalized plans targeting cardiovascular endurance, strength, agility, and flexibility, my dynamic workouts and expert coaching will guide you towards achieving your conditioning goals.',
      link: '/conditional-training'
    },
    {
      title: 'Weight Loss',
      imageUrl: '/placeholder.jpg',
      description: 'My weight loss program is designed to help individuals like you shed unwanted body fat and achieve sustainable, long-term results. Unlike quick-fix solutions and fad diets, my comprehensive program focuses on creating healthy habits, adopting a balanced approach to nutrition, and incorporating effective exercise strategies.',
      link: '/weight-loss' 
    },
];

interface SliderWithRef extends Slider {
  slickNext: () => void;
  slickPrev: () => void;
}

const breakpoint_large = 1850;
const breakpoint_medium = 1275;

const responsive = [
  {
    breakpoint: breakpoint_large,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: breakpoint_medium,
    settings: {
      slidesToShow: 1
    }
  }
]

const ServicesCarousel = () => {
  /* ----- Carousel Slider ----- */
  const windowWidth = useWindowWidth();
  const sliderRef = useRef<SliderWithRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // update slidesToShow based on window size
  let slidesToShow;
    if (windowWidth < breakpoint_medium) {
      slidesToShow = 1;
    } else if (windowWidth < breakpoint_large) {
      slidesToShow = 2;
    } else {
      slidesToShow = 3;
    }

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <div style={{display: "none"}} />,
    prevArrow: <div style={{display: "none"}} />,
    dotsClass: "my-slick-dots slick-dots",
    afterChange: (current) => setCurrentSlide(current),
    responsive: responsive,
    slide: 'div',
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section id="services-section" >
      <div className='relative flex flex-col items-center justify-center mt-10 md:mt-[118px]'>
        <div className="flex flex-col px-5 text-center">
            <h1 className="font-bold text-h1 md:text-h1-dsk">
                Ready to make a change?
            </h1>
            <p className="font-medium text-header-sub md:text-header-sub-dsk pt-[24px] md:pt-[28px]">
                Join me in unlocking your potential and taking your fitness and performance to new heights.
            </p>
        </div>
      </div>

      <div className='relative flex pt-[40px] mx-auto md:pt-[90px] max-w-[2000px]'>    
        <div className={currentSlide === 0 ? "hidden" : "hidden md:block z-30 absolute left-16 top-1/2 transform -translate-y-1/2"}>
          <CarouselArrow initialSrc="/carousel-arrow-left.svg" hoverSrc="/carousel-arrow-left-hover.svg" onClick={handlePrev}/>
        </div>    
        
        <Slider {...settings} ref={sliderRef} className="w-full mx-auto md:w-4/5 max-w-[1850px] service-carousel">
          {services.map((service, index) => (
              <div key={index} className="">
                  <ServiceCard 
                      title={service.title} 
                      imageUrl={service.imageUrl} 
                      description={service.description} 
                      link={service.link} 
                  />
              </div>
          ))}
        </Slider>
        
        <div className={currentSlide + slidesToShow >= services.length ? "hidden" : "hidden md:block z-30 absolute right-16 top-1/2 transform -translate-y-1/2"}>
          <CarouselArrow initialSrc="/carousel-arrow-right.svg" hoverSrc="/carousel-arrow-right-hover.svg" onClick={handleNext}/>
        </div>
      </div>
    </section>

  );
};

export default ServicesCarousel;
