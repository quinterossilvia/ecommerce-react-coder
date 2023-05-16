import React from 'react'
import {Item} from '../ItemList/Item/Item' 
import "../ItemList/ItemList.css"

export const ItemList = ({productos=[]}) => {




  return (
    
    <div >
      <h3 >CODE BAR BEBIDAS</h3>
     <div className='fila'>      
      {productos.map ((item) => <Item {...item } key={item.id}/>)}
    </div>
      
    </div>
  )
}

