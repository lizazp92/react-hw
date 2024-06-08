import Landing from "./Landing";
import Login from "./Login";

function App() {
  // login page shows
  const isLoggedIn = false;
  //   landing page shows
  //   const isLoggedIn = true;
  return <div>{!isLoggedIn ? <Login /> : <Landing />}</div>;
}

export default App;
