import { useParams } from "react-router-dom"
import {menu} from '../utilities/data'
import {AiFillHeart} from 'react-icons/ai'
import styles from "../style"


const ProductPage = ({handleClick, warning}) => {

  const { id } = useParams()

  const product = menu.filter((item) => {
    return item.id === id
  })



  return (
    <div className="product-section">
        <div className={`${styles.maxWidth}  ${styles.paddingY} 
        ${styles.paddingX} pt-[80px]`}>
         
            
                {
                  product.map((item)=> (
                  <div className="flex gap-[50px] pb-[40px]" key={item.id}>    
                    <div className="flex-1 flex justify-center" >
                      <img src={item.img} alt="img" className="" />
                      <AiFillHeart className={`${item.favorite ? 'text-primary' : "text-black"} w-[24px] h-[24px]`}/>
                    </div>

                    <div className="flex-1 font-Readex">
                      <h3 className="text-[20px] xs:text-[40px]"> {item.title}</h3>
                      <p className="text-[15px] xs:text-[30px] pb-[10px]">{item.desc}</p>
                      <p className="text-[30px] xs:text-[50px] pb-[30px] ss:pb-[50px]">${item.prize}</p>

                      <button className="btn" onClick={() => handleClick(item)} >Add to Cart</button>
                    </div>
                   
                  </div>
                  ))

                }
            
              {
              warning &&
              <div className="font-Readex text-red text-[20px] text-center ">Item is already added to your cart</div>
              }
           
        </div>

       
    </div>
  )
}

export default ProductPage