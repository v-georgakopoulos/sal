import { Link } from "react-router-dom";
import { MAIN_CATEGORIES, SUBCATEGORIES } from "../../data/categories-data";
import LatestProject from "../../components/latest-project/latest-project";
import Footer from "../../components/footer/footer";
import HeroSlider from "../../components/hero-slider/hero-slider";
import subBanner from "../../assets/home-banner-two.jpg";
import logoRewards from "../../assets/logo-rewards.svg"
import logofolio from "../../assets/logofolio-footer.jpg";


import "./home.scss";

const Home = () => {
  return (
    <main className="home-container">
      <section className="main-banner">
        <HeroSlider/>
      </section>

      <section className="main-categories">
        <div className="main-grid">
          {MAIN_CATEGORIES.map((cat) => (
            <div className="main-category">
              <Link key={cat.id} to={cat.path}>
                <img src={cat.image} alt={cat.name} />
              </Link>
              <div className="overlay-category">
                <img
                  src={cat.logo}
                  alt={`${cat.name} logo`}
                  className="logo-overlay"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sub-categories">
        <h1>Creative Fields</h1>
        <div className="sub-grid">
          {SUBCATEGORIES.map((sub) => (
            <div className="sub-category">
                <Link key={sub.id} to={`/design/${sub.path}`}>
                  <img src={sub.image} alt={sub.name} />
                </Link>
              <div className="sub-overlay">
                <p className="sub-name">{sub.name.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <LatestProject />
      </section>

      <section className="home-banner">
        <img src={subBanner} alt="Sal Athens" />
      </section>

      <section>
        <div className="rewards-container">
          <img src={logoRewards} alt="Rewards" />
          <img src={logoRewards} alt="Rewards" />
          <img src={logoRewards} alt="Rewards" />
        </div>
      </section>

      <section className="logofolio">
        <a href="/logofolio.pdf" download>
          <h3>Download Logofolio {new Date().getFullYear()}</h3>
          <img
            src={logofolio}
            alt="Sal Athens Magazine"
            style={{ cursor: "pointer" }}
          />
        </a>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
