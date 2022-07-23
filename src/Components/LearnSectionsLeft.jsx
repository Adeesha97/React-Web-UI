import React from "react";
import fundamentalsImg from "../Utils/Images/fundamentals.svg";

const LearnSections = () => {
  return (
    <section className="p-5" id="learn">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img
              src={fundamentalsImg}
              alt="fundamentalsImg"
              className="img-fluid"
            />
          </div>
          <div className="col-md p-5">
            <h2>Learn The Fundamentals</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum est suscipit odit voluptas, eaque aperiam!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              molestiae dolores ipsam non laboriosam, omnis commodi quo aliquid
              enim natus laborum quae error possimus odit illo! Repudiandae,
              provident vitae. Officia.
            </p>
            <a href="%" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSections;
