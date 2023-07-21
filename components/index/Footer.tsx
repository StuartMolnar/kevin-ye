import Image from 'next/image';
import Copyright from '@/components/Copyright';
import useWindowWidth from '@/hooks/useWindowWidth';
import React, { useContext } from 'react';
import BlurhashContext from '@/contexts/BlurhashContext';

const MobileFooter = () => {
  const blurhashMap = useContext(BlurhashContext);
  
  return (
    <section className="flex pt-16">
        
    <div className="flex flex-col">
      

    <Image 
      src="/footer-image.webp" 
      alt="Footer" 
      width={720} 
      height={900} 
      layout="responsive"
      objectFit="cover"
      className="w-screen"
      placeholder={blurhashMap["footer-image.webp"] ? "blur" : undefined}
      blurDataURL={blurhashMap["footer-image.webp"] ? `data:image/svg+xml;base64,${blurhashMap["footer-image.webp"]}` : undefined}
    />


      <div id="contact-section-mobile" className="flex flex-col pt-10 mx-[20px] h-full">
        <h1 className="font-bold text-h1 md:text-h1-dsk">
            Workout with me
          </h1>
          <div className="flex pt-3">
            <img src="/hero-bar-gold.svg" alt="" className="w-[73px]  h-[5px]" />
            <img src="/hero-bar-black.svg" alt="" className="w-[73px] h-[5px] ml-1" />
          </div>
          <p className="pt-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt.
          </p>
          <div className="mt-20">
        
        <div className="bg-black text-white inline-block max-w-[190px] px-[30px] py-[15px]">Contact Me Now</div>
        <h2 className="pt-10 font-bold text-h2">
          (778)-1234-5678
        </h2>
        <h2 className="pb-10 font-bold text-h2">
          kevinye@email.com
        </h2>
        <Copyright />
      </div>
      </div>
      
    </div>

  </section>
  );
};


const DesktopFooter = () => {
  return (
    <section id="contact-section-dsk" className="flex pt-20">

      <div className="flex items-center w-1/2 px-10">
          <div className="flex flex-col max-w-[500px] mx-[20px] lg:mx-auto">
              <h1 className="font-bold text-h1 md:text-h1-dsk">
                  Workout with me
              </h1>
              <div className="flex pt-3">
                <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <p className="pt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus ut neque aliquet vehicula quis vitae orci. Suspendisse dapibus fermentum est a gravida. Curabitur ut nunc nulla. Nunc at purus et turpis tincidunt.
              </p>
              <div className="mt-20">

              <a href="mailto:kevinye@email.com?subject=Personal Training General Inquiry">
                <div className="bg-black text-white inline-block max-w-[190px] px-[30px] py-[15px] cursor-pointer hover:bg-gold hover:text-black">Contact Me Now</div>
              </a>
              <h2 className="pt-10 font-bold text-h2">
                  (778)-1234-5678
              </h2>
              <a href="mailto: kevinye@email.com">
                <h2 className="pb-10 font-bold text-h2">
                    kevinye@email.com
                </h2>
              </a>
              <Copyright />
          </div>
          </div>
          
      </div>

      <img src="/footer-image.webp" alt="" className="object-cover object-top w-1/2 h-screen"/>

    </section>
  );
};

const Footer = () => {
  const windowWidth = useWindowWidth();

  if (windowWidth === undefined) {
    return null;
  }

  return (
    windowWidth < 1024 ? <MobileFooter /> : <DesktopFooter />
  );
};

export default Footer;
