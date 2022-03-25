import "./ItemDetail.css"
import {useContext, useState} from "react"
import ItemCount from '../itemCount/ItemCount';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "../../context/cartContext";

function ItemDetail({ Producto }) {
    const [ Funcionalidad, SetFuncionalidad ] = useState("agregar")
    const [ Carrito, SetCarrito ] = useState([])


    const {agregarCart , CartList} = useContext(CartContext)

    function onAdd(cantidad) {
        SetCarrito(cantidad)
        SetFuncionalidad("carrito")
        agregarCart(Producto , cantidad)
    }

    const GotoCarrito = () => {
        return (
            <div className="contenedor">
            <Link to="/" className="botonSeguir">
                <Button variant="success">Segui comprando</Button>
            </Link>
            <Link to="/carrito">
                <Button variant="success">Ir al carrito</Button>
            </Link>
            </div>
        )
    };

    return (
        <div className="Card">
            <img className="Img" src={Producto.foto} alt={Producto.nombre} />
            <div className="Body">
                <h1>{Producto.nombre}</h1>
                <p>Precio: $ {Producto.precio}</p>
                <p>Stock: {Producto.stock}</p>
                <p>{Producto.descripcion}</p>
                {Funcionalidad === "agregar"? 
                <ItemCount initial={1} stock={Producto.stock} onAdd={onAdd} /> 
                :
                <GotoCarrito />}

            </div>
        </div>
    )
}

export default ItemDetail