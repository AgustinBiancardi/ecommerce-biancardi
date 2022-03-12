import "./ItemDetail.css"
import ItemCount from '../itemCount/ItemCount';

function ItemDetail({Producto}){

    function onAdd(cantidad) {
        console.log(cantidad)
    }

    console.log(Producto)

    return (
        <div className="Card">
        <img className = "Img"src={ Producto.foto } alt= {Producto.nombre} />
        <div className="Body">
            <h1>{ Producto.nombre }</h1>
            <p>Precio: $ { Producto.precio }</p>
            <p>Stock: { Producto.stock }</p>
            <p>{ Producto.descripcion }</p>
            <ItemCount initial={1} stock={ Producto.stock } onAdd={onAdd} />
        </div>
        </div>
    )
}

export default ItemDetail