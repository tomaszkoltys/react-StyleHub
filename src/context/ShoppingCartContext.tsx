import { ReactNode, createContext, useContext, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  addToFavourites: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
  favouriteItems: CartItem[]
  favouriteItemsQuantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartProviderProps = {
  children: ReactNode
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [favouriteItems, setFavouriteItems] = useState<CartItem[]>([])
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
  const favouriteItemsQuantity = favouriteItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  const increaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        toast.success("Added to cart!")
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            toast.success("Added to cart!")
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseItemQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity == 1) {
        toast.success("Removed from cart!")
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            toast.success("Removed from cart!")
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(currItems => {
      toast.success("Removed from cart!")
      return currItems.filter(item => item.id !== id)
    })
  }

  const addToFavourites = (id: number) => {
    setFavouriteItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        toast.success("Added to favourites!")
        return [...currItems, { id, quantity: 1 }]
      } else {
        toast.success("Removed from favourites!")
        return currItems.filter(item => item.id !== id)
      }
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        addToFavourites,
        cartItems,
        cartQuantity,
        favouriteItems,
        favouriteItemsQuantity,
      }}
    >
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ShoppingCartContext.Provider>
  )
}
