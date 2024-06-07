import { IoIosArrowForward } from "react-icons/io";
import React, { useRef } from "react";

function Main() {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello, " + inputRef.current.value + "!");
    console.log("The form has been submitted.");
    event.target.reset();
  };
  return (
    <main className="d-flex align-items-center flex-column">
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
          />
          <button
            id="addNameBtn"
            type="submit"
            className="btn btn-success rounded-0"
          >
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
