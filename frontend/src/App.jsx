import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import StepGenerator from "./pages/StepGenerator";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<StepGenerator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
