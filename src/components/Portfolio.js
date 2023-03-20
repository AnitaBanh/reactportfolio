import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "../styles/index.css";
import { Col, Row } from "react-bootstrap";
import propairs from "../assets/propairs.png";
import trivia from "../assets/trivia.png";

export default function Portfolio() {
  return (
    <div>

       <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col className="d-flex"> 
    <Card style={{ width: "18rem", display: "flex-row" }}>
      <Image src={propairs} height= {135}/>
      <Card.Body>
        <Card.Title>ProPairs</Card.Title>
        <Card.Text>Explore team compatibility based on personality type</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Deployed: Mar 2023 </ListGroup.Item>
        <ListGroup.Item>
          Technologies: <br></br>React.js, MongoDB, Mongoose, GraphQL, bcrypt, Node,js, Express.js
        </ListGroup.Item>
        <ListGroup.Item>
          github: <a href="https://github.com/MZernick/Project-Partners">https://github.com/MZernick/Project-Partners</a>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button href= "https://pro-pairs.herokuapp.com/" variant="primary" >View</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", display: "flex-row"  }}>
      <Image  src={trivia} height= {135}/>
      <Card.Body>
        <Card.Title>Trivia Tracker</Card.Title>
        <Card.Text>Climb the scoreboard by answering the most questions correctly</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Deployed: Feb 2023 </ListGroup.Item>
        <ListGroup.Item>
          Technologies: Handlebars.js, MySQL, Sequelize ORM, Node,js, Express.js
        </ListGroup.Item>
        <ListGroup.Item>
          github: <a href="https://github.com/MZernick/Trivia-Tracker">https://github.com/MZernick/Trivia-Tracker</a>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button href= "https://trivia-tracker.herokuapp.com/" variant="primary" >View</Button>
      </Card.Body>
    </Card>
 
    </Col>
      ))}
    </Row>
    </div>
  );
}
