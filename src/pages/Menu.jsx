import { Link } from 'react-router-dom'
import Header from '../shared/components/partials/Header'
import styles from '../style'

import {menu} from '../utilities/data'
import ProductCard from '../shared/components/partials/ProductCard'
import WhatTheySay from '../shared/components/partials/WhatTheySay'
import JoinUs from '../shared/components/partials/JoinUs'

const MenuPage = () => {
  return (
    <div className="Menu-Page">
      <div className={`bg-lightbg py-[41px]`}>
      <Header head = "Our Menu"
           title ="Our Popular Menu"
           desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."/>
      </div>

      <div className={` ${styles.paddingX} ${styles.marginY} ${styles.maxWidth} grid grid-cols-2  md:grid-flow-row md:grid-cols-4 gap-[24px] mt-[41px]`}>
      {
        menu.map((product) => (
          <Link key={product.id} to={`/menu/${product.id}`}>
              <ProductCard {...product}/>
          </Link>
        ))
      }
     </div>
      
     <WhatTheySay/>
    <JoinUs/>
    </div>
  )
}

export default MenuPage