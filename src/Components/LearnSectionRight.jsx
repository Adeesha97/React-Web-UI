import React from "react";
import ReactImg from "../Utils/Images/react.svg";

const LearnSectionRight = () => {
  return (
    <section className="p-5 bg-dark text-light" id="learn">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Learn React</h2>
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
          <div className="col-md">
            <img src={ReactImg} alt="fundamentalsImg" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSectionRight;
