import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/ItemListContainer/ItemListContainer'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
  <div >
  <NavBar />
  <ItemListContainer greeting= {"BIENVENIDOS CODERS AL BAR INTERACTIVO!"}/>
  
  </div>    


  );
}

export default App;
