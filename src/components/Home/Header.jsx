import heroImg from '../../assets/hero-img.png';
import styles, { layout }  from '../../style';
import { Link } from 'react-router-dom'
import  noodle  from '../../assets/hero-noodle-img.png'
import dots from '../../assets/hero-dots-img.png'

const Header = () => {
  return (
    <div className='hero-section bg-lightbg relative'>

         <div className='absolute top-[700px] lg:top-[550px] xl:left-[220px]'>
            <img src={noodle} alt="noodle-shape" />
         </div>

         <div className='absolute top-[25px] lg:top-[100px] sm:right-[100px] xl:right-[360px]'>
            <img src={dots} alt="dots-shape"/>
         </div>


      <div className={`${styles.maxWidth}  ${styles.paddingX} ${layout.section} gap-[20px] `}> 



         <div className={`${layout.sectionInfo} font-Readex z-10 `}>
            <h1 className={`${styles.heading} max-w-[480px] pb-[21px]`}>Be The Fastest In Delivery Your <span>Food</span></h1>
            <p className='max-w-[370px] pb-[23px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet</p>
            <button className='btn'>
               <Link to="/menu">Get Started</Link>
            </button>
         </div>   

         <img src={heroImg} alt="hero-img" className={`${layout.sectionImg} sm:max-w-[500px] sm:m-auto z-10`} />  

       

      </div> 

       
    </div>
  )
}

export default Header