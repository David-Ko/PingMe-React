import React from "react";
import sample from "../assets/videos/video.mp4";

function Welcome(props) {
  return (
    <div className="container welcome">
      <div className="position-relative js-object-log landing-page-div-1 text-center">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <article>
            <h2 className="display-4 font-weight-normal">Ping me</h2>
            <h4 className="moto">
              A leading app for working professional to expand their horizons
              and network
            </h4>
            {true ? (
              <>
                <button
                  type="button"
                  className="btn btn-secondary mr-3"
                  data-toggle="modal"
                  data-target="#exampleModal-signup"
                >
                  Sign up
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#exampleModal-login"
                >
                  Log In
                </button>
              </>
            ) : null}
          </article>
          <video className="video-background" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
