import CartWidget from '../cartWidget/CartWidget';
import logo from "../../images/logo.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
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
                                <NavLink className="link" to="category/pastas">Pastas de aceitunas</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="category/escabeches">Escabeches</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="category/mostazas">Mostazas</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="category/chutneys">Chutneys</NavLink>
                            </Nav.Link>
                        </Nav>
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