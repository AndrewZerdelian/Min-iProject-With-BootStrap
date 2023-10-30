import React from "react";
import BG from "./Assets/restaurant.png";
import PROFILE from "./Assets/me.jpg";

export default function App() {
  return (
    <main className="main vh-100">
      <nav className="navbar navbar-expand-lg bg-body-transparent fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={BG} className="Brand-Name" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder text-white">
              <li className="nav-item ">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-info" href="/">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="/">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="/">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="d-flex align-items-center vh-100 container">
        <div className="text-white">
          <h1>WE Are Professionals</h1>
          <p>Developer,Graphics & Web Designers</p>
          <button className=" btn bg-info">View Profile</button>
        </div>
      </header>

      <div className="container py-5">
        <div className="row">
          <div className="text-center About  position-relative d-flex justify-content-center align-items-center py-5">
            <h3 className="position-absolute ">About</h3>
            <h1 className="BackgroundAbout position-absolute">About</h1>
          </div>
          <p className="col-12 text-center py-5">
            lorem loremloremlorem loremlorem lorem{" "}
          </p>
          <div className="row align-items-center">
            <img className="col-4 " src={PROFILE} />

            <div className="col-7 offset-1 ps-5 ">
              <h2> ROBIN STEEL</h2>
              <h3>Creative UI/UX Designer, Developer </h3>
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Services-Container"
        className="container-fluid py-5 vh-100 text-white"
      >
        <div className="position-relative d-flex justify-content-center align-items-center py-5">
          <h1 id="SERVICES" className="position-absolute">
            SERVICES
          </h1>
          <h2 className="position-absolute">SERVICES</h2>
        </div>
        <p className="text-center py-5">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        </p>

        <div className="container ">
          <div className="row text-dark text-center ">
          <div className="text-dark col-4 p-3">
              <div className=" bg-white p-5">
                <h1>BRANDING</h1>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem Lorem{" "}
                </p>
              </div>
            </div>
            <div className="text-dark col-4 p-3">
              <div className=" bg-white p-5">
                <h1>BRANDING</h1>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem Lorem{" "}
                </p>
              </div>
            </div>
            <div className="text-dark col-4 p-3">
              <div className=" bg-white p-5">
                <h1>BRANDING</h1>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem Lorem{" "}
                </p>
              </div>
            </div>
            <div className="text-dark col-4 p-3">
              <div className=" bg-white p-5">
                <h1>BRANDING</h1>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem Lorem{" "}
                </p>
              </div>
            </div>
            <div className="text-dark col-4 p-3">
              <div className=" bg-white p-5">
                <h1>BRANDING</h1>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem Lorem{" "}
                </p>
              </div>
            </div>
            <div className="text-dark col-4 p-3">
              <div className=" bg-white p-5">
                <h1>BRANDING</h1>
                <p>
                  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  Lorem Lorem Lorem{" "}
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  );
}
