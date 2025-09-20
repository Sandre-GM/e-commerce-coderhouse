import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex items-center gap-6 p-4 bg-zinc-700 rounded-lg">
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg"
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
          onClick={() => onDecrease(item)}
          className="flex items-center justify-center w-8 h-8 text-white bg-zinc-600 rounded hover:bg-zinc-500 transition-colors"
        >
          <RiSubtractLine size={16} />
        </button>
        <span className="text-white font-semibold min-w-[2rem] text-center text-lg">
          {item.quantity}
        </span>
        <button
          onClick={() => onIncrease(item)}
          className="flex items-center justify-center w-8 h-8 text-white bg-zinc-600 rounded hover:bg-zinc-500 transition-colors"
        >
          <RiAddLine size={16} />
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="flex items-center justify-center w-8 h-8 text-red-400 hover:text-red-300 transition-colors ml-2"
        >
          <RiDeleteBin6Line size={18} />
        </button>
      </div>
    </div>
  );
}
