import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function UserInfo({ user }) {
  if (user.isActive === false) {
    return (
      <Card
        style={{
          width: "18rem",
          backgroundColor: "grey",
        }}
      >
        <Card.Body>
          <Card.Title>User ID:{user.id}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ color: "grey" }}>
            Username: {user.username}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "grey" }}>
            Is active: {user.isActive.toString()}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "grey" }}>
            Last visit: {user.lastVisit}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  } else
    return (
      <Card
        style={{
          width: "18rem",
        }}
      >
        <Card.Body>
          <Card.Title>User ID:{user.id}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Username: {user.username}</ListGroup.Item>
          <ListGroup.Item>Is active: {user.isActive.toString()}</ListGroup.Item>
          <ListGroup.Item>Last visit: {user.lastVisit}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
}

export default UserInfo;
