import { RiCheckboxCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function OrderSuccess({ orderId, onBackToCart }) {
  return (
    <div className="min-h-screen bg-zinc-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <RiCheckboxCircleLine className="text-green-400 text-6xl" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-4">
            ¡Compra Exitosa!
          </h1>
          <p className="text-zinc-300 text-lg mb-2">
            Tu orden ha sido procesada correctamente.
          </p>
          <p className="text-zinc-400 text-md mb-6">
            ID de orden:{" "}
            <span className="text-blue-400 font-mono">{orderId}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Continuar Comprando
            </Link>
            <button
              onClick={onBackToCart}
              className="inline-block bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Ver Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
