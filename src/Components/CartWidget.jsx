import { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useCart } from "../context/CartContext";
import CartDropdown from "./CartDropdown";

export default function CartWidget() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="relative cursor-pointer hover:text-zinc-300 transition-colors"
      >
        <RiShoppingCart2Fill className="text-white text-2xl" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
        
      <CartDropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
    </div>
  );
}
