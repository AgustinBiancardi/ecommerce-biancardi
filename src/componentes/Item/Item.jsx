import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import "./Item.css"


function Item({ prod }) {
    return (
        <Card className='ProductoIndividual' key={prod.id} style={{ width: '18rem' }}>
            <Card.Img className='ProductoImagen' variant="top" src={prod.foto} />
            <Card.Body>
                <Card.Title className='titulo'>{prod.nombre}</Card.Title>
                <Link to={`p/${prod.id}`}>
                    <Button variant="success" className='boton'>Detalle de producto</Button>
                </Link>
            </Card.Body>
        </Card>
    )

}

export default Item