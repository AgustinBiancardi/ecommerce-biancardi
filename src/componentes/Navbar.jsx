import '../styles/navbar.css';
import CartWidget from './CartWidget';
import logo from "../images/logoo.png"

function Navbar() {
  
    return (
        <div className="menu">
            <a className="Enlinea" href="/"><img src={logo} alt="" /></a>
            <nav className="Enlinea">
                <ul>
                    <li className="Enlinea"><a href="/">Inicio</a></li>
                    <li className="Enlinea"><a href="/">Productos</a></li>
                    <li className="Enlinea"><a href="/">FAQS</a></li>
                    <li className="Enlinea"><a href="/">Nosotros</a></li>
                    <li className="Enlinea"><a href="/"><CartWidget/></a></li>
                     
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar