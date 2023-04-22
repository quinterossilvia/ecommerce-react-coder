import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from './ItemCount'

export const ItemDetail = ({ id, imagen, descripcion, trago, precio }) => {
  return (
    

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{descripcion}</Card.Title>
        <Card.Text>{trago}</Card.Text>
        <Card.Title>${precio}</Card.Title>
        <ItemCount />
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  )
}

