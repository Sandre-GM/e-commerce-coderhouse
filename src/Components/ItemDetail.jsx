import AddToCartButton from "./AddToCartButton";

export default function ItemDetail({ product }) {
  return (
    <div className="min-h-screen bg-zinc-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="w-full h-64 md:h-full object-contain p-4"
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {product.title}
                </h2>
                <p className="text-zinc-300 mb-4">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-400">
                    ${product.price}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-zinc-300">
                      {product.rating?.rate || 0} ({product.rating?.count || 0}{" "}
                      reseñas)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
