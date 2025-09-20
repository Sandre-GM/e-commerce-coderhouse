import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    addToCart,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

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

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-900 pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 text-center">
            <h1 className="text-white text-3xl font-bold mb-4">
              Carrito de Compras
            </h1>
            <p className="text-zinc-400 text-lg mb-6">Tu carrito está vacío</p>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="bg-zinc-700 px-6 py-4 border-b border-zinc-600">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-bold">
                Carrito de Compras ({getTotalItems()} producto/s)
              </h1>
              <button
                onClick={clearCart}
                className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
              >
                Vaciar carrito
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 p-4 bg-zinc-700 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-2">
                      ${item.price.toFixed(2)} c/u
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-300 text-sm">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecreaseQuantity(item)}
                      className="flex items-center justify-center w-8 h-8 text-white bg-zinc-600 rounded hover:bg-zinc-500 transition-colors"
                    >
                      <RiSubtractLine size={16} />
                    </button>

                    <span className="text-white font-semibold min-w-[2rem] text-center text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleIncreaseQuantity(item)}
                      className="flex items-center justify-center w-8 h-8 text-white bg-zinc-600 rounded hover:bg-zinc-500 transition-colors"
                    >
                      <RiAddLine size={16} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center justify-center w-8 h-8 text-red-400 hover:text-red-300 transition-colors ml-2"
                    >
                      <RiDeleteBin6Line size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-700 bg-zinc-800 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-xl font-semibold">Total:</span>
              <span className="text-white text-2xl font-bold">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors">
                Proceder con el Pago
              </button>
              <Link
                to="/"
                className="text-zinc-400 hover:text-white text-sm transition-colors"
              >
                ← Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
