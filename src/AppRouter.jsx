import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./Layouts/Layout";
import ItemDetail from "./Components/ItemDetail";
import ItemListContainer from "./Components/ItemListContainer";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route
          path="/product/joyeria"
          element={<ItemListContainer category="jewelery" text="Joyeria" />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
