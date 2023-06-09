'use client';
import React, {  } from 'react';
import ServiceCard from './ServiceCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { ArrowLeft, ArrowRight } from './CarouselArrows';

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

const responsive = {
    desktop: { breakpoint: { max: 4000, min: 1450 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1450, min: 768 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };
  
const ServicesCarousel = () => {
    return (
        <section className='flex flex-col justify-center pt-[118px]'>
            <div className="flex flex-col text-center">
                <h1 className="font-bold text-h1">
                    Ready to make a change?
                </h1>
                <p className="font-medium">
                    Join me in unlocking your potential and taking your fitness and performance to new heights.
                </p>
            </div>
            <div className="relative pt-[90px] px-[200px]">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={false}
                    autoPlay={false}
                    keyBoardControl={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile"]}
                    deviceType="desktop"
                    customLeftArrow={<ArrowLeft />}
                    customRightArrow={<ArrowRight />}
                    arrows={true}
                >
                {services.map((service) => (
                    <ServiceCard
                    key={service.title}
                    title={service.title}
                    imageUrl={service.imageUrl}
                    description={service.description}
                    func={service.func}
                    />
                ))}
                </Carousel>
            </div>

        </section>
    );
  };
  
  export default ServicesCarousel;