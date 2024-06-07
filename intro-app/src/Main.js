import { IoIosArrowForward } from "react-icons/io";

function Main() {
  return (
    <main className="d-flex align-items-center flex-column">
      <div className="Main-form-container">
        <form className="Main-greetForm" id="Main-greetForm">
          <label for="addName"></label>
          <input
            type="text"
            placeholder="Enter your name"
            id="addName"
            name="addName"
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
