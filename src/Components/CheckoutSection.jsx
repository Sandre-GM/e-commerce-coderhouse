import CheckoutForm from "./CheckoutForm";

export default function CheckoutSection({
  showCheckout,
  onSubmit,
  isSubmitting,
  error,
  onBackToCart
}) {
  if (!showCheckout) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center">
        <h3 className="text-white text-lg font-semibold mb-2">
          ¿Listo para comprar?
        </h3>
        <p className="text-zinc-400 text-sm mb-4">
          Completa tus datos para proceder con el pago de forma segura.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Completar Información
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <CheckoutForm
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
      {error && (
        <div className="bg-red-900 border border-red-700 rounded-lg p-4">
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}
      <button
        onClick={onBackToCart}
        className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        ← Volver al carrito
      </button>
    </div>
  );
}
