import Item from '../Item/Item';

function ItemList({Productos}){
    return(
        Productos.map((prod) => <Item prod = {prod} key = {prod.id}/>)
    )
    
}

export default ItemList