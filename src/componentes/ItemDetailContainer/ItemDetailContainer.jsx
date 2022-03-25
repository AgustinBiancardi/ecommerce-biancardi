import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from 'react';
import { useState } from 'react';
import { getFetch } from '../../helpers/GetFetch';
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'





function ItemDetailContainer() {
    const [ProductoSeleccionado, SetProductoSeleccionado] = useState(undefined)
    const { id } = useParams()

    useEffect(() => {
        getFetch
            .then((respuesta) => SetProductoSeleccionado(respuesta.find(element => element.id === id)))
            .catch(err => console.log(err))
    }, [id])

    return (

        <>
            {ProductoSeleccionado != undefined ? <ItemDetail Producto={ProductoSeleccionado} /> : <Spinner className='spinner' animation="border" variant="success" />}
        </>
    )
}

export default ItemDetailContainer