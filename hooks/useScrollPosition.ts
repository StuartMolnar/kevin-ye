import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isUserAtTop = window.scrollY === 0;
      setIsScrolled(!isUserAtTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};

export default useScrollPosition;
