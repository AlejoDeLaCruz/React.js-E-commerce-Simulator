
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import "../Style.scss"



const ItemListContainer = () => {

    const productosCollection = collection(db, "Productos")


    const [items,setItems] = useState([])
    const {category} = useParams()


    useEffect(() => {
        if (category) {
            const filtro = query(productosCollection, where("category", "==", category))
            const consulta = getDocs(filtro)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
        } 
        else {
            const consulta = getDocs(productosCollection)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

            }
        }, [category]);

    return (
        <>
        <div >
            <h2 id="titulo-productos">Prod<span id="color-titulo">uctos</span></h2>
            {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>      
        </>
    )
}


export default ItemListContainer;


