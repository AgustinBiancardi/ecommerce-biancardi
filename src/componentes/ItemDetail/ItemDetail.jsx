import "./ItemDetail.css"
// import Card from 'react-bootstrap/Card'

function ItemDetail({Producto}){

    console.log(Producto)
    return (
        <div className="Card">
        <img className = "Img"src={ Producto.foto } alt= {Producto.nombre} />
        <div className="Body">
            <h1>{ Producto.nombre }</h1>
            <p>Precio: $ { Producto.precio }</p>
            <p>Stock: { Producto.stock }</p>
            <p>{ Producto.descripcion }</p>
        </div>
        </div>
    )
}

export default ItemDetail