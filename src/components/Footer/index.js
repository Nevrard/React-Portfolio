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
              href="https://github.com/Collin-Hodgson"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/collinhodgson?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbaDSOG4pSUKwACfo%2Bmpf9w%3D%3D"
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://github.com/Collin-Hodgson/React-Portfolio">
          {" "}
          Collin P. Hodgson
        </a>
      </div>
    </footer>
  );
}

export default Footer;