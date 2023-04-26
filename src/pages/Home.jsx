
import Header from '../components/Home/Header';
import HowItWorks from '../shared/components/partials/HowItWorks'
import OurMenu from '../shared/components/partials/OurMenu'
import WhatTheySay from '../shared/components/partials/WhatTheySay';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HowItWorks/>
        <OurMenu/>
        <WhatTheySay/>
    </div>
  )
}

export default HomePage