import React from 'react';
import './TechIcons.css';

const TechIcons = () => {
    return (
        <div>
            <div className='titleTech-icon'>
                <p id='header'>Tech I use</p>
                <div className="tech-icons">
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <span>JavaScript</span>
                    </div>
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <span>jQuery</span>
                    </div>
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-react"></i>
                        </div>
                        <span>React</span>
                    </div>
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-html5"></i>
                        </div>
                        <span>HTML5</span>
                    </div>
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>GitHub</span>
                    </div>

                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <span>CSS3</span>
                    </div>
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fas fa-database"></i>
                        </div>
                        <span>MySQL</span>
                    </div>
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fas fa-database"></i>
                        </div>
                        <span>MongoDB</span>
                    </div>
                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-node"></i>
                        </div>
                        <span>Node.js</span>
                    </div>

                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-npm"></i>
                        </div>
                        <span>NPM</span>
                    </div>


                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i class="fas fa-robot"></i>
                        </div>
                        <span>Ai</span>
                    </div>

                    <div className="tech-item">
                        <div className="icon-wrapper">
                            <i className="fab fa-mailchimp"></i>

                        </div>
                        <span>mailchimp</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TechIcons;
