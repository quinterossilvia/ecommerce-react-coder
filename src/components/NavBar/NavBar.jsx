import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"



const NavBar = () => {
  return (
    <nav className=" d-flex justify-content-around navbar navbar-expand-lg navbar-light bg-light">
        {<h3>CODE BAR</h3>} 

    <div >
      <Link  className="btn btn-secondary m-2" to= '/productos/SIN ALCOHOL'>Bebidas Sin Alcohol</Link>
      <Link  className="btn btn-secondary m-2" to= '/productos/ALCOHOL' >Bebidas Con Alcohol</Link>
      


    </div>
    <CartWidget />
    <hr />
    
    </nav>
  )
}

export default NavBar
