import React from 'react';

type ArrowProps = {
  onClick?: React.MouseEventHandler;
  carouselState?: {
    currentSlide: number;
    deviceType: string;
  };
  onMove?: () => void;
};

export const ArrowRight: React.FC<ArrowProps> = ({ onClick, carouselState }) => {
  return (
    <img
      src="/carousel-arrow-right.jpg"
      className="w-[55px] h-[55px] absolute top-1/2 right-4 cursor-pointer z-50"
      onClick={onClick}
    />
  );
};

export const ArrowLeft: React.FC<ArrowProps> = ({ onClick, carouselState }) => {
  return (
    <img
      src="/carousel-arrow-left.jpg"
      className="w-[55px] h-[55px] absolute top-1/2 left-4 cursor-pointer z-50"
      onClick={onClick}
    />
  );
};




