import React from "react";
// import hero from ".../Assets/img/main-image.png";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function OnBoarding() {
  const navigate = useNavigate();
  function Location(e) {
    e.preventDefault();
    navigate("/Locations");
  }
  return (
    <Container fluid="md">
      <Row>
        {/* <Col className=" d-md-block">
          <img className="heroImg" src={hero} alt="" />
        </Col> */}
      </Row>
      <Row>
        <Col className="heroTitleBox">
          <h2 className="heroTitle">Hi, nice to meet you!</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="heroPara">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            odit sit ipsa illo reiciendis iste consequatur earum cupiditate.
            Animi aperiam deleniti ad consectetur sed minima quaerat modi sit
            veniam dolorum.
          </p>
        </Col>
      </Row>
      <div className="form-group row justify-content-center ">
        <div className="col-sm-3">
          <Button
            className="d-block saveBtn"
            id="location"
            onClick={(e) => {
              Location(e);
            }}
          >
            use Current Location
          </Button>
          <Row>
            <Col>
              <p className="nomPara ">Select manually</p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default OnBoarding;