import React, { useState, useEffect } from 'react'
import '../ItemListContainer/Style.css'
import { pedirProductos } from '../../Helpers/pedirProductos'
import { ItemList } from './ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  
  const [items, setItems] = useState ([])

  const [loading, setLoading] = useState (false)

  
  const {categoryId} = useParams ()



    useEffect(()=> {
      setLoading (true)
      pedirProductos ()
        .then ((res) => {
          
          if (categoryId){
            setItems(res.filter(prod => prod.trago === categoryId)  )
          }else {
            setItems(res)
          }
        })
        .catch ((error) => console.log (error))
        .finally (() => {setLoading (false)})
    }, [categoryId])

  return (
    <div className='container '>
      {
        loading 
        ?<Spinner animation="grow" className= 'spin' />
        
        :<ItemList  productos={items} /> 
      

      }


  </div>


  )
}

export default ItemListContainer
