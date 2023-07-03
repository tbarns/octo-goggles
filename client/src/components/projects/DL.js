import './Projects.css'
import DLLogo from '../../DLLogo.png'

const DL = () => {
  return (
    <div className='projectDiv' >
 <img src={DLLogo} className="Logo" alt="Logo of a person doing a yoga pose" />
<p className='AppDesc'>Didactic Lift is an app for anyone interested in fitness.  If you have wanted to try a new workout or begin a fitness journey DL can help you teach yourself exercises that target the muscle groups you want.  Simply log in or create an account and begin your search for workouts right away. 
</p>

<p className='myPart'>I lead the backend development for this project by building the server and creating the structure for the models and the routing using GraphQL.  In addition, I was responsible for researching and structuring our user authentication using JWT.
</p>
<p className='techUsed'>
notable technologies used: JWT, REACT, GraphQL, MongoDB, Node.js, Express.js, GitHub
</p>
<a href="https://didactic-lift.herokuapp.com/" className="ExternalLink">
  Visit Website
</a>

    </div>
  )
}

export default DL