import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

export default function StepGenerator() {
  const { categoryId } = useParams();
  const { get } = useApi();

  const [step, setStep] = useState(null);
  const [category, setCategory] = useState(null);

  async function fetchRandomStep() {
    const data = await get(`/steps/random?categoryId=${categoryId}`);
    setStep(data);
  }

  async function fetchCategory() {
    const data = await get(`/categories/${categoryId}`);
    setCategory(data);
  }

  useEffect(() => {
    fetchCategory();
    fetchRandomStep();
  }, [categoryId]);

  return (
    <div className="step-container">
      <h2 className="step-title">
        {category ? `${category.name} – Today’s 1% Better Step` : "Loading..."}
      </h2>

      <div className="step-card">{step ? step.text : "Loading..."}</div>

      <button className="button step-button" onClick={fetchRandomStep}>
        Give me another
      </button>
    </div>
  );
}
