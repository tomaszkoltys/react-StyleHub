import { DataProps } from "../App"
import { StoreProducts } from "../components/StoreProducts"

type ProductsLoadingProps = {
  data: DataProps[]
  loading: boolean
  filter: DataProps[]
  setFilter: React.Dispatch<React.SetStateAction<DataProps[]>>
}
export const Products = ({
  data,
  loading,
  filter,
  setFilter,
}: ProductsLoadingProps) => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0">
      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <StoreProducts data={data} filter={filter} setFilter={setFilter} />
      )}
    </div>
  )
}
