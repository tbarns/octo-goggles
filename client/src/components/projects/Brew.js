import './Projects.css'
import icon from '../../icon.ico'
const Brew = () => {
  return (
    <div className='projectDiv'  >
      <img src={icon} className="Logo" alt="Logo beer mug" />
      <h1> Brewery Locator </h1>
      <p className='AppDesc'>Brewery Locator uses the Google Maps API in conjunction with the Open Brewery API to enable users to locate breweries all over the world.  With a simple search of a city you can get location information as well as a deeper dive into what type of brewery each location is.
      </p>

      <div className='techUsed'>
        Notable technologies used:
        <ul>
          <li>JavaScript</li> 
          <li>Google Maps API</li>
          <li> Open Brewery API</li> 
          <li>GitHub</li>
        </ul>
      </div>
      <div>
        <a href="https://tbarns.github.io/Brewery-Locator/" className="ExternalLink">
          <p className="ExternalLinkP"  >Visit Website</p>
        </a>
      </div>
    </div>
  )
}

export default Brew