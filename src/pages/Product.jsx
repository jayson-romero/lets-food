import { useParams } from "react-router-dom"

const ProductPage = () => {
  const { id } = useParams()
  return (
    <div>This is a Product with an ID of {id}</div>
  )
}

export default ProductPage