import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm({ onImageURLChange, onButtonSubmit }) {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your images! Give it a try."}
      </p>
      <div className="center">
        <div className="center pa4 br3 shadow-5 form">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onImageURLChange}
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
