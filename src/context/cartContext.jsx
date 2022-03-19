import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
    const [CartList, SetCartList] = useState([])

    function agregarCart(item, cantidad) {

        let repetido
        if (repetido = CartList.find(elemento => elemento.id === item.id)) {
            console.log("hay un item asi")
            repetido.cantidad += cantidad
        } else {
            console.log("se agrega el producto porque no hay ninguno")
            item.cantidad = cantidad
            SetCartList([...CartList, item])
        }

    }

    function vaciarCart() {
        SetCartList([])
    }

    return (
        <CartContext.Provider value={{
            CartList,
            agregarCart,
            vaciarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider