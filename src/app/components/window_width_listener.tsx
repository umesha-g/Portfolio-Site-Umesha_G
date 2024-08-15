import { useState, useEffect } from 'react';

const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width set
    updateWidth();

    // Add event listener
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
