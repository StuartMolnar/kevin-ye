import Navbar from '@/components/services/ServicesNavbar';
import Hero from '@/components/services/Hero';
import ProgramHighlights from '@/components/services/ProgramHighlights';
import TrainingProgram from '@/components/services/TrainingProgram';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

  const items = [
    {icon: "/services/avatar-icon.svg", title: "Tailored Conditioning Plans", description: "I will create a customized conditioning plan based on your specific fitness goals, current fitness level, and individual needs. The program will be designed to target key components of conditioning, such as cardiovascular endurance, muscular endurance, agility, speed, and flexibility. With a personalized plan, we can optimize your training and achieve significant improvements in your overall fitness."},
    {icon: "/services/weight-icon.svg", title: "Varied and Dynamic Workouts", description: "My conditioning training program incorporates a variety of exercises, drills, and training methods to keep your workouts dynamic and engaging. From interval training and circuit workouts to functional movements and sports-specific exercises, we offer a diverse range of activities that challenge your body and keep you motivated."},
    {icon: "/services/gymnast-icon.svg", title: "Cardiovascular Endurance Development", description: "Cardiovascular endurance is a vital component of conditioning. Our program includes cardiovascular exercises, such as running, cycling, rowing, or high-intensity interval training (HIIT), to improve your heart and lung function, increase stamina, and enhance your ability to sustain physical activity over extended periods."},
    {icon: "/services/dumbell-icon.svg", title: "Strength and Muscular Endurance", description: "We will focus on developing your strength and muscular endurance to help you perform at your best. Our program incorporates resistance training exercises that target multiple muscle groups, helping you build functional strength and endurance. By progressively increasing the intensity and volume of the exercises, you'll experience improvements in muscle tone, stamina, and overall performance."},
    {icon: "/services/clock-icon.svg", title: "Agility, Speed, and Coordination", description: "My conditioning program aims to enhance your agility, speed, and coordination, which are crucial for many sports and activities. Through agility drills, ladder exercises, plyometrics, and sport-specific movements, we will work on improving your quickness, reaction time, and overall body control."},
    {icon: "/services/sprint-icon.svg", title: "Flexibility and Mobility", description: "I understand the importance of flexibility and mobility in conditioning and overall fitness. Our program includes stretching exercises and mobility drills to improve joint range of motion, reduce the risk of injuries, and enhance your overall functional movement patterns."},
    {icon: "/services/chart-icon.svg", title: "Expert Coaching and Progress Tracking", description: "Throughout your conditioning journey, I will provide expert coaching and guidance. I will ensure proper technique, provide modifications as needed, and motivate you to push past your limits. We also emphasize progress tracking, recording your achievements, and adjusting the program accordingly to help you reach new levels of conditioning."},
  ]

export default function StrengthTraining() {

  return (
    <div>

      <Navbar />

      <main className="min-h-screen font-normal text-black bg-white font-poppins text-body pt-[135px] md:pt-[185px] md:mt-[60px]">

      <Fade>
        <Hero 
          imageSrc="/services/conditional-training-image.webp" 
          imageAlt="Conditioning Training Hero" 
          programTitle="CONDITIONING TRAINING PROGRAM"
          programDescription="My conditioning training program is tailored to help individuals of all fitness levels improve their overall fitness, enhance athletic performance, and boost endurance. With personalized plans targeting cardiovascular endurance, strength, agility, and flexibility, my dynamic workouts and expert coaching will guide you towards achieving your conditioning goals. Join me in unlocking your potential and taking your fitness and performance to new heights."
        />
      </Fade>
      

        <Fade>
          <ProgramHighlights items={items} />
        </Fade>
        

        <Fade>
          <TrainingProgram 
            services={[
              {
                title: 'CONDITIONAL TRAINING PROGRAM',
                duration: '12-Week Package',
                price: 600,
                description: [
                  'Description line goes here',
                  'Description line goes here',
                  'Description line goes here'
                ]
              },
              {
                title: 'CONDITIONAL TRAINING PROGRAM',
                duration: '16-Week Package',
                price: 720,
                description: [
                  'Description line goes here',
                  'Description line goes here',
                  'Description line goes here'
                ]
              },
            ]}
            imageURL="/services/pricing-image.webp"
            email="kevinye@email.com"
          />
        </Fade>
        

        

      </main>
    </div>
  )
}
