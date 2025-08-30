import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <header className="bg-gray-800">
      <nav className="flex px-20 items-center gap-5">
        <ul className="flex gap-10 w-full text-white font-mono p-2">
          <Link to="/">Inicio</Link>
          <Link to="/">About</Link>
        </ul>
        <ul className="flex justify-end gap-10 w-full text-white font-mono p-2">
          <p>Categorias:</p>
          <Link to="/product/Joyeria">Joyeria</Link>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}
