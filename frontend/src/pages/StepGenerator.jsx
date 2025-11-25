import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

export default function StepGenerator() {
  const { categoryId } = useParams();
  const nav = useNavigate();
  const { get } = useApi();

  const [step, setStep] = useState(null);
  const [category, setCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  function handleDone() {
    setShowModal(true);
  }

  function handleNextStep() {
    setShowModal(false);
    fetchRandomStep();
  }

  return (
    <div className="step-container">
      <h2 className="step-title">
        {category ? `${category.name} – Today’s 1% Better Step` : "Loading..."}
      </h2>

      <div className="step-card">{step ? step.text : "Loading..."}</div>

      {/* DONE button */}
      <button className="button step-button" onClick={handleDone}>
        Done
      </button>

      {showModal && (
        <>
          <div className="modal-overlay" />

          <div className="modal">
            <h2 className="modal-title">🎉 Nice work!</h2>

            <p className="modal-text">
              You completed your 1% better step
              <br />
              today.
              <br />
              Keep going, little by little.
            </p>

            <div className="modal-buttons">
              <button className="button modal-main" onClick={handleNextStep}>
                Next Step
              </button>

              <button
                className="button modal-secondary"
                onClick={() => nav("/categories")}
              >
                Back to Categories
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
