/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = ({ product }) => {
  const [currentImg, setCurrentImg] = useState([product.thumbnail]);
  const handleClick = (img) => {
    setCurrentImg(img);
  };

  const { cartItems, addToCart, removeFromCart, substracItem } =
    useContext(CartContext);

  const checkProductInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  return (
    <div className="w-screen min-h-[85svh] flex gap-20 items-center py-10 px-20 bg-primary/10">
      <div className="bg-white/25  min-h-[75svh] min-w-[50svw] flex items-center pr-4 py-4">
        {product.images ? (
          <div>
            {product.images.map((img) => (
              <div
                key={img}
                onClick={() => handleClick(img)}
                className="mx-4 my-2 relative cursor-pointer"
              >
                <img
                  className="max-w-[75px] min-h-[50px] relative"
                  src={img}
                  alt=""
                />
                <div
                  className={
                    currentImg != img
                      ? "absolute top-0 left-0 w-full h-full z-30 bg-white/50"
                      : "none"
                  }
                ></div>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
        <figure>
          <img className="max-h-[65svh]" src={currentImg} alt="" />
        </figure>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl">{product.title}</h1>
        <span>
          {product.brand} - {product.category}
        </span>
        <p className="p-0 my-5">{product.description}</p>
        <span className="text-[16px]">Rating: {product.rating}</span>
        <span className="text-[16px]">Stock: {product.stock}</span>
        <span className="text-[16px]">Price: ${product.price}</span>
        <div className="[&>button]:bg-black/70 [&>button]:px-5 [&>button]:py-2 text-xl flex gap-5">
          {!checkProductInCart(product) ? (
            <button onClick={() => addToCart(product)}>Add to cart</button>
          ) : (
            <>
              <div className="[&>button]:bg-black/70 [&>button]:px-5 [&>button]:py-2 text-xl flex gap-5">
                <button onClick={() => addToCart(product)}>+</button>
                <button onClick={() => substracItem(product)}>-</button>
              </div>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
