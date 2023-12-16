/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products }) => {
  console.log(products)
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="bg-primary/10">
          <figure>
            <Link to={`/E-comerce-React/item/${product.id}`}>
              <img
                className="w-full h-52"
                src={`${product.thumbnail}`}
                alt=""
              />
            </Link>
          </figure>
          <div className="flex flex-col items-center text-center py-5">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
