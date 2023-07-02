import React, { useState, useEffect, useRef } from 'react';
import "./Home.css";
import portrait from '../portrait.png';

const Home = () => {
  const [cursorX, setCursorX] = useState(0);

  const handleMouseMove = (event) => {
    setCursorX(event.clientX);
  };

  const redSectionRef = useRef(null);
  const blueSectionRef = useRef(null);

  useEffect(() => {
    const handleCursorPos = () => {
      const homeDivWidth = redSectionRef.current.parentNode.offsetWidth;
      const redSectionWidth = redSectionRef.current.offsetWidth;
      const blueSectionWidth = blueSectionRef.current.offsetWidth;
      const cursorPos = cursorX - redSectionRef.current.parentNode.getBoundingClientRect().left;
      const midpoint = homeDivWidth / 2;

      let redOpacity = 0;
      let blueOpacity = 0;

      if (cursorPos <= midpoint) {
        redOpacity = Math.min((midpoint - cursorPos) / (midpoint * 0.5), 1);
      } else {
        const bluePos = cursorPos - midpoint;
        const maxBluePos = (homeDivWidth - midpoint) / 2;
        blueOpacity = Math.min(bluePos / (maxBluePos * 0.5), 1);
      }

      redSectionRef.current.style.backgroundColor = `rgba(192, 168, 181, ${redOpacity})`;
      blueSectionRef.current.style.backgroundColor = `rgba(34, 45, 63, ${blueOpacity})`;
    };

    window.addEventListener('mousemove', handleCursorPos);

    return () => {
      window.removeEventListener('mousemove', handleCursorPos);
    };
  }, [cursorX]);

  return (
    <div className="homeDiv" onMouseMove={handleMouseMove}>
      <img src={portrait} className="portrait" alt="a portrait of a person with brown hair, glasses and a beard and mustache. the right half of the face is a photograph and the left is a realistic pencil drawing with a pink background." />
      <div className="red-section" ref={redSectionRef}></div>
      <div className="blue-section" ref={blueSectionRef}></div>
    </div>
  );
};

export default Home;
