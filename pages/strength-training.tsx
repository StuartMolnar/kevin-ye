import Navbar from '@/components/Navbar';
import Copyright from '@/components/Copyright';
import React from 'react';

export default function StrengthTraining() {
  
  return (
    <div>

      <Navbar />

      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[185px]">

        <section className="flex">
          <img src="/services/strength-training-hero-image.jpg" alt="" className="object-cover w-3/5 max-h-[40vw]" />
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col max-w-[900px] px-20">
              <p className="font-medium text-header-sub text-gold">
                STRENGTH TRAINING PROGRAM
              </p>
              <h1 className="pt-3 font-bold text-h1">Become stronger, fitter, and more confident</h1>
              <div className="flex pt-3">
                  <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                  <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <p className="pt-10">
                My strength training program is designed to help individuals of all fitness levels build strength, increase muscle mass, and achieve their personal fitness goals. Whether you are a beginner looking to establish a foundation or an experienced individual seeking to take your strength to the next level, my comprehensive program offers tailored workouts and expert guidance to ensure optimal results.
              </p>
            </div>
            
          </div>
        </section>

        <section className="flex flex-col items-center pt-[90px]">
          <h1 className="font-bold text-h1">Program Highlights</h1>
          <div className="grid items-start grid-cols-1 md:grid-cols-2 max-w-[1500px] md:gap-10 pt-[60px]">
            <div className="flex flex-col col-span-1 p-10 pt-0 md:pt-10">
              <img src="/services/avatar-icon.svg" alt="" className="w-[26px] h-[29px]" />
              <p className="font-medium text-header-sub pt-[22px]">Customized Training Plans</p>
              <p className="pt-[18px]">
               I will create a personalized strength training plan based on your fitness level, goals, and preferences. The program takes into account your current strength, mobility, and any specific limitations or considerations. Whether you're aiming to enhance athletic performance, increase functional strength, or improve overall fitness, our trainers will develop a plan that suits your needs.
              </p>
            </div>
            <div className="flex flex-col col-span-1 p-10 pt-0 md:pt-10">
              <img src="/services/weight-icon.svg" alt="" className="w-[26px] h-[29px]" />
              <p className="font-medium text-header-sub pt-[22px]">Progressive Resistance Training</p>
              <p className="pt-[18px]">
                My strength training program follows a progressive approach, gradually increasing the intensity and resistance over time. This methodology ensures that your muscles are consistently challenged, promoting muscle growth and strength gains. With regular assessment and adjustments, the program evolves alongside your progress, helping you break through plateaus and achieve new milestones.
              </p>
            </div>
            <div className="flex flex-col col-span-1 p-10 pt-0 md:pt-10">
              <img src="/services/gymnast-icon.svg" alt="" className="w-[26px] h-[29px]" />
              <p className="font-medium text-header-sub pt-[22px]">Proper Technique & Form</p>
              <p className="pt-[18px]">
                I prioritize proper technique and form to maximize the effectiveness of each exercise while minimizing the risk of injury. I will guide you through each movement, demonstrating correct form and providing personalized cues and feedback. Learning the right technique from the start establishes a solid foundation and enables you to perform exercises safely and efficiently.
              </p>
            </div>
            <div className="flex flex-col col-span-1 p-10 pt-0 md:pt-10">
              <img src="/services/dumbell-icon.svg" alt="" className="w-[26px] h-[29px]" />
              <p className="font-medium text-header-sub pt-[22px]">Varied Exercise Selection</p>
              <p className="pt-[18px]">
                My program incorporates a wide range of exercises targeting different muscle groups. This variety ensures balanced muscle development and prevents monotony, keeping your workouts engaging and enjoyable. From compound exercises like squats, deadlifts, and bench presses to isolation exercises, my program offers a diverse selection to keep you challenged and motivated.
              </p>
            </div>
            <div className="flex flex-col col-span-1 p-10 pt-0 md:pt-10">
              <img src="/services/chart-icon.svg" alt="" className="w-[26px] h-[29px]" />
              <p className="font-medium text-header-sub pt-[22px]">Individualized Progress Tracking</p>
              <p className="pt-[18px]">
               I understand the importance of tracking progress to stay motivated and make informed adjustments. I will monitor your performance, record your achievements, and provide regular feedback on your progress. By tracking metrics such as weight lifted, repetitions, and strength gains, you can witness your improvement over time and stay motivated to reach new goals.
              </p>
            </div>
            <div className="flex flex-col col-span-1 p-10 pt-0 md:pt-10">
              <img src="/services/cutlery-icon.svg" alt="" className="w-[26px] h-[29px]" />
              <p className="font-medium text-header-sub pt-[22px]">Nutritional Guidance</p>
              <p className="pt-[18px]">
               Strength training is not just about lifting weights; proper nutrition is essential to support muscle growth and recovery. I can provide general guidelines and recommendations on nutrition to complement your strength training efforts. I can offer advice on macronutrient balance, pre- and post-workout nutrition, and hydration, helping you optimize your results and overall well-being.
              </p>
            </div>
            <div className="flex flex-col col-span-1 p-10 pt-0 md:pt-10">
              <img src="/services/smiley-icon.svg" alt="" className="w-[26px] h-[29px]" />
              <p className="font-medium text-header-sub pt-[22px]">Motivation & Accountability</p>
              <p className="pt-[18px]">
               I am dedicated to providing ongoing support, motivation, and accountability throughout your strength training journey. I will celebrate your achievements, offer encouragement during challenging times, and help you stay consistent with your workouts.
              </p>
            </div>
            <div className="flex flex-col col-span-1 p-10 mt-10 md:mt-0 bg-gold md:rounded-[2.5px]">
              <div className="flex items-center">
                <img src="/services/upward-arrow-icon.svg" alt="" className="w-[35px] h-[35px] mr-[18px]" />
                <h2 className="font-bold text-h2">
                  Get Started Now
                </h2>
              </div>
              <p className="pt-[24px]">
                Join my program and embark on a journey towards a stronger, healthier, and more confident you.
              </p>
              <div className="inline-block font-medium border-black border rounded-[2.5px] py-[15px] px-[30px] max-w-[160px] cursor-pointer mt-[30px]">
                Get In Touch
              </div>
            </div>
          </div>
        </section>

        <section className="flex pt-[180px] pb-10 justify-center">
          <div className="flex flex-col items-center w-1/2">
            <div className="p-10">
              <p className="font-medium text-header-sub text-gold">
                STRENGTH TRAINING PROGRAM
              </p>
              <h3 className="text-h3 font-medium pt-[18px]">
                12-Week Package
              </h3>
              <p className="pt-[18px]">
                <span className="font-bold text-h3">$600</span> per package
              </p>
              <div className="flex pt-[30px]">
                <img src="/services/program-bar-gold.svg" alt="" className="w-[160px] h-3" />
                <img src="/services/program-bar-black.svg" alt="" className="w-[160px] h-3" />
              </div>
              <ul className="list-disc list-inside">
                <li>Description line goes here</li>
                <li>Description line goes here</li>
                <li>Description line goes here</li>
              </ul>
            </div>
            <div className="p-10 mt-10">
              <p className="font-medium text-header-sub text-gold">
                STRENGTH TRAINING PROGRAM
              </p>
              <h3 className="text-h3 font-medium pt-[18px]">
                16-Week Package
              </h3>
              <p className="pt-[18px]">
                <span className="font-bold text-h3">$720</span> per package
              </p>
              <div className="flex pt-[30px]">
                <img src="/services/program-bar-gold.svg" alt="" className="w-[160px] h-3" />
                <img src="/services/program-bar-black.svg" alt="" className="w-[160px] h-3" />
              </div>
              <ul className="list-disc list-inside">
                <li>Description line goes here</li>
                <li>Description line goes here</li>
                <li>Description line goes here</li>
              </ul>
            </div>

            
            <div className="mt-10">
              
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
          
          <img src="/services/pricing-image.jpg" alt="" className="object-cover w-1/2 max-h-[1200px]" />
        </section>

      </main>
    </div>
  )
}
