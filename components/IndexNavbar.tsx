'use client';
import Hamburger from 'hamburger-react'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setOpen] = useState(false);

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
    <section id="navbar">
        <div className={`select-none z-50 fixed top-0 inset-x-0 flex items-center px-[20px] md:px-[60px] xl:px-[200px] transition-all duration-200 ease-in-out ${isScrolled ? 'py-[20px]' : 'py-[35px] md:py-[60px]'} ${isOpen ? 'bg-transparent' : 'bg-white'}`}>
            <img onClick={() => smoothScrollAndCloseMenu('hero-section')} src={`${isOpen ? "/kevin-ye-logo-navbar-black.svg" : "/kevin-ye-logo-navbar.svg"}`} className="scale-75 -ml-[20px] md:-ml-0 md:scale-100 h-[65px] w-[169px] cursor-pointer mr-8" />
            <div className="mx-auto font-medium text-navbar md:text-navbar-dsk">
                <p onClick={() => smoothScrollTo('about-section')} id="about-section-link" className="hidden cursor-pointer xl:inline-block hover:bg-gold hover:text-white p-3 px-6 rounded-[2.5px]">About</p>
                <p onClick={() => smoothScrollTo('services-section')} id="services-section-link" className="hidden cursor-pointer xl:inline-block hover:bg-gold hover:text-white p-3 px-6 rounded-[2.5px]">Fitness Programs</p>
                <p onClick={() => smoothScrollTo('client-stories-section')} id="client-stories-section-link" className="hidden cursor-pointer xl:inline-block hover:bg-gold hover:text-white p-3 px-6 rounded-[2.5px]">Client Stories</p>
            </div>
            <div onClick={() => smoothScrollTo('contact-section-dsk')} className="hidden xl:inline-block bg-black text-white py-[15.5px] px-[30px] cursor-pointer rounded-[2.5px] ml-8 hover:bg-gold hover:text-black">Get In Touch</div>
            <div className={`z-50 scale-75 md:scale-100 xl:hidden transition-all duration-200 ease-in-out`}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>


        {/* mobile navigation menu */}
        <div className={`select-none w-full fixed top-0 bottom-0 right-0 bg-opacity-[1] z-40 flex flex-col items-center justify-center space-y-4 bg-gold text-h3 md:text-h3-dsk transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <p onClick={() => smoothScrollAndCloseMenu('about-section')} className="cursor-pointer">About</p>
            <p onClick={() => smoothScrollAndCloseMenu('services-section')} className="cursor-pointer">Fitness Programs</p>
            <p onClick={() => smoothScrollAndCloseMenu('client-stories-section')} className="cursor-pointer">Client Stories</p>
            <p onClick={() => smoothScrollAndCloseMenu('contact-section-mobile')} className="inline-block text-white bg-black cursor-pointer mt-24 py-[15.5px] px-[30px] rounded-[2.5px]">Get In Touch</p>
        </div>
        
        


    </section>

    
  );
};

export default Navbar

