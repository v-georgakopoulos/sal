import { Link } from "react-router-dom";
import { MAIN_CATEGORIES, SUBCATEGORIES } from "../../data/categories-data";
import mainBanner from "../../assets/home-banner-one.jpg";
import subBanner from "../../assets/home-banner-two.jpg";
import logofolio from "../../assets/logofolio-footer.jpg";
import "./home.scss";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-banner">
        <Link to="/about">
          <img src={mainBanner} alt="Sal Athens" />
        </Link>
      </div>

      <div className="main-categories">
        {MAIN_CATEGORIES.map((cat) => (
          <Link key={cat.id} to={cat.path}>
            <img src={cat.image} alt={cat.name} />
          </Link>
        ))}
      </div>

      <div className="sub-categories">
        <h3>Sal Athens Services</h3>
        <div className="sub-grid">
          {SUBCATEGORIES.map((sub) => (
            <div key={sub.id}>
              <Link to={`/design/${sub.path}`}>
                <img src={sub.image} alt={sub.name} />
              </Link>
              <p>{sub.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="home-banner">
        <img src={subBanner} alt="Sal Athens" />
      </div>

      <div className="logofolio">
        <h3>Download Sal Athens Magazine {new Date().getFullYear()}</h3>
        <a href="/logofolio.pdf" download>
          <img
            src={logofolio}
            alt="Sal Athens Magazine"
            style={{ cursor: "pointer" }}
          />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
