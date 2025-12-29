import graydesBanner from "../../assets/graydes-banner.jpg";
import graydesLogo from "../../assets/graydes-black-logo.svg";
import "./graydes.scss";

const Graydes = () => {
  return (
    <div className="graydes-container">
      <div className="graydes-img">
        <img src={graydesBanner} alt="Graydes Banner" />
      </div>
      <div className="graydes-info">
          <img className="graydes-logo" src={graydesLogo} alt="Graydes" />
          <p>
            GRAYDES is a premium artistic brand rooted in design, quality, and
            intention. It represents balance, authenticity, and a refined way of
            approaching everyday objects. The vision behind GRAYDES is to guide
            people toward better choices. Better materials, better
            craftsmanship, better aesthetics. Each creation is treated as a
            meaningful object rather than a simple product, designed to last and
            to carry value over time. GRAYDES seeks to promote high-end design
            as a cultural mindset, encouraging quality and aesthetic awareness
            through carefully crafted forms that feel personal, timeless, and
            considered. It is a brand created to be lived with, appreciated, and
            shared. A meaningful object. A thoughtful gift. A statement of
            taste.
          </p>
          <div className="strong-par">
            <strong>
              At GRAYDES, detail is not a detail. It is the brand.
            </strong>
            <strong>
              It’s time for better choices. It’s time for GRAYDES.
            </strong>
          </div>
          <i>
            *The first GRAYDES designs are ready and will be available soon.
          </i>
        </div>
    </div>
  );
};

export default Graydes;
