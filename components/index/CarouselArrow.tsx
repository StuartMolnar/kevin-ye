import React, { useState } from 'react';

interface ArrowButtonProps {
  initialSrc: string;
  hoverSrc: string;
  onClick: () => void;
}

const CarouselArrow: React.FC<ArrowButtonProps> = ({ initialSrc, hoverSrc, onClick }) => {
  const [src, setSrc] = useState(initialSrc);

  const handleMouseEnter = () => {
    setSrc(hoverSrc);
  };

  const handleMouseLeave = () => {
    setSrc(initialSrc);
  };

  return (
    <img 
      src={src} 
      className="w-[55px] h-[55px] cursor-pointer" 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default CarouselArrow;
