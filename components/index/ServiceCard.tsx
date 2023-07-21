import React, { useContext } from 'react';
import Image from 'next/image';
import { FC } from 'react';
import BlurhashContext from '@/contexts/BlurhashContext';

type ServiceCardProps = {
  title: string,
  imageUrl: string,
  description: string,
  link: string,
};

const ServiceCard: FC<ServiceCardProps> = ({ title, imageUrl, description, link }) => {
  
  const blurhashMap = useContext(BlurhashContext);
  const blurhash = blurhashMap[imageUrl];

  return (
    <div className="ml-[2%] w-[calc(100%-4%)] flex flex-col items-center justify-between  h-[800px] super-sm:h-[710px] md:h-[780px] card max-w-[480px] my-5 bg-white rounded shadow-custom">
      <div className="h-[320px] w-full max-w-[480px]">
        <Image 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full" 
          width={480} 
          height={320}
          placeholder={blurhash ? "blur" : undefined}
          blurDataURL={blurhash ? `data:image/svg+xml;base64,${blurhash}` : undefined} 
        />
      </div>
      <div className="grid grid-rows-[1fr,auto] h-full px-[20px] w-full md:px-10 pt-5 md:pt-10 max-w-[480px]"> 
          <div>
            <h2 className="font-bold text-h2 md:text-h2-dsk">{title}</h2>
            <div className="hidden md:flex pt-[30px]">
                <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
            </div>
            <div className="flex pt-6 md:hidden ">
              <img src="/hero-bar-gold.svg" alt="" className="w-[73px]  h-[5px]" />
              <img src="/hero-bar-black.svg" alt="" className="w-[73px] h-[5px] ml-1" />
            </div>
            <p className="pt-[24px] md:pt-[30px]">{description}</p>
          </div>
          <div className="pt-[24px] md:pt-[30px] self-start">
            <a href={link} className="inline-block w-full mb-[40px] py-[15px] px-[30px] bg-black text-white text-center hover:bg-gold hover:text-black">View Program Highlights</a>
          </div>
      </div>
    </div>
  )
}
  
export default ServiceCard;
