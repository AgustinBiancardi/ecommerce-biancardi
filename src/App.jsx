import Navbar from './componentes/navbar/Navbar';
import ItemListCointainer from './componentes/itemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <div>

      <Navbar/>
      <ItemListCointainer greting = {"Catálogo de Productos"}/> 
      <ItemDetailContainer/>
    </div>
    
  );
 
}

export default App;
