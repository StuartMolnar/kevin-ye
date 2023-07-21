import Navbar from '@/components/services/ServicesNavbar';
import ProgramHighlights from '@/components/services/ProgramHighlights';
import TrainingProgram from '@/components/services/TrainingProgram';
import Hero from '@/components/services/Hero';
import React from 'react';
import { Fade } from 'react-awesome-reveal';


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

  return (
    <div>

      <Navbar />

      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px] md:mt-[60px]">

        <Fade>
          <Hero 
            imageSrc="/services/strength-training-image.jpg" 
            imageAlt="Strength Training Hero" 
            programTitle="STRENGTH TRAINING PROGRAM"
            programDescription="My strength training program is designed to help individuals of all fitness levels build strength, increase muscle mass, and achieve their personal fitness goals. Whether you are a beginner looking to establish a foundation or an experienced individual seeking to take your strength to the next level, my comprehensive program offers tailored workouts and expert guidance to ensure optimal results."
          />
        </Fade>
        
        <Fade>
          <ProgramHighlights items={items} />
        </Fade>
        
        <Fade>
          <TrainingProgram 
            services={[
              {
                title: 'STRENGTH TRAINING PROGRAM',
                duration: '12-Week Package',
                price: 600,
                description: [
                  'Description line goes here',
                  'Description line goes here',
                  'Description line goes here'
                ]
              },
              {
                title: 'STRENGTH TRAINING PROGRAM',
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
