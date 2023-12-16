import "./Header.css";
import logo from "./ShopSmartly-logo-white.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { Cart } from "../CartContainer/Cart";

export const Header = () => {
  const [categoriasModal, setCategoriasModal] = useState(false);
  const { categ } = useCollection("products");

  return (
    <header className="flex justify-between items-center px-10">
      <figure className="flex-1 ">
        <img className="max-w-[125px]" src={logo} alt="" />
      </figure>
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-7 items-center">
          <li>
            <Link to={`/E-comerce-React`}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <p
              onMouseEnter={() => setCategoriasModal(true)}
              onMouseLeave={() => setCategoriasModal(false)}
              className={
                categoriasModal ? "bg-text text-bg" : "bg-bg text-text"
              }
            >
              Categorias
            </p>
            <div
              onMouseEnter={() => setCategoriasModal(true)}
              onMouseLeave={() => setCategoriasModal(false)}
              className={categoriasModal ? "active" : "inactive"}
            >
              <ul className="flex flex-col gap-2">
                {Array.from(new Set(categ)).map((categoria) => (
                  <li key={categoria}>
                    <Link to={`/E-comerce-React/category/${categoria}`}>
                      {categoria}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="flex-1 flex justify-end">
        <ul className="flex gap-7">
          <li>
            <a href="">Ayuda</a>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};
