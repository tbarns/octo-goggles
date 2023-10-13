import './Projects.css';
import icon from '../../icon.ico';

const Brew = () => {
  return (
    <div className='projectDiv'>
      <img src={icon} className="Logo" alt="Icon of a beer mug" />
      <h1> Brewery Locator </h1>
      <p className='AppDesc'>
        The Brewery Locator seamlessly merges the prowess of the Google Maps API with the expansive dataset of the Open Brewery API, offering aficionados a sophisticated platform to discover breweries worldwide. A refined search by city unveils detailed insights into each brewery's distinct identity and offerings.
      </p>
      
      <div className='techUsed'>
        <p className='techTitle'>
          Technologies Deployed:
        </p>
        <ul>
          <li>JavaScript</li>
          <li>Google Maps API</li>
          <li>Open Brewery API</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div>
        <a href="https://tbarns.github.io/Brewery-Locator/" className="ExternalLink">
          <p className="ExternalLinkP">Explore the Locator</p>
        </a>
      </div>
    </div>
  )
}

export default Brew;
