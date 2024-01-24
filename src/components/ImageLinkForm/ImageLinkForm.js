import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm({ onImageURLChange, onButtonSubmit }) {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your images! Give it a try."}
      </p>
      <div className="center">
        <div className="center pa3 br3 shadow-5 form w-60">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onImageURLChange}
            defaultValue={
              "https://img.freepik.com/foto-gratis/vista-frontal-retrato-joven-bella-mujer-despues-spa_176420-8732.jpg?w=1380&t=st=1706072715~exp=1706073315~hmac=ed2280004a93b4dbbf211aae8385020761e6083b51ddc850dcf8815e2fa1863f"
            }
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
