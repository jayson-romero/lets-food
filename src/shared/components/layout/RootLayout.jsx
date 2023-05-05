import PropTypes from 'prop-types'
import Footer from '../partials/Footer'
import {  Outlet } from 'react-router-dom';
import NavBar from '../partials/NavBar';

const RootLayout = ({size}) => {
  return (
    <div className='RootLayout relative'>
    
      <NavBar size={size}/>
    
      {/* <Header/> */}
        <Outlet/>
      <Footer/>
    </div>
  )
}

RootLayout.propTypes = {
  size: PropTypes.number,
  
}

export default RootLayout