import { createContext, useState, useContext } from "react"
export const contexto = createContext()
const { Provider } = contexto



export const useCarrito = () => {
    return useContext(contexto)
}


const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [producto, setProducto] = useState("")
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
        setProducto("")
    }

    const agregarProducto = (item, cantidad) => {
        if (isInCart.inCart) {
            
        } else {
            console.log("producto nuevo en el carrito!")
            setCarrito([
                ...carrito,
                { ...item, cantidad }
            ])
            setTotal(total + item.precio * cantidad)
            setProducto(item.nombre)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    
    }

    const isInCart = (id) => {
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        cantidadTotal : cantidadTotal,
        item: producto,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider

