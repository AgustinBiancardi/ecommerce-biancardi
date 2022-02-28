import Navbar from './componentes/navbar/Navbar';
import ItemListCointainer from './componentes/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <div>

      <Navbar/>
      <ItemListCointainer greting = {"Catálogo de Productos"}/> 
    </div>
    
  );
 
}

export default App;
