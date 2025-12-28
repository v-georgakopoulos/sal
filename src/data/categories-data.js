import artworks from "../assets/artworks.jpg";
import designs from "../assets/designs.jpg";
import graydes from "../assets/graydes.jpg";
import logoDesign from "../assets/logo-design.jpg";
import illustration from "../assets/illustration.jpg";
import interiorDesign from "../assets/interior-design.jpg";
import packaging from "../assets/packaging.jpg";

import artworksLogo from "../assets/artworks-logo.svg"
import designsLogo from "../assets/designs-logo.svg"
import graydesLogo from "../assets/graydes-logo.svg"

export const MAIN_CATEGORIES = [
  { id: 1, name: "Artworks", image: artworks,logo:artworksLogo, path: "/artworks" },
  { id: 2, name: "Designs", image: designs, logo:designsLogo, path: "/design" },
  { id: 3, name: "Graydes", image: graydes, logo:graydesLogo, path: "/graydes" },
];

export const SUBCATEGORIES = [
  { id: 1, name: "Logo Design", image: logoDesign, path: "logo-design" },
  { id: 2, name: "Illustration", image: illustration, path: "illustration" },
  { id: 3, name: "Interior Design", image: interiorDesign, path: "interior-design" },
  { id: 4, name: "Packaging", image: packaging, path: "packaging" },
];
