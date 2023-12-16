import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("shopSmartlyCart")) || []
  );

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      const newCart = structuredClone(cartItems);
      newCart[itemIndex].quantity += 1;
      localStorage.setItem("shopSmartlyCart", JSON.stringify(newCart));
      return setCartItems(newCart);
    }
    const newCart = [
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ];
    localStorage.setItem("shopSmartlyCart", JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const substracItem = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (cartItems[itemIndex].quantity > 1) {
      const newCart = structuredClone(cartItems);
      newCart[itemIndex].quantity -= 1;
      localStorage.setItem("shopSmartlyCart", JSON.stringify(newCart));
      return setCartItems(newCart);
    }

    const newCart = cartItems.filter((item) => item.id !== product.id);
    localStorage.setItem("shopSmartlyCart", JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const removeFromCart = (product) => {
    setCartItems((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
    localStorage.setItem("shopSmartlyCart", JSON.stringify(cartItems));
  };

  const clearCart = (product) => {
    const newCart = [];
    setCartItems(newCart);
    localStorage.setItem("shopSmartlyCart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        substracItem,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
