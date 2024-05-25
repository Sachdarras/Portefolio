import { useState } from "react";
import projects from "../data/projectData";
import next from "../assets/arrow/next.png";
import prev from "../assets/arrow/prev.png";

function ProjectCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      document.querySelector(".carousel-inner").classList.add("next");
      setCurrentIndex((currentIndex + 1) % projects.length);
      setTimeout(() => {
        document.querySelector(".carousel-inner").classList.remove("next");
        setIsAnimating(false);
      }, 1000);
    }
  };

  const prevProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      document.querySelector(".carousel-inner").classList.add("prev");
      setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
      setTimeout(() => {
        document.querySelector(".carousel-inner").classList.remove("prev");
        setIsAnimating(false);
      }, 1000);
    }
  };

  return (
    <div className="projectcard-container">
      <div className="carousel">
        <div className="carousel-inner">
          <div className="project">
            <h4>{projects[currentIndex].name}</h4>
            <img
              className="img-project"
              src={projects[currentIndex].img}
              alt={projects[currentIndex].name}
            />

            <p>{projects[currentIndex].description}</p>

            <ul>
              <li>
                <a
                  href={projects[currentIndex].lien}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lien du site
                </a>
              </li>
              <li>
                <a
                  href={projects[currentIndex].repo}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lien du repo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className="carousel-control next" onClick={nextProject}>
          <img src={prev} />
        </button>
        <button className="carousel-control prev" onClick={prevProject}>
          <img src={next} />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
