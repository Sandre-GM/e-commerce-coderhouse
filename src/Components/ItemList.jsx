import ItemCard from "./ItemCard";

export default function ItemList({ products }) {
    console.log(products)
  return (
    <div className="flex gap-5 flex-wrap justify-center px-75 py-15">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}
