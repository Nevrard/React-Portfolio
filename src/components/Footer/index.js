import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer class="page-footer fixed-bottom font-small special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/Nevrard"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="linkedin.com/in/evrard-ndanga-655306a7"
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>

            <a
              class="btn-floating btn-li mx-1"
              href="mailto:adam@gmail.com"
              font
            > <strong>
              E-mail : 
              </strong>
               ndangaevrard@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2021 Copyright:
        <a href="https://github.com/Collin-Hodgson/React-Portfolio">
          {" "}
          Evrard NDANGA
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;