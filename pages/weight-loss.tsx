import Navbar from '@/components/ServicesNavbar';
import Copyright from '@/components/Copyright';
import ProgramHighlights from '@/components/ProgramHighlights';
import React from 'react';

  const items = [
    {icon: "/services/avatar-icon.svg", title: "Personalized Nutrition Plan", description: "I will create a customized nutrition plan tailored to your specific needs and goals. My program emphasizes a balanced approach, incorporating lean proteins, whole grains, fruits, vegetables, and healthy fats while limiting processed foods and sugary beverages. By creating a caloric deficit through portion control and mindful eating, I will help you achieve sustainable fat loss without feeling deprived."},
    {icon: "/services/weight-icon.svg", title: "Effective Exercise Strategies", description: "My program includes a combination of cardiovascular exercises and strength training to maximize fat burning and improve overall fitness. I will design workouts that suit your fitness level and goals, incorporating activities such as running, cycling, HIIT workouts, and resistance training. By challenging your body and gradually increasing intensity, we will optimize fat loss while preserving lean muscle mass."},
    {icon: "/services/gymnast-icon.svg", title: "Behavior Modification Techniques", description: "I understand that successful fat loss involves more than just diet and exercise. My program integrates behavior modification techniques to address the underlying factors that contribute to weight gain. We will focus on building healthy habits, managing stress, improving sleep quality, and promoting a positive mindset. By addressing these aspects, I will help you make sustainable lifestyle changes that support your fat loss journey."},
    {icon: "/services/dumbell-icon.svg", title: "Ongoing Support and Accountability", description: "I am committed to supporting you throughout your fat loss journey. I will provide ongoing guidance, motivation, and accountability to keep you on track. We will have regular check-ins, track your progress, and make adjustments to your nutrition and exercise plans as needed. Additionally, I will provide a supportive community of like-minded individuals where you can share experiences and find inspiration."},
    {icon: "/services/chart-icon.svg", title: "Education and Empowerment", description: "My program aims to educate and empower you with the knowledge and tools necessary for long-term fat loss success. I will provide resources and information on nutrition, exercise, and lifestyle habits, enabling you to make informed choices and maintain your progress even after completing the program. My goal is to empower you to take control of your health and sustain a healthy weight for life."},
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
                WEIGHT LOSS PROGRAM
              </p>
              <h1 className="pt-3 font-bold text-h1 md:text-h1-dsk">Become stronger, fitter, and more confident</h1>
              <div className="flex pt-3">
                  <img src="/about-bar-gold.svg" alt="" className="w-24 h-3" />
                  <img src="/about-bar-black.svg" alt="" className="w-24 h-3 -ml-1" />
              </div>
              <p className="pt-10">
                My weight loss program is designed to help individuals like you shed unwanted body fat and achieve sustainable, long-term results. Unlike quick-fix solutions and fad diets, my comprehensive program focuses on creating healthy habits, adopting a balanced approach to nutrition, and incorporating effective exercise strategies. Whether your goal is to improve overall health or enhance your physical appearance, my program offers the tools and support needed to reach your fat loss goals.
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
                WEIGHT LOSS PROGRAM
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
                WEIGHT LOSS PROGRAM
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
              
              <a href="mailto:kevinye@email.com?subject=Weight Loss Inquiry">
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
