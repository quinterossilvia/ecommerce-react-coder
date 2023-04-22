import React, { useState, useEffect } from 'react'
import { pedirProductos } from '../../Helpers/pedirProductos'
import { Spinner } from 'react-bootstrap'
import {ItemDetail} from'../ItemDetailContainer/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] =useState (null)
    const [loading,  setLoading] = useState (false)
    const {itemId} =useParams()

    useEffect (()=>{

        setLoading(true)
        pedirProductos ()
            .then (res=> {
                setItem (res.find (prod => prod.id === Number(itemId)))
            })
            .catch ((error) => console.log (error))
            .finally (()=>{
                setLoading (false)
            })


    },[itemId]) 


  

  return (
    <section>{
        loading
        ?<Spinner />
        :<ItemDetail {...item} />
        
        }
      
    </section>
  )
}

export default ItemDetailContainer
