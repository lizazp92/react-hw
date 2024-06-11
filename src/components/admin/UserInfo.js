import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../../styles/UserInfo.scss";
import { useState } from "react";

function UserInfo({ user, onDelete }) {
  //filtering users by showing/hiding user's details
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Card className="UserInfo-card">
      {" "}
      <Card.Body>
        <Card.Title className="UserInfo-title">
          Username: {user.username}
        </Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={user.icon} className="UserInfo-img" />
      <Card.Body className="UserInfo-btn">
        <Button variant="info" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide profile" : "Show profile"}
        </Button>
      </Card.Body>
      {isVisible && (
        <div>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>User ID: {user.id}</ListGroup.Item>
            <ListGroup.Item>Group: {user.group}</ListGroup.Item>
            <ListGroup.Item>
              Is active: {user.isActive.toString()}
            </ListGroup.Item>
            <ListGroup.Item>Last visit: {user.lastVisit}</ListGroup.Item>
          </ListGroup>
          <Card.Body className="UserInfo-btn">
            <Button variant="danger" onClick={() => onDelete(user.id)}>
              Remove
            </Button>
          </Card.Body>{" "}
        </div>
      )}
    </Card>
  );
}

export default UserInfo;
