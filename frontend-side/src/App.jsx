import { Routes, Route, useLocation, Navigate, BrowserRouter } from 'react-router-dom';
import ProductList from "./components/ProductList";
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Register from './components/Register';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Welcome /></>} />
          {/* <Route path='/' element={<Welcome />} /> */}
          <Route path='/Login' element={<><Navbar /><Login /></>} />
          <Route path='/Register' element={<><Navbar /><Register /></>} />
          <Route path='/Catalog' element={<><Navbar /><Catalog /></>} />
          <Route path='/ProductList' element={<><Navbar /><ProductList /></>} />
          <Route path='/AddProduct' element={<AddProduct />} />
          <Route path='/EditProduct/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
