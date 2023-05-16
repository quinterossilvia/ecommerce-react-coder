import React, { useState, useEffect } from "react";
import "../ItemListContainer/Style.css";
// import { pedirProductos } from '../../Helpers/pedirProductos'
import { getFirestore } from "../../firebase/config";
import { ItemList } from "./ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  // setLoading (true)
  // pedirProductos ()
  // .then ((res) => {

  //   if (categoryId){
  //     setItems(res.filter(prod => prod.trago === categoryId)  )
  //   }else {
  //     setItems(res)
  //   }

  // })
  // .catch ((error) => console.log (error))
  // .finally (() => {setLoading (false)})

  useEffect(() => {
    
    const db = getFirestore();

    const productos = db.collection("productos");
    
    if (categoryId){
      const filtrado = productos.where ("category", "==", categoryId)
      filtrado.get()
        .then((res) =>{
          const newItem = res.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
          })
          setItems(newItem)
        })
        .catch((err)=> console.log (err))
        .finally( ()=>{
          setLoading(false)
        })
    }else{
         productos.get()

      .then((res) => {
        const newItem = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.table(newItem);
        setItems(newItem)
      });
      

    }

   
    

  }, [categoryId]);

  return (
    <div className=" ">
      {loading ? (
        <Spinner animation="grow" className="spin" />
      ) : (
        <ItemList productos={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
