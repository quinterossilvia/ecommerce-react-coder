import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"



const NavBar = () => {
  return (
    <nav className=" d-flex justify-content-around navbar navbar-expand-lg navbar-light bg-light">
         <Link className="btn btn-bg-light"  to= "/" ><h2>CODE BAR</h2></Link>

    <div >
      <Link  className="btn btn-secondary m-2" to= '/productos/SIN ALCOHOL'>Bebidas Sin Alcohol</Link>
      <Link  className="btn btn-secondary m-2" to= '/productos/ALCOHOL' >Bebidas Con Alcohol</Link>
      
    </div>
    <Link  to= '/cart' ><CartWidget/></Link>

    <hr />
    
    </nav>
  )
}

export default NavBar
