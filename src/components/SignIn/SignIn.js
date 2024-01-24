import React from "react";

export default function SignIn({
  onSignInClick,
  onRegisterClick,
  currentPage,
  onRegisterSignInClick,
}) {
  console.log(currentPage);
  if (currentPage === "signInPage") {
    return (
      <div>
        <main className="pa4 black-80">
          <div
            className="measure center w-30 ba pa4 shadow-5"
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
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={onSignInClick}
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
            className="measure center w-30 ba pa4 shadow-5"
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
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                type="submit"
                value="Register and SIGN IN!"
                onClick={onRegisterSignInClick}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
