
import Footer from '../partials/Footer'
import {  Outlet } from 'react-router-dom';
import NavBar from '../partials/NavBar';

const RootLayout = ( ) => {
  return (
    <div className='RootLayout relative'>
    
      <NavBar/>
    
      {/* <Header/> */}
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout