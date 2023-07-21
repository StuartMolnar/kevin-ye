import Navbar from '@/components/ServicesNavbar';
import Copyright from '@/components/Copyright';
import ProgramHighlights from '@/components/ProgramHighlights';
import React from 'react';
import Image from 'next/image';
import { smoothScrollTo } from '@/utils/scrollUtils';

  const items = [
    {icon: "/services/avatar-icon.svg", title: "Tailored Conditioning Plans", description: "I will create a customized conditioning plan based on your specific fitness goals, current fitness level, and individual needs. The program will be designed to target key components of conditioning, such as cardiovascular endurance, muscular endurance, agility, speed, and flexibility. With a personalized plan, we can optimize your training and achieve significant improvements in your overall fitness."},
    {icon: "/services/weight-icon.svg", title: "Varied and Dynamic Workouts", description: "My conditioning training program incorporates a variety of exercises, drills, and training methods to keep your workouts dynamic and engaging. From interval training and circuit workouts to functional movements and sports-specific exercises, we offer a diverse range of activities that challenge your body and keep you motivated."},
    {icon: "/services/gymnast-icon.svg", title: "Cardiovascular Endurance Development", description: "Cardiovascular endurance is a vital component of conditioning. Our program includes cardiovascular exercises, such as running, cycling, rowing, or high-intensity interval training (HIIT), to improve your heart and lung function, increase stamina, and enhance your ability to sustain physical activity over extended periods."},
    {icon: "/services/dumbell-icon.svg", title: "Strength and Muscular Endurance", description: "We will focus on developing your strength and muscular endurance to help you perform at your best. Our program incorporates resistance training exercises that target multiple muscle groups, helping you build functional strength and endurance. By progressively increasing the intensity and volume of the exercises, you'll experience improvements in muscle tone, stamina, and overall performance."},
    {icon: "/services/chart-icon.svg", title: "Agility, Speed, and Coordination", description: "My conditioning program aims to enhance your agility, speed, and coordination, which are crucial for many sports and activities. Through agility drills, ladder exercises, plyometrics, and sport-specific movements, we will work on improving your quickness, reaction time, and overall body control."},
    {icon: "/services/cutlery-icon.svg", title: "Flexibility and Mobility", description: "I understand the importance of flexibility and mobility in conditioning and overall fitness. Our program includes stretching exercises and mobility drills to improve joint range of motion, reduce the risk of injuries, and enhance your overall functional movement patterns."},
    {icon: "/services/smiley-icon.svg", title: "Expert Coaching and Progress Tracking", description: "Throughout your conditioning journey, I will provide expert coaching and guidance. I will ensure proper technique, provide modifications as needed, and motivate you to push past your limits. We also emphasize progress tracking, recording your achievements, and adjusting the program accordingly to help you reach new levels of conditioning."},
  ]

export default function StrengthTraining() {

  return (
    <div>

      <Navbar />

      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px] md:mt-[60px]">

        <section className="flex flex-col md:flex-row">
          <Image 
            src="/services/conditional-training-image.jpg" 
            alt="Strength Training Hero" 
            width={694} 
            height={1041} 
            layout="responsive"
            objectFit="cover"
            className="md:w-3/5 md:max-h-[100vw] lg:max-h-[40vw]"
          />
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col md:max-w-[900px] px-[20px] md:px-20 pt-10 md:pt-0">
              <p className="font-medium text-header-sub md:text-header-sub-dsk text-gold">
                CONDITIONING TRAINING PROGRAM
              </p>
              <h1 className="pt-3 font-bold text-h1 md:text-h1-dsk">Become stronger, fitter, and more confident</h1>
              <div className="flex pt-3">
                  <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                  <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <p className="pt-10">
                My conditioning training program is tailored to help individuals of all fitness levels improve their overall fitness, enhance athletic performance, and boost endurance. With personalized plans targeting cardiovascular endurance, strength, agility, and flexibility, my dynamic workouts and expert coaching will guide you towards achieving your conditioning goals. Join me in unlocking your potential and taking your fitness and performance to new heights.
              </p>
              <div onClick={() => smoothScrollTo('program-highlights-section')} className="hidden md:block border border-black font-medium rounded-[2.5px] py-[15px] px-[30px] w-[150px] text-center mt-10 cursor-pointer hover:bg-black hover:text-white">Read More</div>
            </div>
            
          </div>
        </section>

        <ProgramHighlights items={items} />

        
        

        <section className="flex flex-col md:flex-row pt-[80px] md:pt-[180px] pb-10 justify-center">
          <img src="/services/pricing-image.jpg" alt="" className="md:hidden object-cover max-h-[1200px]" />
          <div className="flex flex-col items-center w-full pt-20 md:w-1/2 md:pt-0">
            <div className="p-10 mx05 shadow-custom">
              <p className="font-medium text-header-sub md:text-header-sub-dsk text-gold">
              CONDITIONAL TRAINING PROGRAM
              </p>
              <h3 className="text-h3 md:text-h3-dsk font-medium pt-[18px]">
                12-Week Package
              </h3>
              <p className="pt-[18px]">
                <span className="font-bold text-h3 md:text-h3-dsk">$600</span> per package
              </p>
              <div className="flex pt-[30px]">
                <img src="/services/program-bar-gold.svg" alt="" className="scale-50 super-sm:scale-75 lg:scale-100 -ml-10 super-sm:-ml-5 lg:-ml-0 w-[160px] h-3" />
                <img src="/services/program-bar-black.svg" alt="" className="scale-50 super-sm:scale-75 lg:scale-100 -ml-20 super-sm:-ml-10 lg:-ml-0 w-[160px] h-3" />
              </div>
              <ul className="list-disc list-inside pt-[30px]">
                <li>Description line goes here</li>
                <li>Description line goes here</li>
                <li>Description line goes here</li>
              </ul>
            </div>
            <div className="p-10 mx-5 mt-10 shadow-custom">
              <p className="font-medium text-header-sub md:text-header-sub-dsk text-gold">
                CONDITIONAL TRAINING PROGRAM
              </p>
              <h3 className="text-h3 font-medium pt-[18px]">
                16-Week Package
              </h3>
              <p className="pt-[18px]">
                <span className="font-bold text-h3 md:text-h3-dsk">$720</span> per package
              </p>
              <div className="flex pt-[30px]">
                <img src="/services/program-bar-gold.svg" alt="" className="scale-50 super-sm:scale-75 lg:scale-100 -ml-10 super-sm:-ml-5 lg:-ml-0 w-[160px] h-3" />
                <img src="/services/program-bar-black.svg" alt="" className="scale-50 super-sm:scale-75 lg:scale-100 -ml-20 super-sm:-ml-10 lg:-ml-0 w-[160px] h-3" />
              </div>
              <ul className="list-disc list-inside pt-[30px]">
                <li>Description line goes here</li>
                <li>Description line goes here</li>
                <li>Description line goes here</li>
              </ul>
            </div>

            
            <div id="contact-section" className="mt-20">
              
              <a href="mailto:kevinye@email.com?subject=Conditional Training Inquiry">
                <div className="bg-black text-white inline-block max-w-[190px] px-[30px] py-[15px] cursor-pointer hover:bg-gold hover:text-black">Contact Me Now</div>
              </a>
              <h2 className="pt-10 font-bold text-h2 md:text-h2-dsk">
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
          
          <img src="/services/pricing-image.jpg" alt="" className="hidden md:block object-cover w-1/2 max-h-[1200px]" />
        </section>

      </main>
    </div>
  )
}
