import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../styles/UserInfo.scss";
import { useState } from "react";

function UserInfo({ user, onDelete, darkMode }) {
  //filtering users by showing/hiding user's details
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Card className={`UserInfo-card ${darkMode ? "UserInfo-dark-theme" : ""}`}>
      {" "}
      <Card.Body>
        <Card.Title className="UserInfo-title">
          {user.login.username}
        </Card.Title>
      </Card.Body>
      <Card.Img
        variant="top"
        src={user.picture.large}
        className="UserInfo-img"
      />
      <Card.Body className="UserInfo-btn">
        <Button variant="info" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide profile" : "Show profile"}
        </Button>
      </Card.Body>
      {isVisible && (
        <div>
          {/* i added darkmode to children because somehow it won't apply to a parent tag */}
          <ListGroup className="list-group-flush">
            <ListGroup.Item className={darkMode ? "UserInfo-dark-theme" : ""}>
              Location: {user.location.country}
            </ListGroup.Item>
            <ListGroup.Item className={darkMode ? "UserInfo-dark-theme" : ""}>
              Group: {user.group}
            </ListGroup.Item>
            <ListGroup.Item className={darkMode ? "UserInfo-dark-theme" : ""}>
              First name: {user.name.first}
            </ListGroup.Item>
            <ListGroup.Item className={darkMode ? "UserInfo-dark-theme" : ""}>
              Last name: {user.name.last}
            </ListGroup.Item>
            <ListGroup.Item className={darkMode ? "UserInfo-dark-theme" : ""}>
              Active: {user.isActive.toString()}
            </ListGroup.Item>
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
