import { DataProps } from "../App"
import { useShoppingCart } from "../context/ShoppingCartContext"

export const StoreItem = ({ id, title, price, image }: DataProps) => {
  const { increaseItemQuantity } = useShoppingCart()

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col m-4 min-h-[300px] sm:min-h-[350px] lg:min-h-[300px] w-full border border-gray-300 rounded-sm">
        <div className="p-2 h-40 w-auto rounded overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-contain object-center w-full h-full"
          />
        </div>
        <div className="flex justify-between mt-8 p-4 text-[#000]">
          <div className="font-light max-w-[80%]">{title}</div>
          <div className="font-medium text-lg">${price}</div>
        </div>
      </div>
      <button
        className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-lg font-medium text-white py-2 px-4 rounded-md w-36 h-12"
        onClick={() => increaseItemQuantity(id)}
      >
        Add to Cart
      </button>
    </div>
  )
}
