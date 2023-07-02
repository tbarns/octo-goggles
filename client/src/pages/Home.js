import "./Home.css"
import portrait from '../portrait.jpg';

const Home = () => {
  return (
    <div className="homeDiv" >

<img src={portrait} className="portrait" alt="a portrait of a person with brown hair, glasses and a beard and mustache. the right half of the face is a photograph and the left is a realistic pencil drawing with a pink background." />

    </div>
  )
}

export default Home