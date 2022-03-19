import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import Card from 'react-bootstrap/Card'

function Cart() {

    const { CartList , vaciarCart} = useContext(CartContext)
    console.log(CartList)
    return (
        <div>
            {CartList.map(item => 
            <div>
            <Card className='ProductoIndividual' style={{ width: '18rem' }}>
            <Card.Img className='ProductoImagen' variant="top" src={item.foto} />
            <Card.Body>
                <Card.Title className='titulo'>{item.nombre} X {item.cantidad}</Card.Title>
                
            </Card.Body>
        </Card>
            </div>
            )}

            <button onClick={vaciarCart}>Vaciar Carrito</button>
        </div>

    )
}

export default Cart