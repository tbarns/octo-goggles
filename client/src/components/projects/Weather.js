import './Projects.css';
import weatherLogo from '../../weather.png';

const Weather = () => {
  return (
    <div className='projectDiv'>
      <img src={weatherLogo} className="Logo" alt="Icon depicting a cloud with the sun" />
      <h1> Weather or Not </h1>
      <p className='AppDesc'>
        Weather or Not refines meteorological insights into an intuitive interface, offering a comprehensive 5-day forecast. Beyond mere temperatures, users gain access to nuanced metrics such as wind speed, humidity, and evocative icons representing current or forthcoming weather conditions.
      </p>

      <p className='myPart'>
        This venture represented my initial foray into the intricate realm of third-party API integrations, encapsulating a phase of exponential learning and growth.
      </p>
      <div className='techUsed'>
        <p className='techTitle'>
          Technologies Deployed:
        </p>
        <ul>
          <li>JavaScript</li>
          <li>OpenWeather API</li>
          <li>GitHub</li>
        </ul>
      </div>

      <div>
        <a href="https://tbarns.github.io/weather-or-not/" className="ExternalLink">
          <p className="ExternalLinkP">Dive into the Forecast</p>
        </a>
      </div>
    </div>
  )
}

export default Weather;
