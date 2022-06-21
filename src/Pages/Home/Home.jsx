import React from "react";

const Home = () => {
  return (
    <main>
      <div className="container mx-auto d-flex align-items-center justify-content-between my-4">
        <div>
          <h1 className="fw-bold">
            ESET INTERNET SECURITY <br />
            <span className="fs-3 fw-normal">EDITION 2022</span>
          </h1>
          <p>
            Ideal for modern users concerned about their privacy, <br /> who
            actively use internet for shopping, banking, work and communication
            <br />
            Secures Windows, macOS and Android devices.
          </p>
        </div>
        <img
          width="400px"
          className="img-fluid"
          src="./images/product.jpg"
          alt=""
        />
      </div>
    </main>
  );
};

export default Home;
