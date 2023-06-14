'use client';
import Hamburger from 'hamburger-react'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [activeSection, setActiveSection] = useState('');

    const smoothScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // handle scroll state
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show !== isScrolled) {
                setIsScrolled(show);
            }

            const current = sections.find(
                (section) =>
                    section.getBoundingClientRect().top > 0 &&
                    section.getBoundingClientRect().top < window.innerHeight / 2
            );

            if (current && activeSection !== current.id) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections, isScrolled, activeSection]);

    useEffect(() => {
        setSections(Array.from(document.querySelectorAll('section[id]')));
    }, []);

    useEffect(() => {
        document.querySelectorAll('.underline').forEach((link) => {
            link.classList.remove('underline');
        });

        document.getElementById(`${activeSection}-link`)?.classList.add('underline');
    }, [activeSection]);
    

  return (
    <section className={`bg-white fixed top-0 inset-x-0 z-50 flex items-center px-[200px] transition-all duration-200 ease-in-out ${isScrolled ? 'py-[20px]' : 'py-[60px]'}`}>
        <img onClick={() => smoothScrollTo('hero-section')} src="/kevin-ye-logo-navbar.svg" alt="" className="h-[65px] w-[169px] cursor-pointer" />
        <div className="mx-auto space-x-4 font-medium text-navbar">
            <div onClick={() => smoothScrollTo('about-section')} id="about-section-link" className="inline-block cursor-pointer">About</div>
            <div onClick={() => smoothScrollTo('services-section')} id="services-section-link" className="inline-block cursor-pointer">Fitness Programs</div>
            <div onClick={() => smoothScrollTo('quiz-section')} id="quiz-section-link" className="inline-block cursor-pointer">Take a Quiz</div>
            <div onClick={() => smoothScrollTo('client-stories-section')} id="client-stories-section-link" className="inline-block cursor-pointer">Client Stories</div>
        </div>
        <div onClick={() => smoothScrollTo('contact-section')} className="bg-black text-white inline-block py-[15.5px] px-[30px] cursor-pointer">Get In Touch</div>
    </section>

    
  );
};

export default Navbar

