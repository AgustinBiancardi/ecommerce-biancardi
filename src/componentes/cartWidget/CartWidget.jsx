import carrito from "../../images/carrito.png"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import "./CartWidget.css"

function CartWidget (){

const { CartList } = useContext(CartContext)
let cantidadCarrito = 0
CartList.forEach(element => {
    cantidadCarrito += element.cantidad
});

return(
    <div>
        <img src={carrito} width={50}  alt="" />
        <label className="contadorCarrito"> {cantidadCarrito ? cantidadCarrito:""} </label>
    </div>
)
}

export default CartWidget