import { useEffect } from 'react';
import { useState } from 'react';
import "./ItemListContainer.css"
import { getFetch } from '../../helpers/GetFetch';
import ItemList from '../ItemList/ItemList';



function ItemListCointainer({ greting }) {
    const [Productos, SetProductos] = useState([])

    useEffect(() => {
        getFetch
            .then((respuesta) => SetProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => console.log("loading"))
    }, [])

    console.log(Productos)

    return (
        <>
            <h1>{greting}</h1>
            <div className='Productos'>
                <ItemList Productos = {Productos}/>
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