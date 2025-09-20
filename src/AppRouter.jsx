import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./Layouts/Layout";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import CartPage from "./views/CartPage";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route
          path="/products/:category"
          element={<ItemListContainer text="Productos" />}
        />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
