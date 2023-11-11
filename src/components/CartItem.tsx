import { DataProps } from "../App"
import { useShoppingCart } from "../context/ShoppingCartContext"

export type CartItemProps = {
  id: number
  quantity: number
}

export const CartItem = ({
  id,
  quantity,
  data,
}: CartItemProps & { data: DataProps[] }) => {
  const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } =
    useShoppingCart()
  const item = data.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="flex border-y border-gray-300">
      <div className="p-2 h-40 w-40 overflow-hidden">
        <img
          src={item.image}
          className="object-contain object-center w-full h-full"
          alt={item.title}
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <div className="font-light text-md sm:text-xl">{item.title}</div>
          <div className="font-medium text-md sm:text-lg">${item.price}</div>
          <span className="text-sm sm:text-md">Quantity:{quantity}</span>
        </div>
        <div className="flex">
          <button
            onClick={() => increaseItemQuantity(id)}
            className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-md font-medium text-white rounded-sm w-10 h-10"
          >
            +
          </button>
          <button
            onClick={() => decreaseItemQuantity(id)}
            className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-md font-medium text-white rounded-sm w-10 h-10 mx-2"
          >
            -
          </button>
          <button
            onClick={() => removeFromCart(id)}
            className="bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-xs font-medium text-white rounded-sm w-20 h-10"
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  )
}
