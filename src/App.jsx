import React, { useRef, useEffect, useState, useCallback } from 'react';
import FirstSection from './components/firstSection/FirstSection';
import Header from './components/header/Header';
import SecondSection from './components/secondSection/SecondSection';
import AboutSection from './components/aboutSection/AboutSection';

const App = () => {
  const headerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const aboutSectionRef = useRef(null); // Add ref for AboutSection

  const sections = [headerRef, firstSectionRef, secondSectionRef, aboutSectionRef]; // Include aboutSectionRef
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStart = useRef(0);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const scrollToSection = useCallback(
    (index) => {
      if (index >= 0 && index < sections.length && sections[index].current) {
        setIsScrolling(true);
        window.scrollTo({
          top: sections[index].current.offsetTop,
          behavior: 'smooth',
        });
        setCurrentSectionIndex(index);
        setTimeout(() => setIsScrolling(false), 700); // Adjust duration as needed
      }
    },
    [sections, setIsScrolling, setCurrentSectionIndex]
  );

  const handleWheel = useCallback(
    debounce((event) => {
      if (isScrolling) return;

      const scrollDown = event.deltaY > 0;
      const nextSectionIndex = scrollDown
        ? Math.min(currentSectionIndex + 1, sections.length - 1)
        : Math.max(currentSectionIndex - 1, 0);

      if (nextSectionIndex !== currentSectionIndex) {
        scrollToSection(nextSectionIndex);
      }
    }, 200), // Adjust debounce delay as needed
    [currentSectionIndex, isScrolling, sections, scrollToSection]
  );

  const handleTouchStart = useCallback((event) => {
    touchStart.current = event.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    debounce((event) => {
      if (isScrolling) return;

      const touchEnd = event.changedTouches[0].clientY;
      const deltaY = touchStart.current - touchEnd;
      const scrollThreshold = 50; // Adjust as needed

      if (Math.abs(deltaY) > scrollThreshold) {
        const scrollUp = deltaY > 0;
        const nextSectionIndex = scrollUp
          ? Math.min(currentSectionIndex + 1, sections.length - 1)
          : Math.max(currentSectionIndex - 1, 0);

        if (nextSectionIndex !== currentSectionIndex) {
          scrollToSection(nextSectionIndex);
        }
      }
    }, 200),
    [currentSectionIndex, isScrolling, sections, scrollToSection]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  return (
    <div id="body">
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={firstSectionRef}>
        <FirstSection />
      </div>
      <div ref={secondSectionRef}>
        <SecondSection />
      </div>
      <div ref={aboutSectionRef}> {/* Add the ref to the AboutSection component */}
        <AboutSection />
      </div>
    </div>
  );
};

export default App;