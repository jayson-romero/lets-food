
import Header from "../shared/components/partials/Header"
import HowItWork from "../components/HowItWorks/HowItWorks"
import WhatTheySay from "../shared/components/partials/WhatTheySay"

const HowItWorksPage = () => {
  return (
    <div className="HowItWorks-Page">
      <div className={`bg-lightbg py-[41px]`}>
      <Header head = "How it works"
           title ="What We Serve"
           desc ="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."/>
      </div>

      <HowItWork/>
      <WhatTheySay/>
     
    </div>
  )
}

export default HowItWorksPage