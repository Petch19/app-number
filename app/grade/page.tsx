"use client";

import { useState } from "react";

export default function GradePage() {
  const [score, setScore] = useState<string>("");
  const [grade, setGrade] = useState<string | null>(null);

  const calculateGrade = () => {
    const s = Number(score);

    let grade = "";
    if (s >= 80) grade = "A";
    else if (s >= 75) grade = "B+";
    else if (s >= 70) grade = "B";
    else if (s >= 65) grade = "C+";
    else if (s >= 60) grade = "C";
    else if (s >= 55) grade = "D+";
    else if (s >= 50) grade = "D";
    else grade = "F";

    setGrade(grade); // เก็บเกรดที่คำนวณได้
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ตัดเกรด</h1>

      <div style={styles.inputContainer}>
        <input
          type="number"
          value={score}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setScore(e.currentTarget.value)
          }
          className="score-input"
          placeholder="กรุณากรอกคะแนน"
        />

        <button onClick={calculateGrade} style={styles.button}>
          คำนวณ
        </button>
      </div>

      {grade && (
        <div style={styles.resultContainer}>
          <h2>
            <span style={styles.gradeText}>เกรดที่ได้:</span> 
            <span style={styles.gradeResult}>{grade}</span>
          </h2>
        </div>
      )}
    </div>
  );
}

// Styles สำหรับการตกแต่ง
const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center" as "center", // ระบุให้ชัดเจน
    backgroundColor: "#f4f7fc",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "50px auto",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    width: "70%",
    marginRight: "10px",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #007BFF",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  resultContainer: {
    marginTop: "20px",
  },
  gradeText: {
    color: "#4CAF50", // เปลี่ยนสีเฉพาะคำว่า "เกรดที่ได้"
    fontWeight: "bold",
    fontSize: "22px",
  },
  gradeResult: {
    fontWeight: "bold",
    fontSize: "22px",
    color: "#000", // สีของผลลัพธ์เกรด
  },
};
