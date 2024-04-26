import { useState, useEffect } from 'react';

function useScrollToTarget(targetId) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);

    const handleScroll = () => {
      if (isScrolling) {
        setIsScrolling(false); // Reset scrolling state
      }
    };

    if (targetElement) {
      window.addEventListener('scroll', handleScroll);
    } else {
      console.error("Target element not found:", targetId); // Handle errors
    }

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, [targetId, isScrolling]);

  const scrollToElement = () => {
    setIsScrolling(true); // Set scrolling state for potential error handling
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return scrollToElement;
}

export default useScrollToTarget;
