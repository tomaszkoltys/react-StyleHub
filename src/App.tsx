import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Favourites } from "./pages/Favourites"
import { useEffect, useState } from "react"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { ShoppingCart } from "./pages/ShoppingCart"
import { SingleProductDescription } from "./components/SingleProductDescription"

export type DataProps = {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

function App() {
  const [data, setData] = useState<DataProps[]>([])
  const [filter, setFilter] = useState<DataProps[]>(data)
  const [loading, setLoading] = useState<boolean>(false)
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch("https://fakestoreapi.com/products")
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
      }

      return () => {
        componentMounted = false
      }
    }

    getProducts()
  }, [])

  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} loading={loading} />} />
          <Route
            path="/products"
            element={
              <Products
                data={data}
                loading={loading}
                filter={filter}
                setFilter={setFilter}
              />
            }
          />
          <Route path="/products/:id" element={<SingleProductDescription />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favourites" element={<Favourites data={data} />} />
          <Route path="/cart" element={<ShoppingCart data={data} />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
