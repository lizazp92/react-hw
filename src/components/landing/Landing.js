import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Landing({ username }) {
  return (
    <div>
      <Header username={username} />
      <Main />
      <Footer />
    </div>
  );
}

export default Landing;
