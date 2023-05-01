import styles from "../../style"

const About = () => {
  return (
    <div className="About-page">
       <div className={`${styles.maxWidth} ${styles.paddingX} ${styles.paddingY} font-Readex text-[20px] flex flex-col gap-[50px] pt-[40px]`}>

               <p>Welcome to <span>Let&quot;s Food</span>, where we are committed to serving you the best quality food with exceptional customer service. Our online restaurant offers a wide variety of delicious meals that are perfect for any occasion, whether you&quot;re looking for a quick lunch, a cozy dinner, or a family gathering.</p>

               <p>At <span>Let&quot;s Food</span>, we pride ourselves on using only the freshest ingredients and preparing each meal with care and attention to detail. Our chefs are passionate about creating innovative dishes that are bursting with flavor and are sure to leave a lasting impression.</p>

               <p>Our online restaurant is designed to make your dining experience as seamless and convenient as possible. We offer a simple and user-friendly ordering system that allows you to easily customize your meal and have it delivered straight to your door. Our delivery service is fast and reliable, ensuring that your food arrives hot and fresh every time.</p>

               <p>We believe that great food should be enjoyed by everyone, which is why we strive to accommodate a wide range of dietary needs and preferences. Whether you&quot;re vegetarian, gluten-free, or have any other dietary restrictions, we have something for you.</p>

               <p>At <span>Let&quot;s Food</span>, we are more than just a restaurant. We are a community of food lovers who are passionate about sharing our love for food with others. We hope that you will join us on this journey and experience the true taste of <span>Let&quot;s Food</span>.</p>
       </div>
    </div>
  )
}

export default About