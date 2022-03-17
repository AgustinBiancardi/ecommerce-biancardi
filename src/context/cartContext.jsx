import { createContext, useState } from "react";

export const cartContext = createContext([]);

function CartContextProvider(){
    const  [CartList, SetCartList] = useState([])

    function agregarCart(item){
        SetCartList(...CartList, item)
    }

    return(
        <cartContext.Provider value={{
            CartList,
            agregarCart
        }}>
            {/* {children} */}
        </cartContext.Provider>
    )
}

export default CartContextProvider