import Navbar from '@/components/services/ServicesNavbar';
import ProgramHighlights from '@/components/services/ProgramHighlights';
import TrainingProgram from '@/components/services/TrainingProgram';
import Hero from '@/components/services/Hero';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const items = [
  {icon: "/services/avatar-icon.svg", title: "Personalized Nutrition Plan", description: "I will create a customized nutrition plan tailored to your specific needs and goals. My program emphasizes a balanced approach, incorporating lean proteins, whole grains, fruits, vegetables, and healthy fats while limiting processed foods and sugary beverages. By creating a caloric deficit through portion control and mindful eating, I will help you achieve sustainable fat loss without feeling deprived."},
  {icon: "/services/weight-icon.svg", title: "Effective Exercise Strategies", description: "My program includes a combination of cardiovascular exercises and strength training to maximize fat burning and improve overall fitness. I will design workouts that suit your fitness level and goals, incorporating activities such as running, cycling, HIIT workouts, and resistance training. By challenging your body and gradually increasing intensity, we will optimize fat loss while preserving lean muscle mass."},
  {icon: "/services/gymnast-icon.svg", title: "Behavior Modification Techniques", description: "I understand that successful fat loss involves more than just diet and exercise. My program integrates behavior modification techniques to address the underlying factors that contribute to weight gain. We will focus on building healthy habits, managing stress, improving sleep quality, and promoting a positive mindset. By addressing these aspects, I will help you make sustainable lifestyle changes that support your fat loss journey."},
  {icon: "/services/dumbell-icon.svg", title: "Ongoing Support and Accountability", description: "I am committed to supporting you throughout your fat loss journey. I will provide ongoing guidance, motivation, and accountability to keep you on track. We will have regular check-ins, track your progress, and make adjustments to your nutrition and exercise plans as needed. Additionally, I will provide a supportive community of like-minded individuals where you can share experiences and find inspiration."},
  {icon: "/services/chart-icon.svg", title: "Education and Empowerment", description: "My program aims to educate and empower you with the knowledge and tools necessary for long-term fat loss success. I will provide resources and information on nutrition, exercise, and lifestyle habits, enabling you to make informed choices and maintain your progress even after completing the program. My goal is to empower you to take control of your health and sustain a healthy weight for life."},
]

export default function StrengthTraining() {

  return (
    <div>

      <Navbar />

      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px] md:mt-[60px]">

        <Fade>
          <Hero 
            imageSrc="/services/weight-loss-image.jpg" 
            imageAlt="Weight Loss Hero" 
            programTitle="WEIGHT LOSS PROGRAM"
            programDescription="My weight loss program is designed to help individuals like you shed unwanted body fat and achieve sustainable, long-term results. Unlike quick-fix solutions and fad diets, my comprehensive program focuses on creating healthy habits, adopting a balanced approach to nutrition, and incorporating effective exercise strategies. Whether your goal is to improve overall health or enhance your physical appearance, my program offers the tools and support needed to reach your fat loss goals."
          />
        </Fade>
        

        <Fade>
          <ProgramHighlights items={items} />
        </Fade>
        

        <Fade>
          <TrainingProgram 
            services={[
              {
                title: 'WEIGHT LOSS PROGRAM',
                duration: '12-Week Package',
                price: 600,
                description: [
                  'Description line goes here',
                  'Description line goes here',
                  'Description line goes here'
                ]
              },
              {
                title: 'WEIGHT LOSS PROGRAM',
                duration: '16-Week Package',
                price: 720,
                description: [
                  'Description line goes here',
                  'Description line goes here',
                  'Description line goes here'
                ]
              },
            ]}
            imageURL="/services/pricing-image.jpg"
            email="kevinye@email.com"
          />
        </Fade>
        
      </main>
    </div>
  )
}
