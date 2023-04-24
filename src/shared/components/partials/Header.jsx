import styles from "../../../style"

const Header = ({head, title, desc}) => {
  return (
    <div className="section-header">
        <div className={`${styles.flexCenter} ${styles.paddingX} flex-col text-center md:mb-[41px]`}>
          <h4 className={`${styles.sectionHead} mb-[7px]`}>{head}</h4>
          <h2 className={`${styles.sectionTitle} mb-[26px]`}>{title}</h2>
          <p className={`${styles.paragraph} max-w-[611px]`}>{desc}</p>
        </div>
    </div>

  )
}

export default Header
