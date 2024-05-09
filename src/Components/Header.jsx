import Nav from "./Nav";
import logo from "../assets/logo/logowithoutBG.png";
function Header() {
  return (
    <>
      <div className="header-container">
        <img className="logoasd" src={logo} alt="logo" />
        <h1 className="header-title">Mon Portfolio</h1>
        <div></div>
      </div>
      <Nav />
    </>
  );
}

export default Header;
