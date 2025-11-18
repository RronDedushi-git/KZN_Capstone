import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>KZN</h1>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
        Become 1% Better Today
      </h2>

      <p style={{ marginBottom: "40px", fontStyle: "italic" }}>
        Small Steps, Big Moves.
      </p>

      <Link
        to="/categories"
        style={{
          padding: "12px 24px",
          background: "black",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Choose a Category
      </Link>
    </div>
  );
}
