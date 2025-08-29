import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./Layouts/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
