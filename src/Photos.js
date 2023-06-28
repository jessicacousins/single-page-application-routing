import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import angryCat from "./images/angrycat.png";
import fox from "./images/fox.png";
import doe from "./images/doe.png";
import twocats from "./images/twocats.png";

function Products() {
  return (
    <div className="container photo-group">
      <div id="photos">
        <h2 className="ai-art">AI Art</h2>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="cat">
                  <img
                    src={angryCat}
                    className="img-fluid cat"
                    alt="angry orange cat"
                  />
                </div>
              </div>
              <div className="col">
                <div className="doe">
                  <img
                    src={doe}
                    className="img-fluid"
                    alt="doe portrait in a garden"
                  />
                </div>
              </div>
              <div className="col">
                <div className="twocats">
                  <img
                    src={twocats}
                    className="img-fluid"
                    alt="sunset with two cats"
                  />
                </div>
              </div>
              <div className="col">
                <div className="fox">
                  <img
                    src={fox}
                    className="img-fluid"
                    alt="fox portrait in a forest"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          <a href="#" className="btn  btn-primary my-3 mx-2">
            Buy Image Prompt
          </a>
          <a href="#" className="btn btn-success my-3 mx-2">
            Purchase Unlimited Plan
          </a>
        </p>
      </div>
    </div>
  );
}

export default Products;
