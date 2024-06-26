import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import logo from "../assets/logo/logowithoutBG.png";
function Project() {
  return (
    <>
      <div className="header-container">
        <img className="logoasd" src={logo} alt="logo" />
        <h1 className="header-title">Mes Projets</h1>
      </div>
      <Nav />
      <ProjectCard />
      <Footer />
    </>
  );
}

export default Project;
