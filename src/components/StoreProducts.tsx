import { useState } from "react"
import { SingleProduct } from "./SingleProduct"
import { AiOutlineSearch } from "react-icons/ai"
import { DataProps } from "../App"

type StoreProductsFilterProps = {
  data: DataProps[]
  filter: DataProps[]
  setFilter: React.Dispatch<React.SetStateAction<DataProps[]>>
}
export const StoreProducts = ({
  data,
  filter,
  setFilter,
}: StoreProductsFilterProps) => {
  const [search, setSearch] = useState<string>("")
  const [sortOption, setSortOption] = useState<string>("")

  const filterProduct = (cat: string) => {
    const updatedList: DataProps[] = data.filter(i => i.category === cat)
    setFilter(updatedList)
  }

  const searchProducts = filter.filter(product => {
    return search.toLowerCase() === ""
      ? product
      : product.title.toLowerCase().includes(search)
  })

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value
    setSortOption(selectedOption)

    const sortedProducts: DataProps[] = [...searchProducts]

    if (selectedOption === "ascending") {
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    } else if (selectedOption === "descending") {
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    } else {
      sortedProducts.sort((a, b) => a.id - b.id)
    }

    setFilter(sortedProducts)
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-center mt-12 font-medium text-2xl sm:text-4xl">
        Choose something for yourself
      </h2>
      <div className="flex flex-col sm:flex sm:flex-row items-center justify-center mt-8 text-black text-md sm:text-xs md:text-sm">
        <button
          className="border mx-0 md:mx-2 hover:bg-[#ce4b4f] hover:text-white transition duration-300 px-2 py-2 w-full"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="border mx-0 md:mx-2 hover:bg-[#ce4b4f] hover:text-white transition duration-300 px-2 py-2 w-full"
          onClick={() => filterProduct("men's clothing")}
        >
          Mens's Clothing
        </button>
        <button
          className="border mx-0 md:mx-2 hover:bg-[#ce4b4f] hover:text-white transition duration-300 px-2 py-2 w-full"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="border mx-0 md:mx-2 hover:bg-[#ce4b4f] hover:text-white transition duration-300 px-2 py-2 w-full"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="border mx-0 md:mx-2 hover:bg-[#ce4b4f] hover:text-white transition duration-300 px-2 py-2 w-full"
          onClick={() => filterProduct("electronics")}
        >
          Electronic
        </button>
      </div>
      <div className="flex flex-col sm:flex-row mx-auto sm:mx-0  sm:justify-between mt-8 mb-4 sm:mb-0 sm:mt-14 h-8">
        <div className="flex justify-center items-center text-[#000] w-60 border border-gray-300">
          <label htmlFor="">
            <AiOutlineSearch />
          </label>
          <input
            autoFocus
            onChange={e => setSearch(e.target.value)}
            placeholder="Find products..."
            className="w-full border-none outline-none ml-0.5"
          />
          <div className="font-light mr-0.5">({searchProducts.length})</div>
        </div>
        <div className="flex justify-center items-center text-md mt-4 sm:mt-0">
          <select
            value={sortOption}
            className="w-60 sm:w-40 hover:cursor-pointer outline-none py-1 border border-gray-300"
            onChange={handleSortChange}
          >
            <option value="">Sorting type</option>
            <option value="ascending">Price: Ascending</option>
            <option value="descending">Price: Descending</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 sm:mt-6">
        {searchProducts.length === 0 ? (
          <p className="text-center font-medium">No products found</p>
        ) : (
          searchProducts.map((product: DataProps) => (
            <SingleProduct key={product.id} {...product} />
          ))
        )}
      </div>
    </div>
  )
}
