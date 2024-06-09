import Landing from "./Landing";
import Login from "./Login";
// import AdminPage from "./AdminPage";

function App() {
  // login page shows
  const isLoggedIn = false;

  // admin page shows
  // const isAdmin = false;

  //   check for whether the user is logged in
  return <div>{!isLoggedIn ? <Login /> : <Landing />}</div>;

  //   check for whether the user is admin
  // return <div>{!isAdmin ? <Landing /> : <AdminPage />}</div>;
}

export default App;
