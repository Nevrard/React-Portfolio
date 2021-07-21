import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import vibeMusical from "../../assets/images/vibeMusical.png";
import NoteTaker from "../../assets/images/NoteTaker.PNG";
import TeamProfile from "../../assets/images/TeamProfile.PNG";
import weatherDashboard from "../../assets/images/weatherDashboard.png";
import FitnessTracker from "../../assets/images/FitnessTracker.PNG";
import EmployeeTracker from "../../assets/images/EmployeeTracker.PNG";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <a href="https://wellandgood.github.io/BCS-Project-1/">
            <MDBCardImage
            style={{ width: "485px" }}
            src={vibeMusical}
            alt="vibe Musical"
            top
          /> </a>
          <MDBCardBody>
            <MDBCardTitle tag="h5">Vibe Musical</MDBCardTitle>
            <MDBCardText>
            Vibe Musical, a brand new app that teaches you all about music. We log instruments,
            and gather their history. 
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Nevrard/BCS-Project-1"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <a href="https://www.youtube.com/watch?v=bs42u_rFaGk">
            <MDBCardImage
            className="img-fluid"
            src={EmployeeTracker}
            alt="Employee Tracker"
            top
          /></a>
          <MDBCardBody>
            <MDBCardTitle tag="h5">Employee Tracker</MDBCardTitle>
            <MDBCardText>
            The applicaction was built as tool for a an Employer to be able to manage his team, 
            differents departments , roles within his organisation
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Nevrard/Employee-Tracker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <a href="https://workout-trackersoft.herokuapp.com/?id=60e5d579fc4a390015893c6b">
            <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src={FitnessTracker}
            alt="Fitness"
            top
          /></a>
          <MDBCardBody>
            <MDBCardTitle tag="h5">Fitness Tracker</MDBCardTitle>
            <MDBCardText>
              With this app the user can log all exercises they perform in their
              entire workout. After the user has submitted a workout they can
              edit the workout after and view past workouts.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Nevrard/Workout-Tracker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <a href="https://www.youtube.com/watch?v=K73ewNIAFtE"><MDBCardImage
            className="img-fluid"
            src={TeamProfile}
            alt="Team Generator"
            top
          /></a>
          <MDBCardBody>
            <MDBCardTitle tag="h5">Team Profile Generator</MDBCardTitle>
            <MDBCardText>
              A command line application that allows the user to add and remove
              employees with their employee information
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Nevrard/Team-Profile-Generator"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <a href="https://nevrard.github.io/Weather-Dashboard/">
            <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src={weatherDashboard}
            alt="Weather"
            top
          /></a>
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Nevrard/Weather-Dashboard"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
         
          <a href="https://note-taker-app-nodejs.herokuapp.com/">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src={NoteTaker}
            alt="NoteTker"
            top
          /> </a>
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
            <MDBCardText>
            This application is built to help user to take notes and stores them in the way
             the user can access them anytime. User can create a new note by specifying a Title,
             type the content.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Nevrard/Note-Taker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      
    </MDBContainer>
  );
};

export default Projects;