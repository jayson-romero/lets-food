import { UseGlobalContext } from './context'



const CartContainer = () => {
   const { cart } = UseGlobalContext() 

   if (cart.length === 0) {
     return (
       <section className='cart'>
         {/* cart header */}
         <header>
           <h2>your bag</h2>
           <h4 className='empty-cart'>is currently empty</h4>
         </header>
       </section>
     )
   }


  return (
    <div>
       

      test

    </div>
  )
}

export default CartContainer
