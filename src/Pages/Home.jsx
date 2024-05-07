import Header from "../Components/Header";
import Description from "../Components/Description";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";
import "../Style/main.scss";
function HomePage() {
  return (
    <div className="homepage-container">
      <Header />
      <Description />
      <Skills />
      <Footer />
    </div>
  );
}

export default HomePage;
