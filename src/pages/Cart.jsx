
import { useState, useEffect } from "react"
import styles from "../style";

const Cart = ({cart, setCart, handleChange}) => {
  const [ price,  setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.prize
    })
    setPrice(ans)
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item)=> item.id !== id);
    setCart(arr)
   // handlePrice()
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <div className={`${styles.maxWidth} ${styles.paddingX} ${styles.paddingY}`}>
         
         {
           cart?.map((item)=> (
             <div className="flex gap-[20px] items-center " key={item.id}>
                <div className="">
                    <img src={item.img} alt="img"/>
    
                </div>

              <div className=" flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-Readex text-[20px]">{item.title}</p>
                  <div className="flex gap-[20px]">
                    <button onClick={()=>handleChange(item, +1)}>+</button>
                    <p>{item.amount}</p>
                    <button onClick={()=>handleChange(item, -1)}>-</button>
                  </div>
                </div>

                <div> 
                   <p  className="font-Readex text-[20px]">{item.prize}</p>
                   <button className="btn w-[120px] p-0" onClick={()=> handleRemove(item.id)}>remove</button>
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