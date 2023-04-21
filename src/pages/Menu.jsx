import { Link } from 'react-router-dom'

const MenuPage = () => {
  return (
    <div>
      Menu Page
      <Link to="/menu/1">Product 1</Link>
      <Link to="/menu/2">Product 2</Link>
      <Link to="/menu/3">Product 3</Link>
      <Link to="/menu/4">Product 4</Link>
      <Link to="/menu/5">Product 5</Link>
    </div>
  )
}

export default MenuPage