import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "../components/CartItem"
import { DataProps } from "../App"

type CartDataProps = {
  data: DataProps[]
}
export const Cart = ({ data }: CartDataProps) => {
  const { cartItems } = useShoppingCart()

  return (
    <div>
      <div className="my-6 text-xl font-medium sm:text-3xl sm:my-12">
        Shopping Cart
      </div>
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} data={data} />
      ))}

      <div className="font-bold text-xl mt-8">
        <span className="font-light">Total:</span>$
        {cartItems
          .reduce((total, cartItem) => {
            const item = data.find(i => i.id === cartItem.id)
            const itemTotal =
              (item ? parseFloat(item.price) : 0) * cartItem.quantity
            return total + itemTotal
          }, 0)
          .toFixed(2)}
      </div>
    </div>
  )
}
