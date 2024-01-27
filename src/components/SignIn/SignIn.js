import React from "react";
import "./SignIn.css";
import { useState } from "react";

export default function SignIn({
  onSignInClick,
  onRegisterClick,
  currentPage,
  onRegisterSignInClick,
  onUserSubmit,
}) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInName, setSignInName] = useState("");

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const onNameChange = (event) => {
    setSignInName(event.target.value);
  };

  const sendSignIn = () => {
    console.log(signInEmail, signInPassword);
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.email === signInEmail) {
          onSignInClick();
          onUserSubmit(result);
          console.log(result);
        }
      });
  };

  const sendRegister = () => {
    console.log(signInEmail, signInPassword);
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
        name: signInName,
      }),
    });
    onRegisterSignInClick();
  };

  if (currentPage === "signInPage") {
    return (
      <div>
        <main className="pa4 black-80">
          <div
            className="measure center ba pa4 shadow-5 bg-near-transparent
            "
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10%",
            }}
          >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend
                className="
            white f2 fw6 ph0 mh0"
              >
                Sign In
              </legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                // onClick={onSignInClick}
                onClick={sendSignIn}
              />
            </div>
            <div className="lh-copy mt3" onClick={onRegisterClick}>
              <p className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <main className="pa4 black-80">
          <div
            className="measure center ba pa4 shadow-5 bg-near-transparent"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10%",
            }}
          >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend
                className="
              white f2 fw6 ph0 mh0"
              >
                Register
              </legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register and SIGN IN!"
                onClick={sendRegister}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
