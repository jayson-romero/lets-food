import Header from "./Header"
import styles from "../../../style"
import ProductCard from "./ProductCard"
import {menu} from "../../../utilities/data"

import { Link } from "react-router-dom"

const OurMenu = () => {

      const favorite = menu.filter((item) => {
         return item.popular === true
      })


  return (
   <div className={`${styles.paddingY} ${styles.maxWidth}  howItWorks-section`}>

   <Header head = "Our Menu"
           title ="Our Popular Menu"
           desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."/>

   <div className={` ${styles.paddingX} grid grid-cols-2  md:grid-flow-row md:grid-cols-4 gap-[24px]`}>
   
      {
         favorite.map((product) => (
            <Link key={product.id} to={`/menu/${product.id}`}>
              <ProductCard {...product}/>
            </Link>
         ))
      }   
   </div>
   <Link to="/menu">
      <div className={`${styles.flexCenter} mt-[68px]`}>
       <button 
       className={`${styles.flexCenter} btn`}>More Menu</button>
       </div>
   </Link>
</div>
  )
}

export default OurMenu