import React from "react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-black px-10 items-center">
        <ul className="flex justify-center gap-10  text-white p-2">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Productos de temporada</a></li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
}
