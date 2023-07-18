import Navbar from '@/components/ServicesNavbar';
import Copyright from '@/components/Copyright';
import ProgramHighlights from '@/components/ProgramHighlights';
import React from 'react';

  const items = [
    {icon: "/services/avatar-icon.svg", title: "Customized Training Plans", description: "I will create a personalized strength training plan based on your fitness level, goals, and preferences. The program takes into account your current strength, mobility, and any specific limitations or considerations. Whether you&apos;re aiming to enhance athletic performance, increase functional strength, or improve overall fitness, our trainers will develop a plan that suits your needs."},
    {icon: "/services/weight-icon.svg", title: "Progressive Resistance Training", description: "My strength training program follows a progressive approach, gradually increasing the intensity and resistance over time. This methodology ensures that your muscles are consistently challenged, promoting muscle growth and strength gains. With regular assessment and adjustments, the program evolves alongside your progress, helping you break through plateaus and achieve new milestones."},
    {icon: "/services/gymnast-icon.svg", title: "Proper Technique & Form", description: "I prioritize proper technique and form to maximize the effectiveness of each exercise while minimizing the risk of injury. I will guide you through each movement, demonstrating correct form and providing personalized cues and feedback. Learning the right technique from the start establishes a solid foundation and enables you to perform exercises safely and efficiently."},
    {icon: "/services/dumbell-icon.svg", title: "Varied Exercise Selection", description: "My program incorporates a wide range of exercises targeting different muscle groups. This variety ensures balanced muscle development and prevents monotony, keeping your workouts engaging and enjoyable. From compound exercises like squats, deadlifts, and bench presses to isolation exercises, my program offers a diverse selection to keep you challenged and motivated."},
    {icon: "/services/chart-icon.svg", title: "Individualized Progress Tracking", description: "I understand the importance of tracking progress to stay motivated and make informed adjustments. I will monitor your performance, record your achievements, and provide regular feedback on your progress. By tracking metrics such as weight lifted, repetitions, and strength gains, you can witness your improvement over time and stay motivated to reach new goals."},
    {icon: "/services/cutlery-icon.svg", title: "Nutritional Guidance", description: "Strength training is not just about lifting weights; proper nutrition is essential to support muscle growth and recovery. I can provide general guidelines and recommendations on nutrition to complement your strength training efforts. I can offer advice on macronutrient balance, pre- and post-workout nutrition, and hydration, helping you optimize your results and overall well-being."},
    {icon: "/services/smiley-icon.svg", title: "Motivation & Accountability", description: "I am dedicated to providing ongoing support, motivation, and accountability throughout your strength training journey. I will celebrate your achievements, offer encouragement during challenging times, and help you stay consistent with your workouts."},
  ]

export default function StrengthTraining() {

  const smoothScrollTo = (id: string) => {
    const navbarHeight = 104; // adjust this value if the navbar's height changes (navbar height - 1)
    const element = document.getElementById(id);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <div>

      <Navbar />

      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px] md:mt-[60px]">

        <section className="flex flex-col md:flex-row">
          <img src="/services/strength-training-hero-image.jpg" alt="" className="object-cover md:w-3/5 md:max-h-[100vw] lg:max-h-[40vw]" />
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col md:max-w-[900px] px-[20px] md:px-20 pt-10 md:pt-0">
              <p className="font-medium text-header-sub md:text-header-sub-dsk text-gold">
                STRENGTH TRAINING PROGRAM
              </p>
              <h1 className="pt-3 font-bold text-h1 md:text-h1-dsk">Become stronger, fitter, and more confident</h1>
              <div className="flex pt-3">
                  <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                  <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <p className="pt-10">
                My strength training program is designed to help individuals of all fitness levels build strength, increase muscle mass, and achieve their personal fitness goals. Whether you are a beginner looking to establish a foundation or an experienced individual seeking to take your strength to the next level, my comprehensive program offers tailored workouts and expert guidance to ensure optimal results.
              </p>
              <div onClick={() => smoothScrollTo('program-highlights-section')} className="hidden md:block border border-black font-medium rounded-[2.5px] py-[15px] px-[30px] w-[150px] text-center mt-10 cursor-pointer hover:bg-black hover:text-white">Read More</div>
            </div>
            
          </div>
        </section>

        <ProgramHighlights items={items} />

        
        

        <section className="flex flex-col md:flex-row pt-[80px] md:pt-[180px] pb-10 justify-center">
        <img src="/services/pricing-image.jpg" alt="" className="md:hidden object-cover max-h-[1200px]" />
          <div className="flex flex-col items-center w-full pt-20 md:w-1/2 md:pt-0">
            <div className="p-10 mx-5 shadow-custom">
              <p className="font-medium text-header-sub md:text-header-sub-dsk text-gold">
                STRENGTH TRAINING PROGRAM
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
                STRENGTH TRAINING PROGRAM
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
              
              <a href="mailto:kevinye@email.com?subject=Strength Training Inquiry">
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
