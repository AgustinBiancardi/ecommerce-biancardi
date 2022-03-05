import { useState, useEffect } from "react";
import './itemCount.css';
import Button from 'react-bootstrap/Button'

function Clase4({ initial, stock , onAdd }) {

    const [Count, SetCount] = useState(initial)
    const [Stock, SetStock] = useState(stock)
    const [Mensaje, SetMensaje] = useState("")
    const [Boolean, SetBoolean] = useState(false)

    function restarProducto() {
        if (Count > 1) {
            SetCount(Count - 1)
        }
    }

    function sumarProducto() {
        if (Count < Stock) {
            SetCount(Count + 1)
        }
    }

    function vaciarStock() {
        SetStock(Stock - Count)
        onAdd(Count)
    }

    useEffect(() => {
        if (Count === 0) {
            SetMensaje("No hay mas productos de este tipo")
            SetBoolean(true)
        } else if (Count >= Stock) {
            SetMensaje("Es el máximo de productos que hay en stock")
        } else {
            SetMensaje("")
        }
    }, [Count])

    useEffect(() => {
        if (Stock === 0) {
            SetCount(0)
        } else {
            SetCount(1)
        }
    }, [Stock])

    return (

        <div className="itemCount">
            <div className="Elementos">
                <Button variant="success" disabled={Boolean} onClick={restarProducto} >-</Button>
                <label>{Count}</label>
                <Button variant="success" disabled={Boolean} onClick={sumarProducto} >+</Button>
            </div>
            <Button variant="success boton" disabled={Boolean} onClick={vaciarStock} >Agregar al carrito</Button>
            <br />
            <p>{Mensaje}</p>
        </div>
    )
}

export default Clase4