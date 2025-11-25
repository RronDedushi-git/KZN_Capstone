import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";

export default function ManageSteps() {
  const { categoryId } = useParams();
  const api = useApi();
  const nav = useNavigate();

  const [category, setCategory] = useState(null);
  const [steps, setSteps] = useState([]);
  const [newStep, setNewStep] = useState("");

  async function loadData() {
    const cat = await api.get(`/categories/${categoryId}`);
    const list = await api.get(`/steps/category/${categoryId}`);
    setCategory(cat);
    setSteps(list);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function addStep(e) {
    e.preventDefault();
    if (!newStep.trim()) return;

    const created = await api.post("/steps", {
      categoryId,
      text: newStep,
    });

    setSteps([...steps, created]);
    setNewStep("");
  }

  async function deleteStep(id) {
    await api.del(`/steps/${id}`);
    setSteps(steps.filter((s) => s._id !== id));
  }

  async function deleteCategory() {
    await api.del(`/categories/${categoryId}`);
    nav("/categories");
  }

  if (!category) return null;

  return (
    <div className="page-container">
      <h1>{category.name} — Manage Steps</h1>

      {/* Add Step Form */}
      <form onSubmit={addStep} className="add-step-form">
        <input
          className="wide-input"
          type="text"
          placeholder="Add a microstep..."
          value={newStep}
          onChange={(e) => setNewStep(e.target.value)}
        />
        <button className="button manage-small-btn">Add Step</button>
      </form>

      {/* Delete Category */}
      <button className="button delete-category-btn" onClick={deleteCategory}>
        Delete Category
      </button>

      {/* Steps List */}
      <ul className="step-list">
        {steps.map((step) => (
          <li key={step._id} className="step-item">
            <span className="step-text">{step.text}</span>

            <button onClick={() => deleteStep(step._id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Back Link */}
      <button
        className="back-link"
        onClick={() => nav("/categories")}
        style={{ marginTop: "30px" }}
      >
        ← Back to Categories
      </button>
    </div>
  );
}
