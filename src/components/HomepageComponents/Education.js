import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";

export default function Education() {
  const state = useContext(DataContext);
  const [education] = state.education;

  return (
    <div className="main-container">
      <div className="education">
        <h2 className="title">Education</h2>

        <div className="education-center">
          {education.map((item) => (
            <div className="single-education" key={item._id}>
              <p>{item.education}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
