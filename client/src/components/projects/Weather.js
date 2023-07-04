import './Projects.css'
import weatherLogo from '../../weather.png'
const Weather = () => {
  return (

    <div className='projectDiv'  >
      <img src={weatherLogo} className="Logo" alt="Logo cloud and sun animation" />
      <h1> Weather or Not </h1>
      <p className='AppDesc' >Weather or Not provides a 5 day weather forecast and a clean user interface.  Along with a temperature the app provides wind-speed, humidity and an icon that denotes the current or forecasted weather.
      </p>

      <p className='myPart' >This was my first attempt at accessing and utilizing a third party API.
      </p>
      <p className='techUsed' >
        Notable technologies used: JavaScript, OpenWeather API, GitHub
      </p>
      <div>
      <a href="https://tbarns.github.io/weather-or-not/" className="ExternalLink">
        <p className="ExternalLinkP"  >Visit Website</p>
      </a>
      </div>

    </div>
  )
}

export default Weather