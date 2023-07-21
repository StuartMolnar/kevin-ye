import React from 'react';
import Copyright from '@/components/Copyright';

interface Service {
  title: string;
  duration: string;
  price: number;
  description: string[];
}

interface Props {
  services: Service[];
  imageURL: string;
  email: string;
}

const TrainingProgram: React.FC<Props> = ({ services, imageURL, email }) => {
  return (
    <section id="training-program-section" className="flex flex-col items-center pt-10 md:pt-[90px] ml-10 ">
      <h1 className="font-bold text-h1 md:text-h1-dsk">Program Highlights</h1>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 pt-[60px] md:gap-10 gap-y-5">

      <div className="flex flex-col w-auto col-span-1 pt-20 space-y-10 md:pt-0 ">
        {services.map((service, index) => (
          <div className="p-10 shadow-custom" key={index}>
            <p className="font-medium text-header-sub md:text-header-sub-dsk text-gold">
              {service.title}
            </p>
            <h3 className="text-h3 md:text-h3-dsk font-medium pt-[18px]">
              {service.duration}
            </h3>
            <p className="pt-[18px]">
              <span className="font-bold text-h3 md:text-h3-dsk">${service.price}</span> per package
            </p>
            <div className="flex pt-[30px]">
              <img src="/services/program-bar-gold.svg" alt="" className="scale-50 super-sm:scale-75 lg:scale-100 -ml-10 super-sm:-ml-5 lg:-ml-0 w-[160px] h-3" />
              <img src="/services/program-bar-black.svg" alt="" className="scale-50 super-sm:scale-75 lg:scale-100 -ml-20 super-sm:-ml-10 lg:-ml-0 w-[160px] h-3" />
            </div>
            <ul className="list-disc list-inside pt-[30px]">
              {service.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        ))}

        <div id="contact-section" className="pt-20 mx-auto md:mx-0">
          <a href={`mailto:${email}?subject=Conditional Training Inquiry`}>
            <div className="bg-black text-white inline-block max-w-[190px] px-[30px] py-[15px] cursor-pointer hover:bg-gold hover:text-black">Contact Me Now</div>
          </a>
          <h2 className="pt-10 font-bold text-h2 md:text-h2-dsk">
            (778)-1234-5678
          </h2>
            <a href={`mailto: ${email}`}>
              <h2 className="pb-10 font-bold text-h2">
                  {email}
              </h2>
            </a>
          <Copyright />
        </div>

      </div>
        
        <img src={imageURL} alt="Training Program Image" className="order-first md:order-last object-cover max-h-[1200px] col-span-1" />
      </div>
    </section>
  );
};

export default TrainingProgram;
