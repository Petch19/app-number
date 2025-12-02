"use client";

import { useState } from "react";

export default function calculate() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    setResult(a + b);
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        color: "#333"
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
        บวกเลข 2 จำนวน
      </h1>

      <input
        type="number"
        placeholder="ตัวเลขที่ 1"
        value={num1}
        onChange={(e) => setNum1(e.currentTarget.value)}
        style={{
          padding: "12px",
          fontSize: "16px",
          marginBottom: "12px",
          display: "block",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ddd",
          outline: "none",
          transition: "border-color 0.3s ease",
          color: "#333"
        }}
      />
      <input
        type="number"
        placeholder="ตัวเลขที่ 2"
        value={num2}
        onChange={(e) => setNum2(e.currentTarget.value)}
        style={{
          padding: "12px",
          fontSize: "16px",
          marginBottom: "20px",
          display: "block",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ddd",
          outline: "none",
          transition: "border-color 0.3s ease",
          color: "#333"
        }}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        คำนวณ
      </button>

      {result !== null && (
        <h2
          style={{
            marginTop: "20px",
            fontSize: "22px",
            color: "#4CAF50",
            fontWeight: "600",
          }}
        >
          ผลลัพธ์: {result}
        </h2>
      )}
    </div>
  );
}
