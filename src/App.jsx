import RootLayout from "./shared/components/layout/RootLayout";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import HowItWorksPage from './pages/HowItWorks';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProductPage from './pages/Product';
import NotFoundPage from "./pages/404";

const  App = () => {
 
  return (
      
          <Routes>
              <Route element={<RootLayout/>}>
           
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/menu" element={<MenuPage/>}/>
                  <Route path="/menu/:id" element={<ProductPage/>}/>
                  <Route path="/howItWorks" element={<HowItWorksPage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/contact" element={<ContactPage/>}/>
               
              </Route>

              <Route path="*" element={<NotFoundPage/>}/>

          </Routes>

  )
}

export default App
