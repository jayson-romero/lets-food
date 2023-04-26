
import styles from '../../../style';
import Header from '../partials/Header';
import HowItWork from '../../../components/HowItWorks/HowItWorks';

const HowItWorks = () => {
  return (
    <div className={`${styles.paddingY} howItWorks-section`}>

         <Header head = "Hot It Works"
                 title ="What We Serve"
                 desc ="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."/>

         <HowItWork/> 
       
    </div>
  )
}

export default HowItWorks