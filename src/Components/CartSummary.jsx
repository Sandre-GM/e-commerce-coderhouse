import { Link } from "react-router-dom";

export default function CartSummary({
  totalPrice,
  onStartCheckout,
  showCheckoutButton = true,
}) {
  return (
    <div className="border-t border-zinc-700 bg-zinc-800 px-6 py-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-white text-xl font-semibold">Total:</span>
        <span className="text-white text-2xl font-bold">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex flex-col items-center gap-3">
        {showCheckoutButton && (
          <button
            onClick={onStartCheckout}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Proceder con el Pago
          </button>
        )}
        <Link
          to="/"
          className="text-zinc-400 hover:text-white text-sm transition-colors"
        >
          ← Continuar comprando
        </Link>
      </div>
    </div>
  );
}
