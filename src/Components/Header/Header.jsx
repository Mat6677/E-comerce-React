import "./Header.css";
import { useState } from "react";
import { CartIcon } from "../Icons/CartIcon";

export const Header = () => {
  const [categoriasModal, setCategoriasModal] = useState(false);
  const [marcasModal, setMarcasModal] = useState(false);

  return (
    <header className="flex justify-between items-center px-10">
      <figure className="flex-1 ">
        <img
          className="max-w-[125px]"
          src="/ShopSmartly-logo-white.png"
          alt=""
        />
      </figure>
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-7 items-center">
          <li>
            <a href="">Inicio</a>
          </li>
          <li className="cursor-pointer">
            <p
              onMouseEnter={() => setCategoriasModal(true)}
              onMouseLeave={() => setCategoriasModal(false)}
              className={categoriasModal ? "bg-text text-bg" : "bg-bg text-text"}
            >
              Categorias
            </p>
            <div
              onMouseEnter={() => setCategoriasModal(true)}
              onMouseLeave={() => setCategoriasModal(false)}
              className={categoriasModal ? "active" : "inactive"}
            >
              <ul className="flex flex-col gap-2">
                <li>Ropa y Moda</li>
                <li>Electrónica</li>
                <li>Hogar y Jardín</li>
                <li>Salud y Belleza</li>
                <li>Deportes y Aire libre</li>
                <li>Juguetes y Juegos</li>
                <li>Automoción y Herramientas</li>
              </ul>
            </div>
          </li>
          <li className="cursor-pointer">
            <p
              onMouseEnter={() => setMarcasModal(true)}
              onMouseLeave={() => setMarcasModal(false)}
              className={marcasModal ? "bg-text text-bg" : "bg-bg text-text"}
            >
              Marcas
            </p>
            <div
              onMouseEnter={() => setMarcasModal(true)}
              onMouseLeave={() => setMarcasModal(false)}
              className={marcasModal ? "active" : "inactive"}
            >
              <ul className="flex flex-col gap-2">
                <li>Apple</li>
                <li>Nike</li>
                <li>Samsung</li>
                <li>Adidas</li>
                <li>Sony</li>
                <li>Nestlé</li>
                <li>LG</li>
                <li>Under Armour</li>
                <li>Nokia</li>
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
