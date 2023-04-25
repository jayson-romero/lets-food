import PropTypes from 'prop-types'
import {AiFillHeart} from 'react-icons/ai'

const ProductCard = ({img, title, desc, prize, favorite }) => {
  return (
    <div className='product-card-section'>
         <div  className={`card h-[290px] sm:h-[400px]  relative`}>
               <img src={img} alt={title} className="" />

               <div className="info bg-[#FFFFFF] font-Readex absolute bottom-0 left-0">
                  <h3 className='font-medium text-black text-[18px] sm:text-[20px] sm:mb-[5px]'>{title}</h3>
                  <p className='text-[16px] sm:text-[18px] mb-[5px] sm:mb-[13px]'>{desc}</p>
                  <div className='flex justify-between'>
                    <p className='text-[20px]'>$ {prize}</p>
                    <AiFillHeart className={`${favorite ? 'text-primary' : "text-black"} w-[24px] h-[24px]`}/>
                  </div>
               </div>
            </div>
    </div>
  )
}

ProductCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  prize: PropTypes.number,
  favorite: PropTypes.bool
}

export default ProductCard
