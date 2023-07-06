import React, { useState, useEffect, useRef } from 'react';
import "./Home.css";
import portrait from '../portrait.png';
import 'typeface-indie-flower';
import 'typeface-raleway';


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
            <p id='artistTextTitle'  style={{ fontFamily: 'Indie Flower, cursive' }}> Interdisciplinary</p>
            <div id='artDiv' >  <p id='artistText'  style={{ fontFamily: 'Indie Flower, cursive' }}>creating fine works of art using traditional media as well as digital. Gallery exhibits in New York City and Seattle. Contributing columnist to the bilingual publication Beefcake Mag based in Brazil.  Clients include Amazon, Microsoft, Nike, Glass Iris Productions, Mighty Tripod, Seattle Institute of Art, and more.</p>
            </div>

            <p id='devTextTitle'  style={{ fontFamily: 'Raleway, sans-serif' }}> Full Stack</p>  <p id='devText'  style={{ fontFamily: 'Raleway, sans-serif' }}>with extensive experience integrating third-party REST APIs into MVC and OOP projects with Node.js and GraphQL.  Other backend skills include:

                <ul style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <li>Configuring and maintaining servers for MERN stack deployment on Heroku.</li>
                    <li>Creating CLI applications for user input manipulation and SQL database access.</li>
                    <li>Managing SQL databases with Sequelize ORM and NoSQL databases with Mongo and Mongoose.</li>
                    <li>Implementing functional code in HTML, CSS, JavaScript, and JQuery, utilizing frameworks like Bootstrap and Bulma CSS.</li>
                </ul>

            </p>

            <div className="red-section" ref={redSectionRef}></div>
            <div className="blue-section" ref={blueSectionRef}></div>
        </div>
    );
};

export default Home;
