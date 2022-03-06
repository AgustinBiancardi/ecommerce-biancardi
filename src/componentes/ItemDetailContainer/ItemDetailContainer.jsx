import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from 'react';
import { useState } from 'react';
import { getFetch } from '../../helpers/GetFetch';



function ItemDetailContainer (){
    const [ProductoSeleccionado, SetProductoSeleccionado] = useState([])


    useEffect(() => {
        getFetch
            .then((respuesta) => SetProductoSeleccionado(respuesta.find(element => element.id === 5)))
            .catch(err => console.log(err))
            .finally(() => console.log("loading"))
    }, [])

    return(
        <ItemDetail Producto = {ProductoSeleccionado}/>
    )
}

export default ItemDetailContainer