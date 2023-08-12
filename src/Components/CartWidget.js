import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CustomProvider"
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./estilos.scss"

const CartWidget = () => {

    const valorDelContexto = useContext(contexto)

    const [estado, setEstado] = useState(false)

    const abrirModal = () => {
    setEstado(true)
    }
    const cerrarModal = () => {

       setEstado(false)
    }

    const cerrarModalYFinalizarCompra = () => {
      if(valorDelContexto.cantidadTotal == 0){
        toast.success('No tienes ningun producto en el carrito', {
          position: toast.POSITION.TOP_RIGHT,
        })
        setEstado(false)
      }
      else{
        setEstado(false)
      }
    }

    return (
        <>
            <div id="carrito-navBar">
            <Link to={"/cart"} className="material-icons" id="icono-carrito">shopping_cart_checkout</Link>
            <button className="material-icons" id="boton-carrito"onClick={abrirModal}>expand_more</button>
            </div>

      <Modal isOpen={estado}>
        <ModalHeader>
          Carrito
        </ModalHeader>
        <ModalBody>
        <span className="items_cantidad">Tienes {valorDelContexto.cantidadTotal} productos en el carrito</span>
        </ModalBody>
        <ModalFooter>
            <Link className="btn-primary" to="/"onClick={cerrarModal}>Seguir Comprando</Link>
            <Link className="btn-primary" to="/cart" onClick={cerrarModalYFinalizarCompra}>Finalizar Compra</Link>
        </ModalFooter>
      </Modal>
      <ToastContainer />
        </>
           
    )
}

export default CartWidget
