import { useState } from "react"
import { useCarrito } from "./CustomProvider"
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"
import React from 'react';
import "../Style.scss"

const ItemDetail = ({ item }) => {

  const { agregarProducto } = useCarrito()
  const [cantidad, setCantidad] = useState(1)
  const [confirmado, setConfirmado] = useState(false)

  

  const handleOnAdd = (cantidad) => {
    console.log("Se agregaron " + cantidad + " productos")
    console.log(item)
    setCantidad(cantidad)
    setConfirmado(true)
    agregarProducto(item,cantidad)
    setCantidad(0)

  }

  return (
    <>
      <div className="card" id='carta-detallada'>
        <div className="card-body">
            <img className="imagen" src={item.img}/>
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.info}</p>
        </div>
        </div>
          <div id='carta-detallada-2'>
            <div className="card-body-2">
              <h5 className="card-text">{item.descripcion}</h5>
              <h3 className='card-price'>$ {item.precio}</h3>
      
              {confirmado == true
              ?
              <> 
              <Link to={'/cart'} className="boton-ir-al-carrito">Ir a comprar</Link> 
              <Link to={'/'} className="boton-ir-al-carrito">Seguir buscando</Link> 
              </>
              
              :
              <> 
              <ItemCount init={cantidad} handleOnAdd={handleOnAdd} /> 
              </>
              }
              <p className="card-info">{item.info}</p>
          </div>
      </div>
    </>
  )
}

export default ItemDetail






















