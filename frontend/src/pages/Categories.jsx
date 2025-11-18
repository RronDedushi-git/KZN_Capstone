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
    <div style={{ padding: "20px" }}>
      <h1>Choose a Category</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon];

          return (
            <li
              key={cat._id}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <Icon size={24} style={{ marginRight: "10px" }} />
              {cat.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
