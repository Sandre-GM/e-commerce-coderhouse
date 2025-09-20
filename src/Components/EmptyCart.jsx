import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 text-center">
          <h1 className="text-white text-3xl font-bold mb-4">
            Carrito de Compras
          </h1>
          <p className="text-zinc-400 text-lg mb-6">
            Tu carrito está vacío
          </p>
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
