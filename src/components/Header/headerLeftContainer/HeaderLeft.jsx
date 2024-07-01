import Logo from './Logo';
import {Link} from "react-router-dom";

const headerLeft = () => {
  return (
    <div>
       <Link to="/"><Logo /></Link>
    </div>
  )
}

export default headerLeft
