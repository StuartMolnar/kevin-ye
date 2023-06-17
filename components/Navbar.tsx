'use client';
import Hamburger from 'hamburger-react'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setOpen] = useState(false);

    const smoothScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const smoothScrollAndCloseMenu = (id: string) => {
        smoothScrollTo(id);
        setOpen(false);
    };

    // underlines the navbar link based on currently visible page section
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show !== isScrolled) {
                setIsScrolled(show);
            }
        
            const current = sections.find(
                (section: HTMLElement) =>
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
    <section>
        <div className={`z-40 bg-white fixed top-0 inset-x-0 flex items-center px-[20px] md:px-[60px] xl:px-[200px] transition-all duration-200 ease-in-out ${isScrolled ? 'py-[20px]' : 'py-[35px] md:py-[60px]'}`}>
            <img onClick={() => smoothScrollAndCloseMenu('hero-section')} src="/kevin-ye-logo-navbar.svg" alt="" className="scale-75 md:scale-100 h-[65px] w-[169px] cursor-pointer mr-8" />
            <div className="mx-auto space-x-8 font-medium text-navbar">
                <div onClick={() => smoothScrollTo('about-section')} id="about-section-link" className="hidden cursor-pointer xl:inline-block hover:underline">About</div>
                <div onClick={() => smoothScrollTo('services-section')} id="services-section-link" className="hidden cursor-pointer xl:inline-block hover:underline">Fitness Programs</div>
                <div onClick={() => smoothScrollTo('quiz-section')} id="quiz-section-link" className="hidden cursor-pointer xl:inline-block hover:underline">Take a Quiz</div>
                <div onClick={() => smoothScrollTo('client-stories-section')} id="client-stories-section-link" className="hidden cursor-pointer xl:inline-block hover:underline">Client Stories</div>
            </div>
            <div onClick={() => smoothScrollTo('contact-section')} className="hidden xl:inline-block bg-black text-white py-[15.5px] px-[30px] cursor-pointer rounded-[2.5px] ml-8">Get In Touch</div>
        </div>


        {/* mobile navigation menu */}
        <div className={`w-3/4 min-w-[320px] fixed top-0 bottom-0 right-0 bg-opacity-[1] z-50 flex flex-col items-center justify-center space-y-4 bg-gold text-h3 transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div onClick={() => smoothScrollAndCloseMenu('about-section')} className="cursor-pointer hover:font-bold">About</div>
            <div onClick={() => smoothScrollAndCloseMenu('services-section')} className="cursor-pointer hover:font-bold">Fitness Programs</div>
            <div onClick={() => smoothScrollAndCloseMenu('quiz-section')} className="cursor-pointer hover:font-bold">Take a Quiz</div>
            <div onClick={() => smoothScrollAndCloseMenu('client-stories-section')} className="cursor-pointer hover:font-bold">Client Stories</div>
            <div onClick={() => smoothScrollAndCloseMenu('contact-section')} className="inline-block text-white bg-black cursor-pointer mt-24 py-[15.5px] px-[30px] rounded-[2.5px]">Get In Touch</div>
        </div>
        
        

        <div className={`z-50 scale-75 md:scale-100 fixed xl:hidden right-[30px] md:right-[60px] transition-all duration-200 ease-in-out ${isScrolled ? 'py-[28px]' : 'py-[42px] md:py-[70px]'}`}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    </section>

    
  );
};

export default Navbar

