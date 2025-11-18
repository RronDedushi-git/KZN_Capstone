import { useEffect, useState } from "react";
import API from "../hooks/useApi";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Choose a Category</h1>

      <ul>
        {categories.map((cat) => (
          <li key={cat._id}>
            {cat.icon} — {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
