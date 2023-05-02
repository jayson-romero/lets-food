import style from '../../style'

const Contact = () => {
  return (
    <div className= {`${style.maxWidth} ${style.paddingX} ${style.paddingY} ${style.flexCenter} pt-[40px]`}>
         <form className='w-[700px] '>
               <label className="block pb-[5px] font-Readex text-[20px]">First Name:</label>
               <input type="text"
                  className="w-full border border-lightblack p-[5px] mb-[20px] text-[20px] focus:border-primary"
                  placeholder='First Name'>   
               </input>

               <label className="block pb-[5px]  font-Readex text-[20px]">Last Name:</label>
               <input type="text"
                  className="w-full  border border-lightblack p-[5px] mb-[20px] text-[20px]"
                  placeholder='Last Name'>
               </input>

               <label className="block pb-[5px] font-Readex text-[20px]">Message:</label>
               <textarea type="message" 
                   className='w-full  border border-lightblack p-[5px] w-[196px] mb-[20px] text-[20px] h-[250px]'
                   placeholder='Type your Message here'>
               </textarea>

               <button type="submit" className=" w-full btn block"> Submit</button>
         </form>
  
    </div>
  )
}

export default Contact