import { DataProps } from "../App"
import { FavouriteProducts } from "../components/FavouriteProducts"

type FavouritePropsData = {
  data: DataProps[]
}
export const Favourites = ({ data }: FavouritePropsData) => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0">
      <FavouriteProducts data={data} />
    </div>
  )
}
