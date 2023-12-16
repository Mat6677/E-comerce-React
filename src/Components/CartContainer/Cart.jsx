import { CartIcon } from "../Icons/CartIcon";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import "./Cart.css"

export const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [cartContainer, setCartContainer] = useState(false)
  let total = 0
  cartItems.forEach(item => {
    total += item.quantity * item.price
  });
  return (
    <>
      <button className="fixed top-[3.5%] right-[2%]" onClick={() => setCartContainer(!cartContainer)}>
        <CartIcon />
        <span className="absolute rounded-full bg-primary -top-2 -right-3 py-[2px] px-[4px] font-bold text-xs">
          {cartItems.length}
        </span>
      </button>
      <div className={cartContainer ? "cart-container fixed bg-secondary active text-text" : "cart-container fixed bg-transparent"}>
        <section className="flex flex-col items-center">
          {
            cartItems.length >= 1 ? (
              cartItems.map(item => (
                <p key={item.id}>{item.title}- ${item.price} x{item.quantity}</p>
              ))
            ) : (
              <p>There are no products yet</p>
            )
          }
        </section>
        <section className="flex flex-col items-center border-t border-text w-3/4 mx-auto pt-[25px] mt-[25px]">
          <p>Total: ${total}</p>
          <button onClick={() => clearCart()} className="hover:bg-primary px-2 py-1 rounded">Buy</button>
          <button onClick={() => clearCart()} className="hover:bg-primary px-2 py-1 rounded">Clear Cart</button>
        </section>
      </div>
    </>
  );
};
