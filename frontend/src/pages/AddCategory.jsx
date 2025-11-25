import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";

export default function AddCategory() {
  const api = useApi();
  const nav = useNavigate();
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    await api.post("/categories", {
      name,
      icon: "footprints",
    });

    nav("/categories");
  }

  return (
    <div className="page-container">
      <h1>Add a New Category</h1>

      <form onSubmit={handleSubmit} className="add-category-form">
        <input
          className="wide-input"
          type="text"
          placeholder="Category name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="button">Add Category</button>
      </form>

      <button
        className="back-link"
        onClick={() => nav("/categories")}
        style={{ marginTop: "15px" }}
      >
        ← Back to Categories
      </button>
    </div>
  );
}
