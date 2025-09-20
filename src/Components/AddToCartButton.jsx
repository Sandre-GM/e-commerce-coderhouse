import { useState } from "react";
import { RiShoppingCart2Fill, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
    };

    addToCart(itemToAdd);

    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-3 p-2 bg-zinc-700 rounded-lg">
        <button
          onClick={decreaseQuantity}
          className="flex items-center justify-center w-8 h-8 text-white bg-zinc-600 rounded-full hover:bg-zinc-500 transition-colors"
        >
          <RiSubtractLine />
        </button>

        <span className="text-white font-semibold min-w-[2rem] text-center">
          {quantity}
        </span>

        <button
          onClick={increaseQuantity}
          className="flex items-center justify-center w-8 h-8 text-white bg-zinc-600 rounded-full hover:bg-zinc-500 transition-colors"
        >
          <RiAddLine />
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center gap-1 p-2 w-full text-sm font-medium text-zinc-100 whitespace-nowrap rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors shadow-[inset_0_0_0.25rem_1px_#d9d9d9]"
      >
        <RiShoppingCart2Fill />
        <span>Añadir al carrito</span>
      </button>
    </div>
  );
}
