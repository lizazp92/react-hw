import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function UserInfo({ user }) {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: user.isActive === false ? "grey" : "",
      }}
    >
      <Card.Body>
        <Card.Title>User ID:{user.id}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item
          style={{ color: user.isActive === false ? "grey" : "" }}
        >
          Username: {user.username}
        </ListGroup.Item>
        <ListGroup.Item
          style={{ color: user.isActive === false ? "grey" : "" }}
        >
          Is active: {user.isActive.toString()}
        </ListGroup.Item>
        <ListGroup.Item
          style={{ color: user.isActive === false ? "grey" : "" }}
        >
          Last visit: {user.lastVisit}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default UserInfo;
