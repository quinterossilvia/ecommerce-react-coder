import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../CartScreen/CartScreen.css"

export const CartScreen = () => {
  const { carrito, precioTotal, removerItem, vaciarCarrito } =
    useContext(CartContext);

  return (
    <div className="container my-5 bg-light">
      {carrito.length === 0 ? (
        <>
          <h3>Carrito Vacio</h3>
          <Link to="/" className="btn btn-secondary">
            {" "}
            Volver a Comprar{" "}
          </Link>
        </>
      ) : (
        <>
          <h3 >RESUMEN DE COMPRAS</h3>
          <hr />
          {carrito.map((prod) => (
            <div >
              <div >
                <p>PRODUCTO: {prod.descripcion}</p>
                <p>${prod.precio}</p>
                <p>CANTIDAD: {prod.counter}</p>
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => removerItem(prod.id)}
              >
                <BsFillTrashFill />
              </button>
            </div>
          ))}
          <strong>PRECIO TOTAL: $ {precioTotal()}</strong>
          <hr />
          <div className="resume1">
          
          <button className="btn btn-secondary m-4" onClick={vaciarCarrito}>
            VACIAR CARRITO
          </button>
          <Link className="btn btn-secondary m-4" to="/checkout" >TERMINAR COMPRA</Link>
          </div>
        </>
      )}
    </div>
  );
};
