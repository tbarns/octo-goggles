import './Projects.css';
import DLLogo from '../../DLLogo.png';

const DL = () => {
  return (
    <div className='projectDiv'>
      <img src={DLLogo} className="Logo" alt="Logo of a person executing a yoga pose" />
      <h1> Didactic Lift </h1>
      <p className='AppDesc'>
        Didactic Lift seamlessly bridges the gap between fitness aspirations and actionable results. It's meticulously crafted for those keen on embracing a transformative fitness journey. Whether you're a seasoned fitness enthusiast or embarking on your initial venture, DL offers a curated selection of workouts tailored for specific muscle groups. Experience a user-centric interface by creating an account and diving into a wealth of exercises.
      </p>

      <p className='myPart'>
        My proficiency was pivotal in orchestrating the backend dynamics of this platform. As the lead backend developer, I meticulously engineered the server and framed the database models, enhancing data interactivity using GraphQL. My role further encompassed spearheading the integration of JWT for user authentication, fortifying the platform's security and user experience.
      </p>
      
      <div className='techUsed'>
        <p className='techTitle'>
          Key Technologies Deployed:
        </p>
        <ul>
          <li>JWT for Authentication</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GitHub</li>
        </ul>
      </div>

      <div>
        <a href="https://didactic-lift.herokuapp.com/" className="ExternalLink">
          <p className="ExternalLinkP">Explore the Platform</p>
        </a>
      </div>
    </div>
  )
}

export default DL;
