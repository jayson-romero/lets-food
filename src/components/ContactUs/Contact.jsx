import style from '../../style'

const Contact = () => {
  return (
    <div className= {`${style.maxWidth} ${style.paddingX} ${style.paddingY} flex`}>
         <form className='flex-1'>
               <label className="block">First Name</label>
               <input type="text"
                  className="w-1/2  border border-black p-[5px]"
                  placeholder='First Name'>   
               </input>

               <label className="block">Last Name</label>
               <input type="text"
                  className="border border-black p-[5px]"
                  placeholder='Last Name'>
               </input>

               <label className="block">Message</label>
               <textarea type="message" 
                   className='border border-black p-[5px] w-[196px] mb-[10px]'
                   placeholder='Message'>
               </textarea>

               <button type="submit" className=" w-full btn block"> Submit</button>
         </form>
         <div className='flex-1'>test</div>
    </div>
  )
}

export default Contact