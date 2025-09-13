import { RiShoppingCart2Fill, RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";



export default function ItemCard(product) {
  console.log(product.product.id);
  return (
    <div className="relative flex flex-col gap-3 p-4 w-56 bg-zinc-800 rounded-2xl">
      <div className="relative z-[5] w-full h-32 bg-white rounded-lg overflow-hidden cursor-pointer">
        <img src={product.product.image} alt="imagen del producto" />
      </div>

      <div className="truncate text-base font-semibold text-white capitalize">
        <span> {product.product.title} </span>
      </div>

      <div className="text-sm text-zinc-300">
        <span> Category </span>
        <p className="text-white font-bold"> {product.product.category} </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold text-white">
          <span>${product.product.price}</span>
        </div>
        <button className="flex items-center justify-center gap-1 p-2 w-full text-sm font-medium text-zinc-100 whitespace-nowrap  rounded-lg cursor-pointer bg-blue-600 shadow-[inset_0_0_0.25rem_1px_#d9d9d9]">
          <RiShoppingCart2Fill />
          <span>Añadir al carrito</span>
        </button>
        <Link
          to={`/product/${product.product.id}`}
          className="flex items-center justify-center gap-1 p-2 w-full text-sm font-medium text-zinc-100 whitespace-nowrap  rounded-lg cursor-pointer  shadow-[inset_0_0_0.25rem_1px_#d9d9d9]"
        >
          <RiSearch2Line />
          <span>Ver detalles</span>
        </Link>
      </div>
    </div>
  );
}
