import avatar from "../assets/info/icons8-avatar-94.png";
import location from "../assets/info/icons8-géorepérage-94.png";
import phone from "../assets/info/icons8-téléphone-94.png";
import mail from "../assets/info/icons8-email-94.png";
import github from "../assets/info/github.png";
import linkedin from "../assets/info/icons8-linkedin-94.png";
import cvasdi from "../assets/CV/cv-asd-finalv-i.png";
import cvASD from "../assets/CV/cv-asd-finalversion.pdf";
function Info() {
  return (
    <>
      <div className="info-container">
        <ul>
          <li>
            <div>
              <img src={avatar} className="imginfo" />
              Alexandre-Sacha DARRAS
              <br />
            </div>
          </li>

          <li>
            <img src={location} className="imginfo" />
            Pont-croix,Finistére
          </li>
          <li>
            <img src={phone} className="imginfo" />
            06-65-55-31-32
          </li>
          <li>
            <img src={mail} className="imginfo" />
            sachdarras@gmail.com
          </li>
          <li>
            <a
              href="https://github.com/Sachdarras"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="imginfo" alt="GitHub" />
              https://github.com/Sachdarras
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sacha-darras/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="imginfo" alt="LinkedIn" />
              https://www.linkedin.com/in/sacha-darras/
            </a>
          </li>
        </ul>
      </div>
      <div className="cv-container">
        <h2>Mon CV</h2>
        <img src={cvasdi} className="cv" alt="CV alexandre-sacha Darras" />
        <a href={cvASD} download="cvASD.pdf">
          <button className="button-cv" type="button">
            Télècharger mon CV
          </button>
        </a>
      </div>
    </>
  );
}

export default Info;
