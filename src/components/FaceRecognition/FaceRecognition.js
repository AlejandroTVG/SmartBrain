import React from "react";
import "./FaceRecognition.css";

export default function FaceRecognition({ imageURL, boundingBox }) {
  console.log(boundingBox);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          className="br3"
          src={imageURL}
          alt=""
          width="700px"
          height="auto"
          onError={(event) => {
            event.target.src =
              "https://img.freepik.com/foto-gratis/vista-frontal-retrato-joven-bella-mujer-despues-spa_176420-8732.jpg?w=1380&t=st=1706072715~exp=1706073315~hmac=ed2280004a93b4dbbf211aae8385020761e6083b51ddc850dcf8815e2fa1863f";
            event.onerror = null;
          }}
        />
        <div
          className="bounding-box"
          style={{
            top: boundingBox.topRow,
            bottom: boundingBox.bottomRow,
            left: boundingBox.leftCol,
            right: boundingBox.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
}
