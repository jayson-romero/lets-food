import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import {FiSearch} from 'react-icons/fi';
import {FaShoppingCart, FaSignInAlt} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import styles from '../../../style';


const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  
 
  return (
    <div className='bg-lightbg'>
      <div className={`${styles.maxWidth} ${styles.flexCenter} ${styles.paddingX} gap-[25px] font-Readex justify-between py-[30px]`}>

        <img src={logo} alt="logo" className='max-w-[167px] max-h-[47px]'/>

  {/*For Small Devices / Menu button */}
      <div className='flex items-center gap-[20px] sm:gap-[30px] md:hidden'>
      <FiSearch  className='icon'/>
      <Link to="/cart">
          <FaShoppingCart className='icon'/>
      </Link> 
      <button className='hidden sm:flex btn'>
              <FaSignInAlt className='icon'/>
              Sign In
      </button>
      { toggle ? 
      <CgClose className='icon' onClick={() => setToggle((prev) => !prev)} /> 
      :<GiHamburgerMenu className='icon' onClick={() => setToggle((prev) => !prev)} />
      }
      </div>
    
  {/*For Small Devices / Modal */}
      <div
      className={`${toggle ? 'flex' : 'hidden' } flex-col bg-lightbg absolute top-20  right-0 w-full h-full py-[100px] gap-[40px] z-20`}
      >
  {/*For Small Devices / Modal links */}     
        <div className='flex flex-col items-center gap-[30px]'>
          <Link to="/" 
          className='navbar-link' 
          onClick={() => setToggle((prev) => !prev)}>Home</Link>
          <Link to="/menu" 
          className='navbar-link' 
          onClick={() => setToggle((prev) => !prev)}>Menu</Link>
          <Link to="/howItWorks"
          className='navbar-link' 
          onClick={() => setToggle((prev) => !prev)}>How It Works</Link>
          <Link to="/about" 
          className='navbar-link' 
          onClick={() => setToggle((prev) => !prev)}>About</Link>
          <Link to="/contact"
          className='navbar-link'
            onClick={() => setToggle((prev) => !prev)}>Contact</Link>
        </div>

        <div className={`${styles.flexCenter} sm:hidden`}> 
          <button className='btn flex'>
              <FaSignInAlt className='icon'/>
              Sign In
          </button>
        </div>

      </div>

  {/*For Big Devices / navbar links */}
        <div className={`${styles.flexCenter} gap-[37px] hidden md:flex`}>
        <Link to="/" className='navbar-link hover:cursor-default'>Home</Link>
        <Link to="/menu" className='navbar-link'>Menu</Link>
        <Link to="/howItWorks" className='navbar-link'>How It Works</Link>
        <Link to="/about" className='navbar-link'>About</Link>
        <Link to="/contact" className='navbar-link'>Contact</Link>
        </div>

        <div className={`${styles.flexCenter} gap-[32px] hidden md:flex`}> 
          <FiSearch  className='icon'/>

          <div className='relative h-[44px] w-[44px] flex items-center'>
            <Link to="/cart">
            <FaShoppingCart className='icon'/>
            <div className='w-[15px] h-[15px] absolute top-0 right-3 text-center'>
              <p className=' rounded-full font-black text-[14px] bg-primary '>0</p>
            </div>
            </Link>

          </div>
            
          <button className='btn flex'>
              <FaSignInAlt className='icon'/>
              Sign In
          </button>
        </div>

      
      </div>

     
    </div> 
  )
}

export default NavBar
