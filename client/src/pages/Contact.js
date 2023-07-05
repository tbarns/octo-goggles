import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div id='contactDiv' >

            <a href="mailto:tbarnaby1@gmail.com" className="EmailButton">
                <div className='glow-on-hover-contact' id='emailContactDiv'>
                    email
                </div>
            </a>

            <a href="https://docs.google.com/document/d/1uBKcYC079YrG2t9TqskE56-PqwLS_eqXlTi39cbSqZ8/edit?usp=sharing" className="resumeButton">
                <div className='glow-on-hover-contact' id='resumeContactDiv'>
                    resume
                </div>
            </a>
            <div className='glow-on-hover-contact' id='otherContactDiv'>
                other
            </div>

        </div>


    )
}

export default Contact