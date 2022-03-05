import { useEffect } from 'react';
import { useState } from 'react';
import "./ItemListContainer.css"
import { getFetch } from '../../helpers/GetFetch';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner'
import ItemCount from '../itemCount/ItemCount';

function ItemListCointainer({ greting }) {
    const [Productos, SetProductos] = useState([])


    useEffect(() => {
        getFetch
            .then((respuesta) => SetProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => console.log("loading"))
    }, [])

    console.log(Productos)

    function onAdd(cantidad) {
        console.log(cantidad)
    }

    return (
        <>
            <h1>{greting}</h1>
            <div className='Productos'>
                {Productos.length > 0 ? <ItemList Productos={Productos} /> : <Spinner animation="border" variant="success" />}
            </div>
            <ItemCount initial={1} stock={8} onAdd={onAdd} />
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