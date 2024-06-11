import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Landing({ username, darkMode }) {
  return (
    <div>
      <Header username={username} darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default Landing;
