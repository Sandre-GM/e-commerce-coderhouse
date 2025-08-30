import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Services/eCommerceService";

export default function ItemDetail() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">Cargando producto...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-600">Producto no encontrado</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-64 object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-600">
                {product.rating.rate} ({product.rating.count} reseñas)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
