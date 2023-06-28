import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <div className="container">
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2021-2023 Pixel</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
