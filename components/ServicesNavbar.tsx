'use client';
import Hamburger from 'hamburger-react'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface DropdownProps {
    isOpen: boolean;
    width: number;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, width }) => {
    return (
        <div style={{width}} className={`absolute bg-white pt-1 cursor-pointer rounded-[2.5px] ${isOpen ? 'block' : 'hidden'}`}>
            <a href="/strength-training" className="block px-4 py-2 rounded-[2.5px] hover:text-white hover:bg-gold">Strength Training</a>
            <a href="/conditional-training" className="block px-4 py-2 rounded-[2.5px] hover:text-white hover:bg-gold">Conditional Training</a>
            <a href="/weight-loss" className="block px-4 py-2 rounded-[2.5px] hover:text-white hover:bg-gold">Weight Loss</a>
        </div>
    );
}

const Navbar = () => {
    const moreServicesRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);

    const smoothScrollTo = (id: string) => {
        const navbarHeight = 104;
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

    useEffect(() => {
        const handleScroll = () => {
            const isUserAtTop = window.scrollY === 0;
            setIsScrolled(!isUserAtTop);
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 
    
        

  return (
    <section id="navbar">
        <div className={`select-none z-50 fixed top-0 inset-x-0 flex items-center px-[20px] md:px-[60px] xl:px-[200px] transition-all duration-200 ease-in-out ${isScrolled ? 'py-[20px]' : 'py-[35px] md:py-[60px]'} ${isOpen ? 'bg-transparent' : 'bg-white'}`}>
            <Link href="/">
                <img onClick={() => smoothScrollAndCloseMenu('hero-section')} src={`${isOpen ? "/kevin-ye-logo-navbar-black.svg" : "/kevin-ye-logo-navbar.svg"}`} className="scale-75 -ml-[20px] md:-ml-0 md:scale-100 h-[65px] w-[169px] cursor-pointer mr-8" />
            </Link>
            <div className="flex mx-auto font-medium text-navbar md:text-navbar-dsk">
                <Link href="/">
                    <p className="hidden p-3 px-5 cursor-pointer xl:inline-block hover:text-white hover:bg-gold rounded-[2.5px]">Home</p>
                </Link>
                <div className="hidden xl:block" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <div ref={moreServicesRef} className={`${isDropdownOpen ? "text-white bg-gold" : ""} flex items-center rounded-[2.5px] p-3 px-5 space-x-4`}>
                        <div className="select-none">Fitness Programs</div>
                        <span className="w-0 h-0 mr-2 triangle-down" />
                    </div>
                    <Dropdown 
                        isOpen={isDropdownOpen} 
                        width={moreServicesRef.current?.offsetWidth || 0} 
                    />
                </div>
            </div>
            <div onClick={() => smoothScrollTo('contact-section')} className="hidden xl:inline-block bg-black text-white py-[15.5px] px-[30px] cursor-pointer rounded-[2.5px] ml-8 hover:bg-gold hover:text-black">Get In Touch</div>
            <div className={`z-50 scale-75 md:scale-100 xl:hidden transition-all duration-200 ease-in-out`}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>


        {/* mobile navigation menu */}
        <div className={`select-none w-full h-full fixed top-0 right-0 bg-opacity-[1] z-40 bg-gold text-h3 md:text-h3-dsk transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col items-center pt-[35vh]`}>
            <div className="space-y-4 w-[190px] md:w-[240px]">
                <Link href="/">
                    <p className="cursor-pointer">Home</p>
                </Link>
                <details className="cursor-pointer" open={isServicesOpen} onToggle={() => setServicesOpen(!isServicesOpen)}>
                    <summary className="mb-1 outline-none">
                        <div className="flex items-center">
                            <p>Fitness Programs</p>
                            <span className={isServicesOpen ? "w-0 h-0 ml-2 triangle-up" : "w-0 h-0 ml-2 triangle-down"} />
                        </div>
                    </summary>
                    <a href="/strength-training" className="block py-2 scale-[80%] text-shadow">Strength Training</a>
                    <a href="/conditional-training" className="block py-2 scale-[80%] text-shadow">Conditional Training</a>
                    <a href="/weight-loss" className="block py-2 scale-[80%] text-shadow">Weight Loss</a>
                </details>
                <a onClick={() => smoothScrollAndCloseMenu('contact-section')} className="inline-block text-white bg-black cursor-pointer mt-24 py-[15.5px] px-[30px] rounded-[2.5px]">Get In Touch</a>
            </div>
        </div>



    </section>

    
  );
};

export default Navbar

