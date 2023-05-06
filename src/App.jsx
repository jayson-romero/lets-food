
import RootLayout from "./shared/components/layout/RootLayout";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import HowItWorksPage from './pages/HowItWorks';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProductPage from './pages/Product';
import NotFoundPage from "./pages/404";
import CartPage from "./pages/Cart";
import { useState } from "react";




const  App = () => {

    const [cart , setCart ] = useState([]);
    const [warning, setWarning] = useState(false)
 
    const handleClick = (item) => {
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id)
        isPresent = true;
      })
      if (isPresent) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false)
        },2000)
        return;
      }
        
      setCart([...cart, item])
    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
          if(data.id === item.id)
            ind = index
        })
        const tempArr = cart
        tempArr[ind].amount += d

        if (tempArr[ind].amount === 0)
           tempArr[ind].amount = 1;
          setCart([...tempArr])
    }

  return (
      
          <Routes>
              <Route element={<RootLayout size={cart.length}/>}>
           
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/menu" element={<MenuPage/>}/>
                  <Route path="/menu/:id" element={<ProductPage handleClick={handleClick} warning={warning}/>}/>
                  <Route path="/howItWorks" element={<HowItWorksPage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/contact" element={<ContactPage/>}/>
                  <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
               
              </Route>

              <Route path="*" element={<NotFoundPage/>}/>

          </Routes>

  )
}



export default App
