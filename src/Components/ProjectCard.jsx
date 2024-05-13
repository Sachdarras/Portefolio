import { useState } from "react";

import gopast from "../assets/project/Gopastorbacktofuture.png";
import locationmap from "../assets/project/Crewdragonlocationmap.png";
import starwild from "../assets/project/Star Wild.png";
import agendstrauss from "../assets/project/agendstrauss.png";
import next from "../assets/arrow/next.png";
import prev from "../assets/arrow/prev.png";

const projects = [
  {
    name: "Go past or back to Future",
    img: gopast,
    description:
      "Voyage Temporel Humoristique : une chronologie animée décalée de l'histoire de l'humanité, de l'âge de pierre aux voyages dans l'espace. Avec des personnages loufoques et des clins d'œil humoristiques, découvrez le passé de manière ludique et pédagogique !",
    lien: "https://sachdarras.github.io/WCS-P1-Chronologie-Anim-e/",
    repo: "https://github.com/Sachdarras/WCS-P1-Chronologie-Anim-e",
  },

  {
    name: "Crew-Dragon-Location-Map",
    img: locationmap,
    description:
      "J'ai créé une carte interactive qui permet de localiser tous les élèves de ma promotion à travers la France. Cette carte facilite la communication et les rencontres entre les membres de la promo, en leur permettant de visualiser où se trouvent leurs camarades géographiquement.",
    lien: "https://sachdarras.github.io/Crew-Dragon-Location-Map/",
    repo: "https://github.com/Sachdarras/Crew-Dragon-Location-Map",
  },
  {
    name: "Star-Wild",
    img: starwild,
    description:
      "Bienvenue sur Star Wild, votre passerelle virtuelle vers les merveilles et les mystères du système solaire, présentée dans une expérience immersive en 3D. Explorez les planètes, les lunes et les astéroïdes avec un système de carte interactif qui vous permet de plonger dans les détails de chaque corps céleste.",
    lien: "https://star-wild.netlify.app/",
    repo: "https://github.com/Sachdarras/JS-RemoteFR-CrewDragon-P2-Team3",
  },
  {
    name: "AgendStrauss",
    img: agendstrauss,
    description:
      "L'agend strauss est un ensemble de fonctionalité avec une todo-list,une calculatrice,un agenda et une horloge numérique",
    lien: "https://agendstrauss.netlify.app/",
    repo: "https://github.com/Sachdarras/agendStrauss",
  },
];

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
