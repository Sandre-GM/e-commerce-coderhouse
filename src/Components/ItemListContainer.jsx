import { useEffect, useState } from "react";
import { getProducts } from "../Services/eCommerceService";
import ItemCard from "./ItemCard";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); //

  return (
    <>
      <h2 className="text-2xl bg-gray-600 text-white text-center uppercase py-3 font-light">
        {props.text}
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
      <div className="flex gap-5 flex-wrap justify-center px-75 py-15">
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
