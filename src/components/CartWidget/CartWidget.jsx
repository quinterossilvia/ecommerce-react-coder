import cart from './Assets/cart.svg'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


const CartWidget = () => {
    const {calcularCantidad} = useContext (CartContext)

    return (
        <div className='cartw'> 
           <img src={cart} alt= "cart-widget" />
           <span>{calcularCantidad()}</span>
        </div>
        
    )
}
export default CartWidget