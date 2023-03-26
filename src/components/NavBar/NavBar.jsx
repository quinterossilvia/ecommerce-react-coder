import CartWidget from "../CartWidget/CartWidget"



const NavBar = () => {
  return (
    <nav className=" d-flex justify-content-around navbar navbar-expand-lg navbar-light bg-light">
        <h3>CODE BAR</h3>
    <div >
      <button className="btn btn-secondary m-2" >Bebidas Sin Alcohol</button>
      <button className="btn btn-secondary m-2">Bebidas Con Alcohol</button>
      <button className="btn btn-secondary m-2">Snacks</button>      
    </div>
    <CartWidget />
    <hr />
    
    </nav>
  )
}

export default NavBar
