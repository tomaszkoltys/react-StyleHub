import { DataProps } from "../App"
import { Cart } from "../components/Cart"

type ShoppingCartDataProps = {
  data: DataProps[]
}

export const ShoppingCart = ({ data }: ShoppingCartDataProps) => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0">
      <Cart data={data} />
    </div>
  )
}
