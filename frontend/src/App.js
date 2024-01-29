import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCatagory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        < Route path='/' element={<Shop/>}/>
        < Route path='/men' element={<ShopCatagory banner={men_banner} catagory="Men"/>}/>
        < Route path='/women' element={<ShopCatagory banner={women_banner} catagory="Women"/>}/>
        < Route path='/Kids' element={<ShopCatagory banner={kids_banner} catagory="Kids"/>}/>
        < Route path='/product' element={<Product/>}/>
          < Route path=':productid' element={<Product/>}/>
    
      < Route path='/cart' element={<Product/>}/>
      < Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
