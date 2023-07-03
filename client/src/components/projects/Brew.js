import './Projects.css'
import icon from '../../icon.ico'
const Brew = () => {
  return (
    <div className='projectDiv'  >
      <img src={icon} className="Logo" alt="Logo beer mug" />
      <h1> Brewery Locator </h1>
      <p className='AppDesc'>Brewery Locator uses the Google Maps API in conjunction with the Open Brewery API to enable users to locate breweries all over the world.  With a simple search of a city you can get location information as well as a deeper dive into what type of brewery each location is.
      </p>

      <p className='techUsed'>
        Notable technologies used: JavaScript, Google Maps API, Open Brewery API, GitHub
      </p>
      <a href="https://tbarns.github.io/Brewery-Locator/" className="ExternalLink">
        Visit Website
      </a>

    </div>
  )
}

export default Brew