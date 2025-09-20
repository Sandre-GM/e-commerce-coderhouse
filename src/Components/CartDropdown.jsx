import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDropdown({ isOpen, onClose }) {
  const { cart, removeFromCart, addToCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  const handleIncreaseQuantity = (item) => {
    const updatedItem = { ...item, quantity: 1 };
    addToCart(updatedItem);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: -1 };
      addToCart(updatedItem);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="absolute right-0 top-full mt-2 w-80 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50">
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-3">
            Carrito de compras
          </h3>

          {cart.length === 0 ? (
            <p className="text-zinc-400 text-center py-8">
              El carrito está vacío
            </p>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-zinc-700 rounded-lg mb-2"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400 text-xs">${item.price} c/u</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item)}
                        className="flex items-center justify-center w-6 h-6 text-white bg-zinc-600 rounded hover:bg-zinc-500 transition-colors"
                      >
                        <RiSubtractLine size={12} />
                      </button>

                      <span className="text-white font-semibold min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="flex items-center justify-center w-6 h-6 text-white bg-zinc-600 rounded hover:bg-zinc-500 transition-colors"
                      >
                        <RiAddLine size={12} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center justify-center w-6 h-6 text-red-400 hover:text-red-300 transition-colors ml-1"
                      >
                        <RiDeleteBin6Line size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-700 pt-3 mt-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">Total:</span>
                  <span className="text-white font-bold text-lg">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Proceder al pago
                  </button>
                  <Link
                    to="/cart"
                    className="w-full bg-white hover:bg-blue-700 hover:text-white text-center font-black text-blue-600  py-2 px-4 rounded-lg transition-colors"
                  >
                    Ver Carrito
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
