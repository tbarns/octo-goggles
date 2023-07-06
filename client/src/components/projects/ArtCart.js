import './Projects.css'
import cart from '../../cart.png'
const ArtCart = () => {
  return (
    <div className='projectDiv'  >
      <img src={cart} className="Logo" alt="Logo shopping cart" />
      <h1> Art (C)art </h1>
      <p className='AppDesc'>
        Art (C)art is a digital gallery that allows artists both well known and establishing to present their work at no cost.  This space enables artists to connect with collectors in a way that doesn't add the burden of applying to exhibits or lugging work to a location, potentially damaging the pieces.
      </p>

      <p className='myPart'>I lead the backend development for this project by building the server and creating the structure for the models and the routing using RESTFUL API endpoints.  I also ensured the project maintained a MVC file structure.
      </p>
      <div className='techUsed'>
        <p className='techTitle'>
          Notable technologies used:
        </p>
        <ul>
          <li>Handlebars</li>
          <li>REST APIs</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GitHub</li>
        </ul>
      </div>

      <div>
        <a href="https://art-cart-gui-guys-production.herokuapp.com/login" className="ExternalLink">
          <p className="ExternalLinkP"  >Visit Website</p>
        </a>
      </div>
    </div>
  )
}

export default ArtCart