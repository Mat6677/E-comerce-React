import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../Components/NavBar/Header";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { Item } from "../pages/Item";

export const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/E-comerce-React" element={<Home />} />
        <Route path="/E-comerce-React/category/:categoryId" element={<Category />} />
        <Route path="/E-comerce-React/item/:itemId" element={<Item />} />
      </Routes>
    </Router>
  );
};
