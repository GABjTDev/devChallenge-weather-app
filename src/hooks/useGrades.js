import { useState } from "react";

export const useGrades = () => {
  const [grades, setGrades] = useState("C");

  const handleGrades = (e, grade) => {
    const childrens =
      e.target.parentNode.parentNode.querySelectorAll(".temperature");

    childrens.forEach((child) => {
      if (child.classList.contains("temp-active")) {
        child.classList.remove("temp-active");
      }
    });

    e.target.parentNode.classList.add("temp-active");

    setGrades(grade);
  };

  return {
    grades,
    setGrades,
    handleGrades,
  };
};
