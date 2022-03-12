import { useEffect } from 'react';
import { useState } from 'react';
import "./ItemListContainer.css"
import { getFetch } from '../../helpers/GetFetch';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom';

function ItemListCointainer({ greting }) {
    const [Productos, SetProductos] = useState([])
    const { categoriaId } = useParams()
    console.log(categoriaId)


    useEffect(() => {
        if (categoriaId) {
            getFetch
            .then((respuesta) => SetProductos(respuesta.filter(prod =>prod.category === categoriaId)))
            .catch(err => console.log(err))
            .finally(() => console.log("loading"))
        }else{
            getFetch
            .then((respuesta) => SetProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => console.log("loading"))
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

    // useEffect(()=>{
    //     console.log("LLamada a la API siempre")
    // })

    // useEffect(()=>{
    //     console.log("LLamada a la API sólo una vez luego del montaje")
    // }, [])

    // useEffect(()=>{
    //     console.log("LLamada a la API sólo si cambia un state,prop,etc")
    // }, [Count])