import Header from "../shared/components/partials/Header"
import WhatTheySay from "../shared/components/partials/WhatTheySay"
import JoinUs from "../shared/components/partials/JoinUs"
import Contact from "../components/ContactUs/Contact"

const ContactPage = () => {
  return (
    <div className="Contact-Page">
      <div className={`bg-lightbg py-[41px]`}>
      <Header head = "Contact Us"
          title ="Contact Us to know more"
          desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."/>
      </div>
      <Contact/>
      <WhatTheySay/>
      <JoinUs/>
  </div>
  )
}

export default ContactPage