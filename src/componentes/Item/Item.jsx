import Card from 'react-bootstrap/Card'

function Item({ prod }) {
    return (
        <Card className='ProductoIndividual' key={prod.id} style={{ width: '18rem' }}>
            <Card.Img className='ProductoImagen' variant="top" src={prod.foto} />
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
            </Card.Body>
        </Card>
    )

}

export default Item