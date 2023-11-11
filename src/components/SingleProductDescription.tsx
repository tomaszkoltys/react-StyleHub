import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
type SingleProductDescriptionProps = {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const SingleProductDescription = () => {
  const { id } = useParams<string>()
  const [product, setProduct] = useState<SingleProductDescriptionProps | null>(
    null
  )
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { increaseItemQuantity } = useShoppingCart()

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct()
  }, [id])

  const idAsNumber: number = Number(id)

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0">
      {loading ? (
        <div className="flex gap-2">
          <div className="h-96 bg-gray-100 w-[40%]"></div>
          <div className="h-96 bg-gray-100 w-[60%]"></div>
        </div>
      ) : product ? (
        <div className="flex flex-col items-center sm:flex-row">
          <div className="p-2 h-96 w-[100%] sm:w-[40%] overflow-hidden ">
            <img
              src={product.image}
              className="object-contain object-center w-full h-full"
              alt={product.title}
            />
          </div>
          <div className="flex flex-col justify-center text-[#000] pl-0 w-[100%] sm:w-[60%] sm:pl-10">
            <h4 className="text-xl md:text-2xl uppercase mb-8 text-gray-600">
              {product.category}
            </h4>
            <h1 className=" text-3xl sm:text-2xl md:text-3xl font-light">
              {product.title}
            </h1>
            <p className="flex items-center my-2 font-medium text-xl sm:text-base">
              {product.rating && product.rating.rate}
              <i className="text-[#da5d61] hover:text-[#ce4b4f] transition duration-300">
                <AiFillStar />
              </i>
              &nbsp;<span className="font-semibold">/</span>&nbsp;5
              <i className="text-[#da5d61] hover:text-[#ce4b4f] transition duration-300">
                <AiFillStar />
              </i>
            </p>
            <h3 className="my-4 font-semibold text-3xl sm:my-2 sm:text-2xl md:text-3xl">
              ${product.price}
            </h3>
            <p className="font-medium text-lg sm:text-base">
              Description:<br></br>
              <span className="font-light">{product.description}</span>
            </p>
            <div className="flex justify-between sm:justify-normal mt-8 sm:mt-4">
              <button
                className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-md font-medium text-white py-2 px-4 rounded-sm w-32 h-14 sm:text-sm sm:w-22 sm:h-10"
                onClick={() => increaseItemQuantity(idAsNumber)}
              >
                Add to Cart
              </button>
              <button
                className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-md font-medium text-white py-2 px-4 rounded-sm w-32 h-14 ml-0 sm:ml-8 sm:text-sm sm:w-22 sm:h-10"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  )
}
