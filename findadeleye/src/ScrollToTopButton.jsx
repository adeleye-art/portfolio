import  { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 30px
  const toggleVisibility = () => {
    if (window.scrollY > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
    <FontAwesomeIcon icon={faArrowUp}  className='scroll-to-top'/>
    </div>
  );
};

export default ScrollToTopButton;
