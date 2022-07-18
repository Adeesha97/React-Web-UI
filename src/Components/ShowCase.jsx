import React from "react";
import showcaseImg from "../Utils/Images/showcase.svg";

const Showcase = () => {
  return (
    //   showcase
    <section className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Become a <span className="text-warning"> Frontend Developer</span>
            </h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest techniques to prepare them for their first dev role.
            </p>
            <button className="btn btn-primary btn-lg">
              Start the Enrollment
            </button>
          </div>
          <img
            src={showcaseImg}
            alt="frontendDeveloper"
            className="img-fluid w-50 d-none d-sm-block"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
