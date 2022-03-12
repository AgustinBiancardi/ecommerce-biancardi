import CartWidget from '../cartWidget/CartWidget';
import logo from "../../images/logo.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function NavBar() {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <NavLink to="/">
                        <img
                            src={logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <NavLink to="category/pastas">Pastas de aceitunas</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="category/escabeches">Escabeches</NavLink>
                            </Nav.Link>

                            <Nav.Link href="/">Blog</Nav.Link>
                            <Nav.Link href="/">Nosotros</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Buscar producto"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                        <NavLink to="carrito">
                            <CartWidget />
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar