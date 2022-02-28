import Card from 'react-bootstrap/Card'
import ItemCount from '../itemCount/ItemCount';

function Item({ prod }) {
    return (
        <Card key={prod.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.foto} />
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                <ItemCount initial={1} stock={8} />
            </Card.Body>
        </Card>
    )

}

export default Item