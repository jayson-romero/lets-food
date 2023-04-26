import { useState } from 'react';

import styles, {layout} from "../../../style";
import Header from '../partials/Header';
import {wtsimg1, wtsimg2, wtsimg3} from '../../../assets'
import {reviews} from '../../../utilities/data' 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const WhatTheySay = () => {

   const [index, setIndex] = useState(0);
  const { name, comment, img } = reviews[index];


  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
   setIndex((index) => {
     let newIndex = index + 1;
     return checkNumber(newIndex);
   });
 };

 const prevPerson = () => {
   setIndex((index) => {
     let newIndex = index - 1;
     return checkNumber(newIndex);
   });
 };



  return (
    <div className="whatTheySay-section">
         <div className={`${layout.section} ${layout.sectionReverse} ${styles.smallWidth} gap-[30px] md:gap-[101px]`}>
               
               <div className={`${styles.paddingX} ${layout.sectionImg}`}>

                     <div className="grid grid-rows-2 grid-flow-col  h-[431px] w-[365px] sm:w-[431px] ">
                     
                        <img src={wtsimg1} alt="" className="object- col-span-2 h-full w-full"/>
                        <img src={wtsimg2} alt="" className="object-fill h-full w-full"/>
                        <img src={wtsimg3} alt="" className="object-fill h-full w-full"/>
                     </div>

               </div>

               <div className={`${styles.paddingX}`}>
                     <Header  head = "What the say"
                           title ="What Our Customers Say About Us"
                           desc =""/>

                     <article className='review flex gap-[30px] items-center  '>
                           <FaChevronLeft className='w-[50px] h-[50px] text-primary cursor-pointer'
                           onClick={prevPerson} />
                           <div className='bg-[#F1F1F1] py-[29px] px-[20px] rounded-md'>

                              <div className='flex gap-[18px] items-center mb-[24px]'>
                                 <img src={img} alt="image"/>
                                 <h4>{name}</h4>
                              </div>

                              <p> {comment}</p>
                           </div>
                           <FaChevronRight className='w-[50px] h-[50px] text-primary cursor-pointer'
                           onClick={nextPerson}
                           />
                     </article>

               </div>
         </div>
    </div>
  )
}

export default WhatTheySay
