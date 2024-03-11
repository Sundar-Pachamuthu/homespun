import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductsDiplay from './Pages/ProductsDiplay';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer' ;
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (   
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/breakfast' element={< ProductsDiplay banner={null} category="breakfast" />} /> 
        <Route path='/lunch' element={< ProductsDiplay banner={null} category="lunch" />} /> 
        <Route path='/dinner' element={< ProductsDiplay banner={null} category="dinner" />} /> 
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/login' element={<LoginSignup />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </div>
  );
}   

export default App;
