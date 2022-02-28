import Item from '../Item/Item';

function ItemList({Productos}){
    return(
        Productos.map((prod) => <Item prod = {prod}/>)
    )
    
}

export default ItemList