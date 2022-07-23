import React from "react";

const Instructors = () => {
  return (
    <section id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developers in the
          industry.
        </p>
        <div className="row g-4">
          {/* card 01 */}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="cardItemOne"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nulla et deleniti hic recusandae porro.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* card 02 */}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/26.jpg"
                  alt="cardItemOne"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Jane Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nulla et deleniti hic recusandae porro.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* card 03 */}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/18.jpg"
                  alt="cardItemOne"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Steve Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nulla et deleniti hic recusandae porro.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* card 04 */}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/8.jpg"
                  alt="cardItemOne"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Sara Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nulla et deleniti hic recusandae porro.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
