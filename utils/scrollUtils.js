const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    const isDesktop = window.innerWidth >= 768;
    const scrollOffset = isDesktop ? 145 : 105;
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offset = elementPosition - scrollOffset;
    
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };
  
  export { smoothScrollTo };