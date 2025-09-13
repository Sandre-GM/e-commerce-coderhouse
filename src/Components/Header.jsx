import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <nav className="flex px-20 items-center gap-5">
        <ul className="flex gap-10 w-full text-white font-mono p-2">
          <Link to="/">Inicio</Link>
          <Link to="/">About</Link>
        </ul>
        <ul className="flex justify-end gap-10 w-full text-white font-mono p-2 items-center">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 focus:outline-none"
            >
              Seleccionar Categoría
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg text-black z-10">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Todos
                </Link>
                <Link
                  to="/products/jewelery"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Joyeria
                </Link>
                <Link
                  to="/products/electronics"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Electrónica
                </Link>
                <Link
                  to="/products/men's clothing"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Ropa Hombre
                </Link>
                <Link
                  to="/products/women's clothing"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Ropa Mujer
                </Link>
              </div>
            )}
          </div>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}
