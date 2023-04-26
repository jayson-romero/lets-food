
import styles, {layout} from "../../../style";
import logo from '../../../assets/logo.png';
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-Section bg-lightbg pt-[99px]">
        <div className={`${layout.section} ${styles.paddingX} ${styles.maxWidth} justify-between gap-[30px] `}>
            
            <div className="letsFood">
                <img src={logo} alt="logo" className="mb-[35px]"/>
                <p className="mb-[20px] w-[326px] font-Readex text-[20px] text-lightblack">Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi</p>
                <div className="flex gap-[24px] white ">
                    <AiOutlineInstagram className=" w-[50px] h-[50px]  bg-white p-[13px] bg-white hover:bg-primary rounded-full cursor-pointer shadow hover:shadow-lightblack"/>
                    <FaFacebookF className=" w-[50px] h-[50px]  bg-white p-[13px] bg-white hover:bg-primary rounded-full cursor-pointer shadow hover:shadow-lightblack"/>
                    <AiOutlineTwitter className=" w-[50px] h-[50px]  bg-white p-[13px] bg-white hover:bg-primary rounded-full cursor-pointer shadow hover:shadow-lightblack"/>
                </div>
            </div>

            <div className="company font-Readex text-lightblack text-[18px] flex flex-col gap-[16px]">
                <h4 className="text-black text-[20px] mb-[15px]">Carrer</h4>
                <Link to="/about">About Us</Link>
                <Link to={null}>Carrer</Link>
                <Link to="/howItWorks">How It Works</Link>
            </div>
            <div className="policy font-Readex text-lightblack text-[18px] flex flex-col gap-[16px] ">
                <h4 className="text-black text-[20px] mb-[15px]">Policy</h4>
                <Link to={null}>FAQ</Link>
                <Link to={null}>Privacy</Link>
                <Link to={null}>Shipping</Link>
            </div>
            <div className="getIntouch font-Readex text-lightblack text-[18px] flex flex-col gap-[16px] ">
                <h4 className="text-black text-[20px] mb-[15px]">Get In Touch</h4>
                <Link to={null}>+63 905 300 8715</Link>
                <Link to={null}>jaysonromero@gmail.com</Link>
            </div>
        </div>

        <div className={`${styles.maxWidth}  ${styles.flexCenter} flex-col `}>
            <hr className="bg-lightblack h-[2px] w-full"/>
            <p className="py-[45px] font-Readex">© 2023 Let’sFood. ALL RIGHT RESERVED.</p>
        </div>
    </div>
  )
}

export default Footer