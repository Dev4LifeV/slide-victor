import { useEffect, useState } from 'react';

export const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the sum of the visible window height and the current scroll position
      // is greater than or equal to the total height of the document body.
      // A small tolerance (e.g., -1 or -5) can be added for cross-browser compatibility
      // or to account for minor discrepancies in height calculations.
      if (window.innerHeight + window.scrollY >= 1000000 ) {
        setReachedBottom(true);
      } else {
        setReachedBottom(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return reachedBottom;
};