import { Link } from "react-router-dom";
import { MAIN_CATEGORIES, SUBCATEGORIES } from "../../data/categories-data";
import mainBanner from "../../assets/home-banner-one.jpg";
import subBanner from "../../assets/home-banner-two.jpg";
import logofolio from "../../assets/logofolio-footer.jpg";
import "./home.scss";
import Footer from "../../components/footer/footer";
import LatestProject from "../../components/latest-project/latest-project";

const Home = () => {
  return (
    <main className="home-container">
      <section className="main-banner">
        <Link to="/about">
          <img src={mainBanner} alt="Sal Athens" />
        </Link>
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
        <h3>Sal Athens Services</h3>
        <div className="sub-grid">
          {SUBCATEGORIES.map((sub) => (
            <div className="sub-category">
              <div className="sub-image" key={sub.id}>
                <Link to={`/design/${sub.path}`}>
                  <img src={sub.image} alt={sub.name} />
                </Link>
              </div>
              <p>{sub.name}</p>
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
