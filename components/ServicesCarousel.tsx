'use client';
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { useTransition, animated } from 'react-spring';

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
  
const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(oldIndex => oldIndex - 1);  // Go to previous item
    }
  };

  const goToRight = () => {
    if (currentIndex < services.length - 3) {
      setCurrentIndex(oldIndex => oldIndex + 1);  // Go to next item
    }
  };

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
        <div className="flex items-center justify-between w-full">
            <button 
                onClick={goToLeft} 
                disabled={currentIndex === 0}
                className={`px-4 py-2 rounded-md ${currentIndex === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                Previous
            </button>
            <div className="flex mx-10">
                {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                    <ServiceCard 
                        key={index}
                        title={service.title} 
                        imageUrl={service.imageUrl} 
                        description={service.description} 
                        func={service.func} 
                    />
                ))}
            </div>
            <button 
                onClick={goToRight} 
                disabled={currentIndex === services.length - 3}
                className={`px-4 py-2 rounded-md ${currentIndex === services.length - 3 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                Next
            </button>
        </div>
    </section>
  );
};

export default ServicesCarousel;

// {services.map((service, index) => (<ServiceCard title={service.title} imageUrl={service.imageUrl} description={service.description} func={service.func} />}