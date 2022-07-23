import React from "react";

const Map = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location :</span> 50 Main St
                Boston MA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone :</span> (555)
                555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone :</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email :</span>{" "}
                505enrollment@frontendbc.test
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email :</span>{" "}
                505Student@frontendbc.test
              </li>
            </ul>
          </div>
          <div className="col-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Map;
