import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import StepGenerator from "./pages/StepGenerator.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:categoryId" element={<StepGenerator />} />
    </Routes>
  );
}
