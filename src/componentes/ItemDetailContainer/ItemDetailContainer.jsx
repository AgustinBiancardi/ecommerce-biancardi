import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import {getFirestore , doc , getDoc} from "firebase/firestore"

function ItemDetailContainer() {
    const [ProductoSeleccionado, SetProductoSeleccionado] = useState(undefined)
    const { id } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryDb = doc(db , "items",id)
        getDoc(queryDb)
        .then(resp =>SetProductoSeleccionado({id:resp.id, ...resp.data()}))
    },[])

    return (

        <>
            {ProductoSeleccionado != undefined ? <ItemDetail Producto={ProductoSeleccionado} /> : <Spinner className='spinner' animation="border" variant="success" />}
        </>
    )
}

export default ItemDetailContainer