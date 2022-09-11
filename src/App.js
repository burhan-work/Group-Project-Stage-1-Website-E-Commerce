import Navbar from "./components/Navbar";
import "./App.css";
import Product from "./pages/Product";
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
      </Routes>
    </>
  );
}

export default App;
