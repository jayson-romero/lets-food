import styles, {layout} from "../../style";
import {howItWorks} from '../../utilities/data';

const HowItWork = () => {
  return (
    <div>
        <div className={`${styles.smallWidth} ${layout.section} ${styles.padding} justify-between items-center font-Readex sm:flex-row gap-[50px]`}>
            { 
               howItWorks.map((item, index) => (
                  <div key={item.id} className={`${styles.flexCenter}  text-center flex-col max-w-[241px]`}>
                        <img src={item.img} alt={item.id} className ="mb-[24px]"/>
                        <h3 className='text-[28px] font-semibold leading-[35px] mb-[6px]'>{item.title}</h3>
                        <p className={`${index == 1 ? "max-w-[200px]" : "max-w-[100%] "} text-[20px] font-medium text-lightblack`}>{item.desc}</p>
                  </div>
               ))
            }
        </div>
    </div>
  )
}

export default HowItWork