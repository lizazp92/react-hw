import { IoIosArrowForward } from "react-icons/io";
import React, { useRef } from "react";
import Button from "react-bootstrap/Button";

function Main() {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello, " + inputRef.current.value + "!");
    console.log("The form has been submitted.");
    event.target.reset();
  };
  return (
    <main className="Main">
      <div className="Main-form-container">
        <form
          className="Main-greetForm"
          id="Main-greetForm"
          onSubmit={handleSubmit}
        >
          <label for="addName"></label>
          <input
            type="text"
            placeholder="Enter your name"
            id="addName"
            name="addName"
            ref={inputRef}
            className="Main-greetForm-input-text"
          />
          <Button
            variant="success"
            id="addNameBtn"
            type="submit"
            className="Main-greetForm-btn"
          >
            <span className="Main-greetForm-btn-icon">
              <IoIosArrowForward />
            </span>
          </Button>
        </form>
      </div>
    </main>
  );
}

export default Main;