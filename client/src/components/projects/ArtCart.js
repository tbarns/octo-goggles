import './Projects.css';
import cart from '../../cart.png';

const ArtCart = () => {
  return (
    <div className='projectDiv'>
      <img src={cart} className="Logo" alt="Logo shopping cart" />
      <h1> Art (C)art </h1>
      <p className='AppDesc'>
        Art (C)art revolutionizes the traditional art exhibit by offering a dynamic digital gallery space. Designed with emerging and renowned artists in mind, it eliminates the hassles of physical exhibitions. This platform not only safeguards precious artworks from potential transit damage but also facilitates seamless interactions between artists and collectors.
      </p>

      <p className='myPart'>
        My pivotal role as the lead backend developer was instrumental in shaping the infrastructure of this platform. My expertise was primarily focused on server construction, designing the database schema, and orchestrating data flow through RESTful API endpoints. I employed best practices to adhere to the MVC architectural pattern, ensuring a clean, modular, and scalable codebase.
      </p>
      
      <div className='techUsed'>
        <p className='techTitle'>
          Key Technologies Deployed:
        </p>
        <ul>
          <li>Handlebars</li>
          <li>RESTful APIs</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GitHub</li>
        </ul>
      </div>

      <div>
        <a href="https://art-cart-gui-guys-production.herokuapp.com/login" className="ExternalLink">
          <p className="ExternalLinkP">Explore the Platform</p>
        </a>
      </div>
    </div>
  )
}

export default ArtCart;
