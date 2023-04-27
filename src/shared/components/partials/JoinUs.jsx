import styles from "../../../style"

const JoinUs = () => {
  return (
    <div className={`joinUs-section ${styles.maxWidth} ${styles.paddingY} ${styles.paddingX}`}>
       <div className={`bg-sign-up  ${styles.flexCenter} flex-col px-[20px] md:px-[328px] py-[50px] md:py-[92px] rounded-md bg-no-repeat 	`}>
            <h3 className="text-white font-Readex font-bold text-[32px] leading-[40px] text-center pb-[30px]">Join our member and get discount up to 50%</h3>
            <button className="btn">Sign Up</button>
       </div>
    </div>
  )
}

export default JoinUs