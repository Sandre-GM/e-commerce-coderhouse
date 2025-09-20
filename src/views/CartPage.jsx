import { useCart } from "../context/CartContext";
import { useState } from "react";
import { createOrder } from "../Services/orderService";
import EmptyCart from "../Components/EmptyCart";
import OrderSuccess from "../Components/OrderSuccess";
import CartList from "../Components/CartList";
import CartSummary from "../Components/CartSummary";
import CheckoutSection from "../Components/CheckoutSection";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    addToCart,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

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

  const handleCheckoutSubmit = async (userData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await createOrder(userData, cart);

      if (result.success) {
        setOrderId(result.orderId);
        setOrderComplete(true);
        clearCart();
      } else {
        setError(result.error || "Error al procesar la orden");
      }
    } catch (err) {
      setError("Error al procesar la orden. Por favor intenta de nuevo.");
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartCheckout = () => {
    if (cart.length > 0) {
      setShowCheckout(true);
    }
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
    setOrderComplete(false);
    setOrderId(null);
    setError(null);
  };

  if (cart.length === 0 && !orderComplete) {
    return <EmptyCart />;
  }

  if (orderComplete) {
    return <OrderSuccess orderId={orderId} onBackToCart={handleBackToCart} />;
  }

  return (
    <div className="min-h-screen bg-zinc-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden">
            <div className="bg-zinc-700 px-6 py-4 border-b border-zinc-600">
              <div className="flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">
                  Carrito de Compras ({getTotalItems()} items)
                </h1>
                <button
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>

            <CartList
              cart={cart}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              onRemove={removeFromCart}
            />

            <CartSummary
              totalItems={getTotalItems()}
              totalPrice={getTotalPrice()}
              onClearCart={clearCart}
              onStartCheckout={handleStartCheckout}
            />
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <CheckoutSection
              showCheckout={showCheckout}
              onSubmit={handleCheckoutSubmit}
              isSubmitting={isSubmitting}
              error={error}
              onBackToCart={handleBackToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
