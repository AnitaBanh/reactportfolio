import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "../styles/index.css";
import { Col, Row } from "react-bootstrap";
import propairs from "../assets/propairs.png";
import trivia from "../assets/trivia.png"

export default function Portfolio() {
  return (
    <div>

       <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col className="d-flex"> 
    <Card style={{ width: "18rem", display: "flex-row" }}>
      <Image size="100 160" src={propairs} />
      <Card.Body>
        <Card.Title>ProPairs</Card.Title>
        <Card.Text>Explore team compatibility based on personality type</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Deployed: Mar 2023 </ListGroup.Item>
        <ListGroup.Item>
          Technologies: React.js, MongoDB, Mongoose, GraphQL, bcrypt, Node,js, Express.js
        </ListGroup.Item>
        <ListGroup.Item>
          github: https://github.com/MZernick/Project-Partners
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button href= "https://pro-pairs.herokuapp.com/" variant="primary" >View</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", display: "flex-row"  }}>
      <Image  src={trivia} />
      <Card.Body>
        <Card.Title>Trivia Tracker</Card.Title>
        <Card.Text>Answer correctly to climb the scoreboard!</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Deployed: Feb 2023 </ListGroup.Item>
        <ListGroup.Item>
          Technologies: Handlebars,js, MySQL, Sequelize ORM, Node,js, Express.js
        </ListGroup.Item>
        <ListGroup.Item>
          github: https://github.com/MZernick/Trivia-Tracker
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
