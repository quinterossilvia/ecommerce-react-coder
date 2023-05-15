import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'



export const Item = ({ id,  imagen, descripcion, trago, precio }) => {
  return (
    
    <div className=' item'>
    <Card style={{ width: '250px' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body className='text-center'>
        <Card.Title>{descripcion}</Card.Title>
        <Card.Text>{trago}</Card.Text>
        <Card.Title>${precio}</Card.Title>
        <Link to={`/detail/${id}`}>
        <Button variant="secondary">Agregar al Carrito</Button>
        
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

