import html from "../assets/skills/html-1.svg";
import css from "../assets/skills/css-3.svg";
import js from "../assets/skills/javascript-1.svg";
import react from "../assets/skills/react-2.svg";
import sass from "../assets/skills/sass-1.svg";
import nodejs from "../assets/skills/nodejs-1.svg";
import git from "../assets/skills/git-icon.svg";
import npm from "../assets/skills/npm.svg";
import github from "../assets/skills/github-icon-1.svg";
import bash from "../assets/skills/git-bash.svg";
import figma from "../assets/skills/figma-5.svg";
const skills = [
  { name: "Html", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "React", img: react },
  { name: "Sass", img: sass },
  { name: "NodeJS", img: nodejs },
  { name: "Git", img: git },
  { name: "npm", img: npm },
  { name: "GitHub", img: github },
  { name: "GitBash", img: bash },
  { name: "Figma", img: figma },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <ul className="logo-container">
        {skills.map((skill, index) => (
          <li key={index}>
            <img className="logo" src={skill.img} alt={skill.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
