import { useNavigate } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { DataProps } from "../App"

export const SingleProduct = ({ id, title, price, image }: DataProps) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    favouriteItems,
    addToFavourites,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)
  const navigate = useNavigate()

  const isInFavArray = favouriteItems.find(i => i.id === id)

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center justify-center m-2 w-full border border-gray-300 rounded-sm">
        <span
          className={`absolute right-0 top-0 p-2 transition duration-300 cursor-pointer ${
            isInFavArray
              ? "text-[#ce4b4f] hover:text-[#000]"
              : "text-[#000] hover:text-[#ce4b4f]"
          }`}
          onClick={() => addToFavourites(id)}
        >
          {isInFavArray ? (
            <AiFillHeart size={25} />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </span>
        <div className="p-2 h-40 w-auto rounded overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-contain object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col text-center mt-4 p-4 text-[#000]">
          <div className="font-light text-xl">{title.substring(0, 11)}...</div>
          <div className="font-medium text-lg">${price}</div>
        </div>
        <div className="flex flex-cols justify-between w-full">
          <button
            className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-sm font-medium text-white py-2 px-4 rounded-sm w-22 h-10"
            onClick={() => increaseItemQuantity(id)}
          >
            Add to Cart
          </button>
          {quantity > 0 && (
            <span className="flex items-center">x{quantity}</span>
          )}
          <button
            className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-sm font-medium text-white py-2 px-4 rounded-sm w-22 h-10"
            onClick={() => navigate(`/products/${id}`)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}
