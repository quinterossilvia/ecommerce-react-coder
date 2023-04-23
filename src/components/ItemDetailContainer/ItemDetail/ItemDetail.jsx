import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import ItemCount from './ItemCount'
import '../ItemDetail/itemDetail.css'


export const ItemDetail = ({ id, imagen, descripcion, trago, precio }) => {
  const navigate = useNavigate()

  const volverHaciaAtras = () =>{
    navigate(-1)
  }
  
  
  
  return (
    

    <Card style={{ width: '250px' }} >
      <Card.Img variant="top" src={imagen}  className='imag'/>
      <Card.Body className='text-center'>
        <Card.Title>{descripcion}</Card.Title>
        <Card.Text>{trago}</Card.Text>
        <Card.Title>${precio}</Card.Title>
        <ItemCount />
        <Button variant="secondary">Agregar al Carrito</Button>
        <Button variant="bg-light"onClick={volverHaciaAtras}className='m-2'>Volver</Button>

      </Card.Body>
    </Card>
  )
}

