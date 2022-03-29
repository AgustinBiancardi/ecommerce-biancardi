import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import "./Cart.css"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import Modal from 'react-bootstrap/Modal'

function Cart() {
    const { CartList, SetCartList, vaciarCart, eliminarProducto, Total } = useContext(CartContext)
    const [Nombre, SetNombre] = useState("")
    const [Email, SetEmail] = useState("")
    const [Numero, SetNumero] = useState()
    const [show, setShow] = useState(false);
    const [IdOrden, setIdOrden] = useState("")

    const handleClose = () => {
        setShow(false)
        let campos = []
        campos = document.getElementsByClassName("campo")
        for (let i = 0; i < campos.length; i++) {
            campos[i].value = ""
        }
        SetCartList([])
    }
    const handleShow = () => setShow(true);

    const generarOrden = async (e) => {
        e.preventDefault()
        if (Nombre && Email && Numero) {
            let orden = {}

            orden.buyer = { name: Nombre, phone: Numero, email: Email }
            orden.total = Total

            orden.items = CartList.map(item => {
                const id = item.id;
                const nombre = item.nombre;
                const precio = item.precio * item.cantidad
                return { id, nombre, precio }
            })

            const db = getFirestore()
            const querycollection = collection(db, "orders")
            addDoc(querycollection, orden)
                .then(docRef => {
                    console.log("Document written with ID: ", setIdOrden(docRef.id));
                })
                .catch(error => console.log(error))

            const querycollectionUpdate = collection(db, "items")
            const queryUpdate = await query(querycollectionUpdate,
                where(documentId(), "in", CartList.map(item => item.id))
            )
            const batch = writeBatch(db)

            await getDocs(queryUpdate)
                .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                    stock: res.data().stock - CartList.find(item => item.id === res.id).cantidad
                })))
            batch.commit()

            handleShow()

        } else {
            alert("Faltan completar campos")
        }


    }


    return (
        <div>
            {CartList.length > 0 ?
                <div className="carrito">
                    <div className="tabla">
                        <div>
                            <table className="table cart-items">
                                <thead>
                                    <tr>
                                        <th colSpan="2"  >Producto</th>
                                        <th  >Precio</th>
                                        <th  >Cantidad</th>
                                        <th ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CartList.map((item) =>
                                        <tr>
                                            <td><img src={item.foto} alt={item.nombre} className="fotoCarrito" /></td>
                                            <td>{item.nombre}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.cantidad}</td>
                                            <td><Button variant="light" ><img src="https://i.imgur.com/5BUojiS.png" alt="eliminar producto" className="botonEliminar" onClick={() => eliminarProducto(item.id)} /></Button></td>

                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Button variant="success" onClick={vaciarCart}>Vaciar Carrito</Button>
                        <br />
                    </div>
                    <div className="total">
                        <h1>Total: $ {Total}</h1>
                        <form >
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" required placeholder="Nombre" onChange={event => SetNombre(event.target.value)} className="campo" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" required placeholder="Email" onChange={event => SetEmail(event.target.value)} className="campo" />
                            </div>
                            <div>
                                <label htmlFor="phone">Telefono</label>
                                <input type="number" required placeholder="Telefono" onChange={event => SetNumero(event.target.value)} className="campo" />
                            </div>
                            <input type="submit" onClick={generarOrden} value="Terminar compra" />
                        </form>
                    </div>

                    <>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>¡Compra confirmada!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>¡Muchas gracias por comprar en D'Gustar! Tu numero de orden es: {IdOrden}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={handleClose}>
                                    Cerar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
                :
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/" >
                        <Button variant="success" className='botonnn' >Ver productos</Button>
                    </Link>
                </div>
            }

        </div>
    )
}

export default Cart

