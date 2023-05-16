import React, { useState, useEffect } from 'react'
// import { pedirProductos } from '../../Helpers/pedirProductos'
import { Spinner } from 'react-bootstrap'
import {ItemDetail} from'../ItemDetailContainer/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
import "../ItemDetailContainer/ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [item, setItem] =useState (null)
    const [loading,  setLoading] = useState (false)
    const {itemId} =useParams()


    // setLoading(true)
        // pedirProductos ()
        //     .then (res=> {
        //         setItem (res.find (prod => prod.id === Number(itemId)))
        //     })
        //     .catch ((error) => console.log (error))
        //     .finally (()=>{
        //         setLoading (false)
        //     })
    useEffect (()=>{
        setLoading (true)
        const db =getFirestore()
        const productos = db.collection ('productos')
        const item = productos.doc (itemId)
        item.get()
            .then ((doc)=>{
                setItem({
                    id: doc.id, ...doc.data ()
                })
            })
        
            .catch((err) => console.log (err))
            .finally(()=>{
                setLoading(false)
            })

    },[itemId]) 


  

  return (
    <section className='item'>{
        loading
        ?<Spinner />
        :<ItemDetail {...item} />
        
        }
      
    </section>
  )
}

export default ItemDetailContainer
