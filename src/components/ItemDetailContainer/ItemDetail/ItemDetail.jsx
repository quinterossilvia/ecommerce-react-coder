import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "../ItemDetail/itemDetail.css";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({
  id,
  imagen,
  descripcion,
  trago,
  precio,
  cantidad,
}) => {
  const navigate = useNavigate();

  const volverHaciaAtras = () => {
    navigate(-1);
  };


const {addToCart} = useContext (CartContext)





  const [counter, setCounter] = useState(1);

  const sumarAlCarrito = () => {
    const newItem = {
      id, imagen, descripcion, trago, precio, cantidad, counter,
      
    }
    // console.log (newItem)
    addToCart (newItem)
    
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  return (
    <div className="item">
    <Card style={{ width: "250px" }}>
      <Card.Img variant="top" src={imagen} className="imag" />
      <Card.Body className="text-center ">
        <Card.Title>{descripcion}</Card.Title>
        <Card.Text>{trago}</Card.Text>
        <Card.Title>${precio}</Card.Title>
        <ItemCount max={cantidad} modify={setCounter} cantidad={counter} />
        <Button variant="secondary" onClick={sumarAlCarrito}>Agregar al Carrito</Button>
      </Card.Body>
      <Button variant="bg-light" onClick={volverHaciaAtras} className="m-2">
        Volver
      </Button>
      <Link to= '/cart'className="btn btn bg-light"> Ir al Carrito
      </Link>
    </Card>
    </div>
  );
};
