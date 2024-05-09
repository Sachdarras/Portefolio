import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
function Project() {
  return (
    <>
      <div className="header-container">
        <h1 className="header-title">Mes Projets</h1>
      </div>
      <Nav />
      <ProjectCard />
      <Footer />
    </>
  );
}

export default Project;
