import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../../styles/UserInfo.scss";

function UserInfo({ user }) {
  return (
    <Card className="UserInfo-card">
      {" "}
      <Card.Body>
        <Card.Title className="UserInfo-title">
          Username: {user.username}
        </Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={user.icon} className="UserInfo-img" />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>User ID: {user.id}</ListGroup.Item>
        <ListGroup.Item>Group: {user.group}</ListGroup.Item>
        <ListGroup.Item>Is active: {user.isActive.toString()}</ListGroup.Item>
        <ListGroup.Item>Last visit: {user.lastVisit}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default UserInfo;
