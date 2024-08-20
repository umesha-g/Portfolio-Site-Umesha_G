import React, { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 p-3 bg-neutral-950 text-red-1 rounded-full border-2 border-red-1 shadow-lg hover:bg-neutral-800 transition-colors duration-300"
          aria-label="Go to top"
        >
          <BsArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;