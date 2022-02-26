import { useState , useEffect } from "react";
import './itemCount.css';


function Clase4({initial,stock}) {

    const [Count,SetCount] = useState(initial)
    const [Stock,SetStock] = useState(stock)
    const [Mensaje,SetMensaje] = useState ("")
    const [Boolean,SetBoolean] = useState(false)

    function restarProducto(){
        if(Count>1){
            SetCount(Count - 1)
        }   
    }

    function sumarProducto(){
        if(Count<Stock){
            SetCount(Count + 1)  
        }
    }   

    function vaciarStock(){
        SetStock(Stock - Count)
    }

    useEffect(()=>{
        if(Count === 0){
            SetMensaje("No hay mas productos de este tipo")
            SetBoolean(true)
        }else if(Count >= Stock){
            SetMensaje("Es el máximo de productos que hay en stock")
        }else if(Count<= 1){
            SetMensaje( "Estás en la cantidad mínima de un producto")
        }else {
            SetMensaje("")
        }
    }, [Count])
    
    useEffect(()=>{
        if(Stock === 0){
            SetCount(0)
        }else{
            SetCount(1)
        }
    }, [Stock])

    return (

        <div className="itemCount">
            <div className="Elementos">
                <button disabled = {Boolean} onClick={ restarProducto }> - </button>
                <label>{ Count }</label>
                <button disabled = {Boolean} onClick={ sumarProducto }> + </button>
            </div>
            <button className = "boton" disabled = {Boolean} onClick={vaciarStock} >Agregar al carrito</button>
            <br />
            <p>{ Mensaje }</p>   
        </div>
    )
}

export default Clase4