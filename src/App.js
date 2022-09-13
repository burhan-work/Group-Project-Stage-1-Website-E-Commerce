import Navbar from "./components/Navbar";
import "./App.css";
import Product from "./pages/Product";
import Login from './pages/Login';
import Register from "./pages/Register";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>      
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/product' element={<Product/>} />
        {/* <Route path='/cart' element={<Cart/>} /> */}
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </>

  );
}

export default App;
