import React from 'react';
import {Link} from "react-router-dom"
import "./estilos.scss";

const Item = ({item}) => {
  return (
    <>
    <div>
        <div className="card">
          <div className="card-body">
                <img className="imagen" src={item.img}/>
                <h5 className="card-title">{item.nombre}</h5>
                <h6>${item.precio}</h6>
                <p className="card-text">{item.info}</p>
                <Link to={`/${item.category}/${item.id}`} className='boton-detalles'>Detalles</Link>
          </div>
        </div>  
    </div>     
    </>
    )
  }

export default Item