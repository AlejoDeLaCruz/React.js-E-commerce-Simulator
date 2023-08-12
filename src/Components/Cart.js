import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useRef, useState } from "react";
import { useCarrito } from "./CustomProvider";
import { contexto } from "./CustomProvider";
import { db } from "./firebase";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./estilos.scss"

const Cart = () => {
    const valorDelContexto = useContext(contexto);

    const { vaciarCarrito, productos } = useCarrito();
    const [id, setId] = useState("");

    const refName = useRef();
    const refEmail = useRef();
    const refSegundoEmail = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: {
                name: refName.current.value,
                email: refEmail.current.value
            },
            products: valorDelContexto.productos,
            total: valorDelContexto.cantidad,
            date: serverTimestamp()
        };

        const ordersCollection = collection(db, "orden");
        const consulta = addDoc(ordersCollection, orden);

        consulta
            .then((docRef) => {
                setId(docRef.id);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const Submit = () => {
        if (refName.current.value === "" || refEmail.current.value === "" || refSegundoEmail.current.value === "") {
            toast.success('Por favor, rellena los campos', {
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            toast.success('Gracias por la Compra', {
                position: toast.POSITION.TOP_CENTER,
            });
            refName.current.value = "";
            refEmail.current.value = "";
            refSegundoEmail.current.value = "";
        }
    };

    return (
        <div>
            {productos.map((item) => (
                <div key={item.id} className="producto_a_comprar">
                    <img id="imagen_compacta" src={item.img} alt={item.nombre} />
                    <h5 className="info_carrito">Producto: {item.nombre}</h5>
                    <h5 className="info_carrito">Precio: ${item.precio}</h5> 
                    <h5 className="info_carrito">X{item.cantidad}</h5>
                </div>
            ))}
            <div id="botones_carrito">
                {valorDelContexto.cantidadTotal !== 0 ? <button className="btn btn-secondary" onClick={vaciarCarrito}>vaciar el carrito</button> : <p></p>}
            </div>
            {valorDelContexto.cantidadTotal !== 0 ? (
                <form className="form" onSubmit={handleSubmit}>
                    <h5>Nombre</h5>
                    <div>
                        <input placeholder="introduzca su nombre completo" ref={refName} type="text" className="input" />
                    </div>
                    <h5>E-mail</h5>
                    <div>
                        <input placeholder="introduzca su email o telefono" ref={refSegundoEmail} type="text" className="input" />
                    </div>
                    <h5>Repetir E-mail</h5>
                    <div>
                        <input placeholder="introduzca su email o telefono" ref={refEmail} type="text" className="input" />
                    </div>
                    <button className="btn btn-secondary" id="boton_guardar" onClick={Submit}>Comprar</button>
                    {id ? <h3 id="notificacion_orden">¡Orden generada con éxito! Su ID es {id}</h3> : null}
                </form>
            ) : (
                <h1 id="carrito_vacio">¡El carrito está vacío!</h1>
            )}
            <ToastContainer />
        </div>
    );
};

export default Cart;