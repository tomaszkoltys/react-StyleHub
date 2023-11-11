import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false)
  const { cartQuantity, favouriteItemsQuantity } = useShoppingCart()

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-7xl mx-auto px-4 text-black font-medium widescreen:px-0">
      <h1 className="w-full text-2xl font-medium md:text-3xl">StyleHub</h1>
      <ul className="hidden md:flex px-16">
        <Link to="/" className="m-4 hover:text-[#d00309] cursor-pointer">
          Home
        </Link>
        <Link
          to="/products"
          className="m-4 hover:text-[#d00309] cursor-pointer"
        >
          Products
        </Link>
        <Link to="/about" className="m-4 hover:text-[#d00309] cursor-pointer">
          About
        </Link>
        <Link to="/contact" className="m-4 hover:text-[#d00309] cursor-pointer">
          Contact
        </Link>
      </ul>
      <div>
        <ul className="flex mx-auto">
          {favouriteItemsQuantity > 0 ? (
            <>
              <Link
                to="/favourites"
                className="m-2 md:m-4 hover:text-[#d00309] cursor-pointer relative flex items-center justify-center"
              >
                <AiOutlineHeart size={25} />
                <div className="flex items-center justify-center absolute text-white bg-[#d00309] rounded-[50%] text-xs font-bold -translate-y-4 translate-x-3 w-4 h-4">
                  {favouriteItemsQuantity}
                </div>
              </Link>
            </>
          ) : (
            <Link
              to="/favourites"
              className="m-2 md:m-4 hover:text-[#d00309] cursor-pointer"
            >
              <AiOutlineHeart size={25} />
            </Link>
          )}
          {cartQuantity > 0 ? (
            <>
              <Link
                to="/cart"
                className="m-2 md:m-4 widescreen:mr-0 hover:text-[#d00309] cursor-pointer relative flex items-center justify-center"
              >
                <FiShoppingCart size={25} />
                <div className="flex items-center justify-center absolute text-white bg-[#d00309] rounded-[50%] text-xs font-bold -translate-y-4 translate-x-1 w-4 h-4">
                  {cartQuantity}
                </div>
              </Link>
            </>
          ) : (
            <Link
              to="/cart"
              className="m-2 md:m-4 widescreen:mr-0 hover:text-[#d00309] cursor-pointer relative"
            >
              <FiShoppingCart size={25} />
            </Link>
          )}
        </ul>
      </div>
      <div
        onClick={handleNav}
        className="block ml-4 md:hidden hover:cursor-pointer"
      >
        <AiOutlineMenu size={25} />
      </div>

      <div
        className={
          nav
            ? "md:hidden flex flex-col fixed left-0 top-0 px-2 w-full h-full bg-[#fff] ease-in-out duration-500 z-10"
            : "ease-in-out duration-500 fixed top-[-100%] left-0 w-full h-full"
        }
      >
        <div className="flex justify-between items-center h-24 max-w-7xl px-2 text-black font-medium widescreen:px-0">
          <h1 className="w-full text-2xl font-medium md:text-3xl">StyleHub</h1>
          <div>
            <ul className="flex mx-auto">
              {favouriteItemsQuantity > 0 ? (
                <>
                  <Link
                    to="/favourites"
                    className="m-2 md:m-4 hover:text-[#d00309] cursor-pointer relative flex items-center justify-center"
                  >
                    <AiOutlineHeart size={25} />
                    <div className="flex items-center justify-center absolute text-white bg-[#d00309] rounded-[50%] text-xs font-bold -translate-y-4 translate-x-3 w-4 h-4">
                      {favouriteItemsQuantity}
                    </div>
                  </Link>
                </>
              ) : (
                <Link
                  to="/favourites"
                  className="m-2 md:m-4 hover:text-[#d00309] cursor-pointer"
                >
                  <AiOutlineHeart size={25} />
                </Link>
              )}
              {cartQuantity > 0 ? (
                <>
                  <Link
                    to="/cart"
                    className="m-2 md:m-4 widescreen:mr-0 hover:text-[#d00309] cursor-pointer relative flex items-center justify-center"
                  >
                    <FiShoppingCart size={25} />
                    <div className="flex items-center justify-center absolute text-white bg-[#d00309] rounded-[50%] text-xs font-bold -translate-y-4 translate-x-1 w-4 h-4">
                      {cartQuantity}
                    </div>
                  </Link>
                </>
              ) : (
                <Link
                  to="/cart"
                  className="m-2 md:m-4 widescreen:mr-0 hover:text-[#d00309] cursor-pointer relative"
                >
                  <FiShoppingCart size={25} />
                </Link>
              )}
            </ul>
          </div>
          <div
            onClick={handleNav}
            className="block ml-4 md:hidden hover:cursor-pointer"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="block">
          <Link
            to="/"
            className="block p-4 border-y border-gray-600 hover:text-[#d00309] cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block p-4 border-b border-gray-600 hover:text-[#d00309] cursor-pointer"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block p-4 border-b border-gray-600 hover:text-[#d00309] cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block p-4 border-b border-gray-600 hover:text-[#d00309] cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  )
}
