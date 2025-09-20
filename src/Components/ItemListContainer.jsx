import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
} from "../Services/eCommerceService";

import ItemList from "./ItemList";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;
        if (category) {
          data = await getProductsByCategory(category);
        } else {
          data = await getProducts();
        }
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <h2 className="text-2xl bg-gray-600 text-white text-center uppercase py-3 font-light">
        {category ? category.toUpperCase() : props.text}
      </h2>
      {loading ? (
        <h2 className="text-center text-6xl m-10 font-mono  text-white">
          Cargando productos...
        </h2>
      ) : (
        <h2 className="text-center text-6xl m-10 font-mono text-white">
          Nuestros productos :
        </h2>
      )}
      <ItemList products={products} />
    </>
  );
}
