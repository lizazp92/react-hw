import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import AlertMessage from "./AlertMessage";

function Login({ handleLogin }) {
  //if user loggs in under "user", landing page is rendered
  //if user loggs in under "admin", admin page is rendered
  //if user makes a mistake in username/password, AlertMessage is rendered

  //array with usernames and passwords
  const users = [
    {
      username: "admin1",
      password: "123",
    },
    {
      username: "user1",
      password: "123",
    },
  ];
  // initial state
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // useState for errors
  const [loginErrorAlert, setLoginErrorAlert] = useState(false);
  const [errorAlertMessage, setErrorAlertMessage] = useState("");

  const checkUser = () => {
    const user = users.find((user) => user.username === data.username);
    if (user) {
      if (user.password === data.password) {
        console.log("Logged in");
        setLoginErrorAlert(false); // hide alert if logged in

        // handling logging in from app.js
        handleLogin(user.username);
      } else {
        console.log("Wrong password");
        setLoginErrorAlert(true);
        setErrorAlertMessage("password");
      }
    } else {
      console.log("Wrong username");
      setLoginErrorAlert(true);
      setErrorAlertMessage("username");
    }
  };

  //getting user's input as a value
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    checkUser();
  };

  return (
    <section className="Login">
      <div>
        {loginErrorAlert && (
          <AlertMessage errorAlertMessage={errorAlertMessage} />
        )}
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              name="username"
              onChange={changeHandler}
              value={data.username}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
              value={data.password}
            />
          </Form.Group>
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </section>
  );
}

export default Login;
