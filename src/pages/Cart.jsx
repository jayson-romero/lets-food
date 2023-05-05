import { useState } from "react"
import styles from "../style";

const Cart = ({cart, setCart}) => {
  const [ price,  setPrice] = useState(0);

  return (
    <div className={`${styles.maxWidth} ${styles.paddingX} ${styles.paddingY}`}>
         
         {
           cart.map((item)=> (
             <div className="flex gap-[20px] items-center " key={item.id}>
                <div className="">
                    <img src={item.img} alt="img"/>
    
                </div>

              <div className=" flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-Readex text-[20px]">{item.title}</p>
                  <div className="flex gap-[20px]">
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <div> 
                   <p  className="font-Readex text-[20px]">{item.prize}</p>
                   <button className="btn w-[120px] p-0">remove</button>
                </div>
              </div>

             </div>
           ))
         }
         <div>
           <span>Total Price:</span>
           <span> {price}</span>
         </div>

    </div>
  )
}

export default Cart