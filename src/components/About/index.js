import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import image from "../../assets/images/Evrard.png";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr className="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src={image}
            className="float-left pr-4 pb-3 img-fluid"
            alt="Evrard NDANGA"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Evrard NDANGA. I have a master Degree in Information technology.
            I have been workingin the I.T field since 2015, where I have got al lot of experience , new skills in 
            System administration , Networking and Database administration.<br/>

            I recently graduatedfrom a Full stack development Bootcamp from Carleton University.

          </p>
          
          <p style={{ fontSize: "27px" }}>
            I am passionate with everything that goes with I.T  , learning new skills and working with Teams with
            different backgrounds in order to learn and share new skills.
            As Hobbies , I love  playing basketball and listening music

          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;