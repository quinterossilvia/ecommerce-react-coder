import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from './ItemCount'
import '../ItemDetail/itemDetail.css'

export const ItemDetail = ({ id, imagen, descripcion, trago, precio }) => {
  return (
    

    <Card style={{ width: '250px' }} >
      <Card.Img variant="top" src={imagen}  className='imag'/>
      <Card.Body className='text-center'>
        <Card.Title>{descripcion}</Card.Title>
        <Card.Text>{trago}</Card.Text>
        <Card.Title>${precio}</Card.Title>
        <ItemCount />
        <Button variant="secondary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  )
}

