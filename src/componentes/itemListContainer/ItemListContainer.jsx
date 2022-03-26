import { useEffect } from 'react';
import { useState } from 'react';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs, where, query } from "firebase/firestore"

function ItemListCointainer({ greting }) {
    const [Productos, SetProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, "items")

        if (categoriaId) {
            const queryFilter = query(queryCollection, where("category", "==", categoriaId))
            getDocs(queryFilter)
                .then(resp => SetProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
        } else {
            getDocs(queryCollection)
                .then(resp => SetProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
        }
    }, [categoriaId])

    return (
        <>
            <h1>{greting}</h1>
            <div className='Productos'>
                {Productos.length > 0 ? <ItemList Productos={Productos} /> : <Spinner className='spinner' animation="border" variant="success" />}
            </div>
        </>
    )
}

export default ItemListCointainer