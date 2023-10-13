import "./Projects.css"
import My100 from "../components/projects/My100"
import ArtCart from "../components/projects/ArtCart"
import Brew from "../components/projects/Brew"
import Weather from "../components/projects/Weather"
import DL from "../components/projects/DL"
import DrawingTime
 from "../components/projects/DrawingTime"
import TechIcons from "../components/TechIcons"

const Projects = () => {
  return (
    <div id = 'projectsContainer'>

<ArtCart/>
<DL/>
<Weather/>
<Brew/>
{/* <My100/> */}
{/* <DrawingTime/> */}
<TechIcons/>

    </div>
  )
}

export default Projects