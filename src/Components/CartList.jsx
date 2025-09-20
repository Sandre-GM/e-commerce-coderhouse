import CartItem from "./CartItem";

export default function CartList({ cart, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="p-6">
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
