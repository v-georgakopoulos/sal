import aboutBanner from "../../assets/about-images/about-banner.jpg"
import "./about.scss"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-info">
        <p>
          Hi, I’m Kyrillos Partsalis, but my friends call me Sal. I’m a visual
          artist and brand creator based in Athens, working somewhere between
          art and design. I studied painting, graphic design, and photography at
          the Athens School of Fine Arts, and my practice focuses on identity,
          simplicity, and honest visual storytelling. I travel to collect ideas,
          textures, and references that shape my work, with a vision to make the
          world more beautiful by setting meaningful and thoughtful standards of
          aesthetics. A longside commissioned projects around the world in
          branding, logo design, and retail & hospitality spaces, I develop
          personal projects such as GRAYDES, where design expands into culture,
          fashion, and everyday objects. My work is driven by curiosity, intuit
          ion, and the need to create with purpose.
        </p>
      </div>
      <div className="about-img">
        <img src={aboutBanner} alt="Sal Athens" />
      </div>
    </div>
  );
};

export default About;
