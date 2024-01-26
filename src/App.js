import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const [imageURL, setImageURL] = useState(
    "https://img.freepik.com/foto-gratis/vista-frontal-retrato-joven-bella-mujer-despues-spa_176420-8732.jpg?w=1380&t=st=1706072715~exp=1706073315~hmac=ed2280004a93b4dbbf211aae8385020761e6083b51ddc850dcf8815e2fa1863f"
  );
  const [boundingBox, setboundingBox] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("signInPage");
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    entries: 0,
    joined: "",
  });
  let [rankCounter, setrankCounter] = useState(0);

  const onCount = () => {
    fetch("http://localhost:3000/image", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
      }),
    })
      .then((response) => response.json())
      .then((count) => setrankCounter(count));
  };

  const onUserSubmit = (userData) => {
    setUser(userData);
  };

  const onImageURLChange = (event) => {
    setImageURL(event.target.value);
    setboundingBox("");
  };

  const detectFace = (data) => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    setboundingBox({
      leftCol: data.left_col * width,
      topRow: data.top_row * height,
      rightCol: width - data.right_col * width,
      bottomRow: height - data.bottom_row * height,
    });
  };

  const onButtonSubmit = () => {
    const PAT = "3551add4c3fa4a219dfa8fb4226fee00";
    const USER_ID = "clarifai";
    const APP_ID = "main";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
    const IMAGE_URL = imageURL;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
              // "base64": IMAGE_BYTES_STRING
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const regions = result.outputs[0].data.regions;
        onCount();

        regions.forEach((region) => {
          // Accessing and rounding the bounding box values
          detectFace(region.region_info.bounding_box);
        });
      })
      .catch((error) => console.log("error", error));
  };

  const onSignInClick = () => {
    signedIn ? setSignedIn(false) : setSignedIn(true);
    console.log(signedIn);
    setCurrentPage("signInPage");
    console.log(user.entries);
  };

  const onNavSignInClick = () => {
    setCurrentPage("signInPage");
  };

  const onRegisterClick = () => {
    setCurrentPage("registerPage");
  };

  const onRegisterSignInClick = () => {
    setCurrentPage("registerPage");
    signedIn ? setSignedIn(false) : setSignedIn(true);
  };

  return (
    <div className="App">
      <Navigation
        onNavSignInClick={onNavSignInClick}
        onSignInClick={onSignInClick}
        signedIn={signedIn}
        onRegisterClick={onRegisterClick}
      />
      {signedIn ? (
        <div>
          {" "}
          <Logo />
          <Rank rankCounter={rankCounter} user={user} />
          <ImageLinkForm
            onImageURLChange={onImageURLChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition imageURL={imageURL} boundingBox={boundingBox} />
        </div>
      ) : (
        <SignIn
          onSignInClick={onSignInClick}
          onRegisterClick={onRegisterClick}
          currentPage={currentPage}
          onRegisterSignInClick={onRegisterSignInClick}
          onUserSubmit={onUserSubmit}
        />
      )}
      <ParticlesBg type="circle" bg={true} num={200} />{" "}
    </div>
  );
}

export default App;
