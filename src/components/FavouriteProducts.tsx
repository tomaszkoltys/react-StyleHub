import { DataProps } from "../App"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { SingleFavouriteProduct } from "./SingleFavouriteProduct"

type FavouriteProductsProps = {
  data: DataProps[]
}

export const FavouriteProducts = ({ data }: FavouriteProductsProps) => {
  const { favouriteItems } = useShoppingCart()

  return (
    <div>
      <div className="my-6 text-xl font-medium sm:text-3xl sm:my-12">
        Favourite Products
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 sm:mt-6">
        {favouriteItems.length === 0 ? (
          <p className="flex text-center font-medium">
            Add your first favourite item!
          </p>
        ) : (
          favouriteItems.map(product => (
            <SingleFavouriteProduct key={product.id} {...product} data={data} />
          ))
        )}
      </div>
    </div>
  )
}
