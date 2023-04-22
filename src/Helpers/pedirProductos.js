import { stock } from "../components/data/stock"

export const pedirProductos = () =>{
    return new Promise ((resolve, reject) => {
      setTimeout (()=>{
        resolve (stock)
        reject ('Rechazado')

      }, 2000)
    }
    )
  }