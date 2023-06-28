import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import turtle from "./images/turtle.png";

const Main = () => {
  return (
    <div className="container">
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light featuredphoto">Featured Photo</h1>
              <p className="lead text-muted">
                Each day we showcase a generated photo with a free prompt for
                the community to use! Enjoy and get creative with your own
                styles!
              </p>
            </div>
          </div>
          <div className="container">
            <div className="col">
              <img className="turtle" src={turtle} alt="turtle at night" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
