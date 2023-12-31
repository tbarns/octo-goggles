import React from 'react'

const DrawingTime = () => {
    return (
        <div className='projectDiv'  >
            {/* <img src={} className="Logo" alt="Logo beer mug" /> */}
            <h1> Brewery Locator </h1>
            <p className='AppDesc'>Brewery Locator uses the Google Maps API in conjunction with the Open Brewery API to enable users to locate breweries all over the world.  With a simple search of a city you can get location information as well as a deeper dive into what type of brewery each location is.
            </p>

            <div className='techUsed'>
                <p className='techTitle'>
                    Notable technologies used:
                </p>


            </div>
            <div>
                <a href="https://tbarns.github.io/Brewery-Locator/" className="ExternalLink">
                    <p className="ExternalLinkP"  >Visit Website</p>
                </a>
            </div>
        </div>
    )
}

export default DrawingTime