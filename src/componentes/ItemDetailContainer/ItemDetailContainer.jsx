import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from 'react';
import { useState } from 'react';
import { getFetch } from '../../helpers/GetFetch';
import { useParams } from "react-router-dom"




function ItemDetailContainer (){
    const [ProductoSeleccionado, SetProductoSeleccionado] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getFetch
            .then((respuesta) => SetProductoSeleccionado(respuesta.find(element => element.id === id)))
            .catch(err => console.log(err))
            .finally(console.log("loading"))
    }, [])

    return(
        
        <ItemDetail Producto = {ProductoSeleccionado}/>
    )
}

export default ItemDetailContainer