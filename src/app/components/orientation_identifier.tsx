import { useState, useEffect } from 'react';

export const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<string | undefined>(undefined);

  useEffect(() => {
    const updateOrientation = () => {
      const orientationType = screen.orientation?.type;
      setOrientation(orientationType);
    };

    // Set the initial orientation
    updateOrientation();

    // Add event listener for orientation changes
    screen.orientation?.addEventListener('change', updateOrientation);

    // Clean up the event listener on component unmount
    return () => {
      screen.orientation?.removeEventListener('change', updateOrientation);
    };
  }, []);

  return orientation;
};
