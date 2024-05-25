import profil from "../assets/images/profil.jpg";
function Description() {
  return (
    <div className="content">
      <div className="description-container">
        <h2>A propos de</h2>
        <h3>Alexandre-Sacha Darras</h3>
        <h4>Developpeur web full-stack JavaScript </h4>
        <p>
          Après 10 ans passés dans le milieu du spectacle comme régisseur et
          concepteur lumières, il était temps de changer de vie, je me suis donc
          orienté vers un métier qui reste créatif. C'est pour ça que mon
          regard, s'est posé sur le développement web. Pour cela, je recherche
          une alternance pour une durée de 15 mois, pour préparer un diplôme de
          Concepteur Développeur d'Applications de niveau Bac+4.
        </p>
      </div>
      <img src={profil} className="profil" />
    </div>
  );
}

export default Description;
