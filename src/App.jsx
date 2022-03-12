import Navbar from './componentes/navbar/Navbar';
import ItemListCointainer from './componentes/itemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route, Navigate} from "react-router-dom"
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element = {<ItemListCointainer greting={"Catálogo de Productos"} />}/>
          <Route path="/category/:categoriaId" element = {<ItemListCointainer greting={"Catálogo de Productos"} />}/>
          <Route path="/p/:id" element = {<ItemDetailContainer />}/>
          <Route path="/*" element = {<Navigate to ="/" replace />}/>
          <Route path="/carrito" element = { <Cart/> } /> 
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
