import './Projects.css';
import weatherLogo from '../../weather.png';

const Weather = () => {
  return (
    <div className='projectDiv'>
      <img src={weatherLogo} className="Logo" alt="Icon depicting a cloud with the sun" />
      <h1> Weather App 2.0: A Reinvention </h1>
      <p className='AppDesc'>
        From humble beginnings as a vanilla JavaScript application, "Weather or Not" has evolved into a sophisticated Python-powered marvel. The revamped version provides an immersive 5-day forecast experience, boasting features beyond just temperatures, such as wind speed, humidity, and illustrative icons for real-time weather depiction.
      </p>

      <p className='myPart'>
        This reincarnation represents not just my technical progression but symbolizes my continuous drive for self-improvement. Transitioning to Python with Flask, I have achieved enhanced security, managing search histories, and seamless API interactions, all while leaving JavaScript behind.
      </p>

      <div className='techUsed'>
        <p className='techTitle'>
          Upgraded Tech Stack:
        </p>
        <ul>
          <li>Python & Flask</li>
          <li>Jinja2 Templating</li>
          <li>dotenv for Environment Security</li>
          <li>requests Module for API Calls</li>
          <li>Flask-CORS</li>
          <li>GitHub</li>
        </ul>
      </div>

      <div>
        <a href="https://weathersnake-04a7b3575b38.herokuapp.com/" className="ExternalLink">
          <p className="ExternalLinkP">Experience the Meteorological Marvel!</p>
        </a>
      </div>
    </div>
  )
}

export default Weather;
