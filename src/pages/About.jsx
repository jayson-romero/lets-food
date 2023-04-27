import Header from "../shared/components/partials/Header";
import About from "../components/AboutUs/About";
import WhatTheySay from "../shared/components/partials/WhatTheySay";
import JoinUs from "../shared/components/partials/JoinUs";

const AboutPage = () => {
  return (
    <div className="HowItWorks-Page">
      <div className={`bg-lightbg py-[41px]`}>
      <Header head = "About Us"
          title ="Know More About Us"
          desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."/>
      </div>

      <About/>
      <WhatTheySay/>
      <JoinUs/>
  </div>
  )
}

export default AboutPage