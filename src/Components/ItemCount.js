import { useState } from "react";
import './estilos.scss'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ItemCount = ({handleOnAdd}) => {

    

    const [count, setCount] = useState(1);
    
    const handleSumar = (e) => {
        e.stopPropagation()      
            setCount(count + 1);
    
    }

    const handleRestar = (e) => {
        console.log(e.target)
        if(count <= 1 ){
                toast.success('No podes comprar 0 productos', {
                  position: toast.POSITION.TOP_RIGHT,
                })
        }
        else {
            setCount(count - 1);
        }   
    }

    const handleConfirmar = () => {
            if(count == 0){
                alert("nasi")
            }
            else{
                handleOnAdd(count)
            }       
    }

    const handleDivClick = (e) => {
        console.log(e.target)
    }

    return (
        <div onClick={handleDivClick}>
            <div className="counter-actions">
                <button className="btn btn-dark"id="boton-1" onClick={handleRestar}>-</button>
                
                <p className="product-number">{count}</p>
                <button className="btn btn-dark" id="boton-2" onClick={handleSumar}>+</button>
                
            </div>
            <button className="boton-confirmar" onClick={handleConfirmar}>Confirmar</button>
            <ToastContainer />
        </div>
    )

}

export default ItemCount