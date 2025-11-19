import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
const api = useApi();

import {
  Leaf,
  Dumbbell,
  Heart,
  Bubbles,
  ChartNoAxesCombined,
} from "lucide-react";

const iconMap = {
  leaf: Leaf,
  dumbbell: Dumbbell,
  heart: Heart,
  bubbles: Bubbles,
  "chart-no-axes-combined": ChartNoAxesCombined,
};

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page-container">
      <h1>Choose a Category</h1>

      <ul className="category-list">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon];

          return (
            <li key={cat._id}>
              <Link to={`/category/${cat._id}`} className="category-item">
                <Icon size={26} />
                <span>{cat.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
