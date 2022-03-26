import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import "./Cart.css"

function Cart() {

    const { CartList, vaciarCart, eliminarProducto, Total } = useContext(CartContext)
    return (
        <div>
            {CartList.length > 0 ?
                <div className="carrito">
                    <div className="tabla">
                        <div>
                            <table className="table cart-items">
                                <thead>
                                    <tr>
                                        <th colSpan="2"  >Producto</th>
                                        <th  >Precio</th>
                                        <th  >Cantidad</th>
                                        <th ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CartList.map((item) => 
                                        <tr>
                                            <td><img src={item.foto} className="fotoCarrito"/></td>
                                            <td>{item.nombre}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.cantidad}</td>
                                            <td><Button variant="light" ><img src="https://i.imgur.com/5BUojiS.png" className="botonEliminar" onClick={() => eliminarProducto(item.id)} /></Button></td>
                                            
                                        </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                        <Button variant="success" onClick={vaciarCart}>Vaciar Carrito</Button>
                    </div>
                    <div className="total">
                        Total
                        {Total}
                    </div>
                </div>




                :
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/" >
                        <Button variant="success" className='botonnn' >Ver productos</Button>
                    </Link>
                </div>

            }
        </div>


    )
}

export default Cart

