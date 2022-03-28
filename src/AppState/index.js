import React from "react";
import "./AppState.css";

const AppState = ({ state, path, searchValue }) => {
  let subtitle;
  let text;

  if (state === "empty") {
    subtitle = "Your todolist is Empty!";
    text = "What task do you have in mind?";
  } else if (state === "notFound") {
    text = `No results for "${searchValue}"`;
  }

  return (
    <div className="state-image-containter">
      <h2 className="subtitle">{subtitle}</h2>
      <img src={path} className="state-img" />
      <p className="state-text">{text}</p>
    </div>
  );
};

export { AppState };
