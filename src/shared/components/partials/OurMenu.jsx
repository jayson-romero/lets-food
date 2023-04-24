import Header from "./Header"
import styles from "../../../style"
import {menu} from "../../../utilities/data"

const OurMenu = () => {

      const favorite = menu.filter((item) => {
         return item.favorite === true
      })


  return (
   <div className={`${styles.paddingY} howItWorks-section`}>

   <Header head = "Our Menu"
           title ="Our Popular Menu"
           desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."/>

   <div className={`${styles.maxWidth} ${styles.paddingX} flex flex-col sm:flex-row gap-[24px] justify-center  items-center `}>
      {
         favorite.map((product) => (
            <div key={product.id} className={`card relative`}>

               <img src={product.img} alt={product.title} className="w-[230px]" />

               <div className="bg-[#FFFFFF] absolute bottom-0 left-0">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
               </div>

            </div>
         ))
      }

   </div>

</div>
  )
}

export default OurMenu