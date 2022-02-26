import ItemCount from '../itemCount/ItemCount';

function ItemListCointainer({greting}) {
    return (
        <div>
            <h1>{greting}</h1>
            <ItemCount initial ={1} stock = {8} />
        </div>
        
    )
}

export default ItemListCointainer