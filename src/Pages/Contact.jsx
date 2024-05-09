import Nav from "../Components/Nav";
import logo from "../assets/logo/logowithoutBG.png";
function Contact() {
  return (
    <>
      <div className="header-container">
        <img className="logoasd" src={logo} alt="logo" />
        <h1 className="header-title">Contact</h1>
      </div>
      <Nav />
    </>
  );
}

export default Contact;
