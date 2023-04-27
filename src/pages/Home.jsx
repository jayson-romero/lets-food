
import Header from '../components/Home/Header';
import HowItWorks from '../shared/components/partials/HowItWorks'
import OurMenu from '../shared/components/partials/OurMenu'
import WhatTheySay from '../shared/components/partials/WhatTheySay';
import JoinUs from '../shared/components/partials/JoinUs';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HowItWorks/>
        <OurMenu/>
        <WhatTheySay/>
        <JoinUs/>
    </div>
  )
}

export default HomePage