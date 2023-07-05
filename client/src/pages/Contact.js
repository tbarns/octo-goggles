import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div id='contactDiv' >


            <div className='glow-on-hover-contact' id='emailContactDiv'>
                <a href="mailto:tbarnaby1@gmail.com" className="EmailButton">
                    email
                </a>
            </div>



            <div className='glow-on-hover-contact' id='resumeContactDiv'>
                <a href="https://docs.google.com/document/d/1uBKcYC079YrG2t9TqskE56-PqwLS_eqXlTi39cbSqZ8/edit?usp=sharing" className="resumeButton">
                    resume
                </a>
            </div>

            <div className='glow-on-hover-contact' id='otherContactDiv'>
                other
            </div>

        </div>


    )
}

export default Contact