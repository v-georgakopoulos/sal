import artworks from "../assets/home-images/artworks.jpg";
import designs from "../assets/home-images/designs.jpg";
import graydes from "../assets/home-images/graydes.jpg";
import logoDesign from "../assets/home-images/logo-design.jpg";
import illustration from "../assets/home-images/illustration.jpg";
import interiorDesign from "../assets/home-images/interior-design.jpg";
import packaging from "../assets/home-images/packaging.jpg";

import artworksLogo from "../assets/home-images/artworks-logo.svg"
import designsLogo from "../assets/home-images/designs-logo.svg"
import graydesLogo from "../assets/home-images/graydes-logo.svg"

export const MAIN_CATEGORIES = [
  { id: 1, name: "Artworks", image: artworks, logo: artworksLogo, path: "/artworks" },
  { id: 2, name: "Designs", image: designs, logo: designsLogo, path: "/design" },
  { id: 3, name: "Graydes", image: graydes, logo: graydesLogo, path: "/graydes" },
];

export const SUBCATEGORIES = [
  { id: 1, name: "Logo Design", image: logoDesign, path: "logo-design" },
  { id: 2, name: "Illustration", image: illustration, path: "illustration" },
  { id: 3, name: "Interior Design", image: interiorDesign, path: "interior-design" },
  { id: 4, name: "Packaging", image: packaging, path: "packaging" },
];
