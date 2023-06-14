'use client';
import React, { useRef, useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
    {
      title: 'Strength Training',
      imageUrl: '/strength-training.jpg',
      description: 'My strength training program is designed to help individuals of all fitness levels build strength, increase muscle mass, and achieve their goals. With personalized training plans, expert guidance, emphasis on proper technique, and a focus on progress tracking, I provide a comprehensive and supportive environment for your strength training journey.',
      func: () => { console.log("Function for service 1"); }  
    },
    {
      title: 'Conditional Training',
      imageUrl: '/conditional-training.jpg',
      description: 'My conditioning training program is tailored to help individuals of all fitness levels improve their overall fitness, enhance athletic performance, and boost endurance. With personalized plans targeting cardiovascular endurance, strength, agility, and flexibility, my dynamic workouts and expert coaching will guide you towards achieving your conditioning goals.',
      func: () => { console.log("Function for service 2"); }  
    },
    {
      title: 'Placeholder1',
      imageUrl: '/placeholder.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. ',
      func: () => { console.log("Function for service 3"); }  
    },
    {
      title: 'Placeholder2',
      imageUrl: '/placeholder.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt scelerisque. Suspendisse potenti. Sed sed porttitor lacus. Nunc et ante id purus maximus rhoncus. ',
      func: () => { console.log("Function for service 4"); }  
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
  const sliderRef = useRef<SliderWithRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // default slidesToShow

  // Update slidesToShow based on window size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < breakpoint_medium) {
        setSlidesToShow(1);
      } else if (window.innerWidth < breakpoint_large) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', updateSlidesToShow);
    updateSlidesToShow();  // Initial call

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div></div>,
    prevArrow: <div></div>,
    dotsClass: "my-slick-dots slick-dots",
    afterChange: (current) => setCurrentSlide(current),
    responsive: responsive,
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section id="services-section" >
      <div className='relative flex flex-col items-center justify-center pt-[118px]'>
        <div className="flex flex-col text-center">
            <h1 className="font-bold text-h1">
                Ready to make a change?
            </h1>
            <p className="font-medium text-header-sub pt-[28px]">
                Join me in unlocking your potential and taking your fitness and performance to new heights.
            </p>
        </div>
      </div>

      <div className='relative flex pt-[90px]'>        
        <img src="/carousel-arrow-left.jpg" className={currentSlide === 0 ? "hidden" : "hidden md:block absolute w-[55px] h-[55px] left-16 top-1/2 transform -translate-y-1/2 cursor-pointer"} onClick={handlePrev}/>

        <Slider {...settings} ref={sliderRef} className="w-4/5 mx-auto">
          {services.map((service, index) => (
              <div key={index} className="flex items-center justify-center">
                  <ServiceCard 
                      title={service.title} 
                      imageUrl={service.imageUrl} 
                      description={service.description} 
                      func={service.func} 
                  />
              </div>
          ))}
        </Slider>
        
        <img src="/carousel-arrow-right.jpg" className={currentSlide + slidesToShow >= services.length ? "hidden" : "hidden md:block absolute w-[55px] h-[55px] right-16 top-1/2 transform -translate-y-1/2 cursor-pointer"} onClick={handleNext}/>
      </div>
    </section>

  );
};

export default ServicesCarousel;
