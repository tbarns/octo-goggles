import './Projects.css'
import logo from '../../100.png'
const My100 = () => {
  return (
    <div className='projectDiv' >
      <img src={logo} className="Logo" alt="Logo 100" />

      <h1> My 100 </h1>
      <p className='AppDesc'>
        My 100 is a social media app where users can compile a ist of their 100 favorite books to show off to their friends.  Need a recommendation about what to read next? Checkout your friends' top 100!
        This project is still in development.
      </p>



      <div className='techUsed'>
        <p className='techTitle'>
          Notable technologies used:
        </p>
        <ul>
          <li>JWT</li>
          <li>REACT</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GitHub</li>
        </ul>
      </div>

      <div>
        <a href="https://tbarns.github.io/blank-site/" className="ExternalLink">
          <p className="ExternalLinkP"  >Visit Website</p>
        </a>
      </div>

    </div>
  )
}

export default My100