import React, { useState } from 'react'

const ItemCount = () => {

    const [counter, setCounter] = useState (0)

    const suma = () => {
        setCounter (counter+ 1)
    }

    const resta = () => {
        if (counter > 0)
        setCounter (counter -1)
    }




  return (
    <div className='d-flex justify-content-center'>
      
      <button className="btn btn-secondary m-2" onClick={resta} >–</button>
      <h2 > {counter} </h2>
      <button className="btn btn-secondary m-2" onClick={suma}>+</button>

    </div>
  )
}

export default ItemCount
