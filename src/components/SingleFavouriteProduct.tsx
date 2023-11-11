import { DataProps } from "../App"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { AiFillCloseCircle } from "react-icons/ai"

type SingleFavouriteProductProps = {
  id: number
  quantity: number
}

export const SingleFavouriteProduct = ({
  id,
  data,
}: SingleFavouriteProductProps & { data: DataProps[] }) => {
  const { increaseItemQuantity, addToFavourites } = useShoppingCart()

  const item = data.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center justify-center m-2 w-full border border-gray-300 rounded-sm">
        <span
          className="absolute right-0 top-0 p-2 transition duration-300 cursor-pointer text-[#ce4b4f] hover:text-[#000]"
          onClick={() => addToFavourites(id)}
        >
          <AiFillCloseCircle size={25} />
        </span>
        <div className="p-2 h-32 w-auto rounded overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="object-contain object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col text-center mt-2 p-2 text-[#000]">
          <div className="font-light text-lg">
            {item.title.substring(0, 11)}...
          </div>
          <div className="font-medium text-base">${item.price}</div>
        </div>
        <div className="flex items-center justify-center w-full mb-2">
          <button
            className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-xs font-medium text-white py-2 px-4 rounded-sm w-22 h-10"
            onClick={() => increaseItemQuantity(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
