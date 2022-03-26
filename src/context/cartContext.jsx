import { createContext, useState } from "react";
import { useEffect } from 'react';


export const CartContext = createContext([]);

function CartContextProvider({ children }) {
    const [CartList, SetCartList] = useState([])
    const [Total, SetTotal] = useState()

    function agregarCart(item, cantidad) {

        let repetido
        if (repetido = CartList.find(elemento => elemento.id === item.id)) {
            repetido.cantidad += cantidad
            SetCartList([...CartList])
        } else {
            item.cantidad = cantidad
            SetCartList([...CartList, item])
        }

    }

    function vaciarCart() {
        SetCartList([])
    }

    function eliminarProducto(id){
        let newCartList = CartList.filter((item) => item.id !== id);
        SetCartList(newCartList)
    }

    useEffect(()=>{
        let total = 0
        CartList.forEach(item => {
            total += (item.cantidad * item.precio)
        });
        SetTotal(total)
    }, [CartList])
    function calcularTotal(CartList){
        
    }


    return (
        <CartContext.Provider value={{
            CartList,
            Total,
            agregarCart,
            vaciarCart,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider