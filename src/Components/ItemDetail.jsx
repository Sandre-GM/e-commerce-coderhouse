export default function ItemDetail(product) {
  console.log(product.product.rating);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-64 object-contain"
          src={product.product.image}
          alt={product.product.title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {product.product.title}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.product.price}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-600">
                {product.product.rating.rate} ({product.product.rating.count}{" "}
                reseñas)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
