import "./Header.css";
import logo from "./ShopSmartly-logo-white.png";
import { useState, useEffect } from "react";
import { CartIcon } from "../Icons/CartIcon";
import axios from "axios";
import { Link } from "react-router-dom";

export const Header = () => {
  const [categoriasModal, setCategoriasModal] = useState(false);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategorias(res.data))
      .catch((error) => console.log(error));
  }, []);

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
                {categorias.map((categoria) => (
                  <li key={categoria}>
                    <Link to={`/E-comerce-React/category/${categoria}`}>{categoria}</Link>
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
            <button>
              <CartIcon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
