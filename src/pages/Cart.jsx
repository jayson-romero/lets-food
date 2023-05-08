
import { useState, useEffect } from "react"
import styles from "../style";
import {BiArrowBack} from 'react-icons/bi'
import { Link } from "react-router-dom";

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
    <div className={`${styles.smallWidth} ${styles.paddingX} ${styles.paddingY}`}>
      <Link to="/menu" className="flex items-center py-[20px]">
         <BiArrowBack/>
      <span className="pl-[5px]">
        Back to Menu
      </span>   
      </Link>
         {
           cart?.map((item)=> (
             <div className="flex gap-[20px] items-center sm:justify-around " key={item.id}>
                <div className="">
                    <img src={item.img} alt="img"/>
    
                </div>

              <div className=" flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-Readex text-[20px]">{item.title}</p>
                  <div className="flex gap-[20px]">
                    <button onClick={()=>handleChange(item, +1)} 
                    className="text-[20px]">+</button>
                    <p>{item.amount}</p>
                    <button onClick={()=>handleChange(item, -1)}>-</button>
                  </div>
                </div>

                <div> 
                   <p  className="font-Readex text-[25px]">${item.prize}</p>
                   <button className="btn w-[120px] p-0 mt-[20px]" onClick={()=> handleRemove(item.id)}>remove</button>
                </div>
              </div>

             </div>
           ))
         }
          <hr className="bg-lightblack h-[2px] w-full my-[40px]"/>
         <div className="flex justify-around">

           <p className="font-Readex text-[25px]">Total Price:</p>
           <p className="font-Readex text-[25px]">${price}</p>
         </div>

    </div>
  )
}

export default Cart