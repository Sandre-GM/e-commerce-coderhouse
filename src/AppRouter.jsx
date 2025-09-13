import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./Layouts/Layout";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route
          path="/product/joyeria"
          element={<ItemListContainer category="jewelery" text="Joyeria" />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
