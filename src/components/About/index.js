import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://avatars0.githubusercontent.com/u/64516562?s=460&u=2778809b5be3b0ba187454d6c12564c0e67c369b&v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Collin Hodgson. I recently graduated a Full Stack
            Web Developer program at the University of Utah and received
            certificate of completion. Currently I live in Ogden, UT. I am
            actively looking for job opportunities as a Junior Web Developer in
            northern Utah. When I am not creating websites some of my hobbies
            include golfing, video games, and hiking with my dog.
          </p>
          <p style={{ fontSize: "27px" }}>
            I am proficient with computers and have good understanding of
            Microsoft OS and Microsoft Office. I also have experience using
            Linux OS. I am committed to high standards of user experience,
            usability, and speed. I lend detailed knowledge of SEO to increase
            visibility. I am detail focused and an ambitious problem solver with
            a passion for learning new skills.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;