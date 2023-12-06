import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Producto from '../src/componentes/productos/Producto.jsx';
import Navbar from '../src/componentes/navbar/Navbar.jsx';
import Productos from './componentes/productos/Productos.jsx';
import Carrusel from './componentes/carrusel/Carrusel.jsx';
import PiePagina from './componentes/footer/Footer.jsx';
import Inicio from '../src/componentes/pages/Inicio.jsx';
import Galeria from '../src/componentes/productos/vectorProducto.jsx';
import SignIn from './componentes/pages/SignIn.jsx';
import SignUp from './componentes/pages/SignUp.jsx';
import Contactos from './componentes/pages/Contactos.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/Productos' element={<Productos/>}></Route>
            <Route path='/Galeria' element={<Galeria/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            
            <Route path='/Contactos' element={<Contactos/>}/>
        </Routes>
        <Carrusel />
        <PiePagina />
      </div>
    </Router>

  )

}

export default App;
