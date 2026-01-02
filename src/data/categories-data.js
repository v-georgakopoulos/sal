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

import designSubcategoryImageA from "../assets/designs-images/Background-a.jpg"
import designSubcategoryImageB from "../assets/designs-images/Background-b.jpg"
import designSubcategoryImageC from "../assets/designs-images/Background-c.jpg"
import designSubcategoryImageD from "../assets/designs-images/Background-d.jpg"
import designSubcategoryImageE from "../assets/designs-images/Background-e.jpg"

import designLogo from "../assets/designs-images/logo2.svg"
import illustrationLogo from "../assets/designs-images/illustrations.svg"
import threesixtyLogo from "../assets/designs-images/triaexinta.svg"
import interiorLogo from "../assets/designs-images/Interiors.svg"
import packagingLogo from "../assets/designs-images/packaging.svg"

export const MAIN_CATEGORIES = [
  { id: 1, name: "Artworks", image: artworks, logo: artworksLogo, path: "/artworks" },
  { id: 2, name: "Designs", image: designs, logo: designsLogo, path: "/design" },
  { id: 3, name: "Graydes", image: graydes, logo: graydesLogo, path: "/graydes" },
];

export const SUBCATEGORIES = [
  {
    id: 1,
    name: "Logo Design",
    image: logoDesign,
    categoryImage: designSubcategoryImageA,
    logo: designLogo,
    path: "logo-design",
    description: "More than 250 logos and visual identities have been developed and implemented internationally for artists, galleries, creative studios, startups, products, services, hospitality, real estate, shipping companies, travel agencies, and emerging brands. Logo design remains at the core of the practice, with each mark developed through research, structure, and reduction, focusing on clarity, longevity, and character. The approach is consistently high-end, crafted to function across different contexts, cultures, and over time."
  },
  {
    id: 2,
    name: "Illustration",
    image: illustration,
    categoryImage: designSubcategoryImageB,
    logo: illustrationLogo,
    path: "illustration",
    description: "I, together with my team of collaborators, create interior spaces in perfect harmony with a brand’s identity, with meticulous attention to detail. From retail stores, bars, restaurants, street food concepts, gyms, studios, to private apartments, each project is developed from concept to full execution with specialized collaborators and technical teams. Every space is realized as a high-end result, tailored to the specific budget, ensuring that the design not only reflects the brand but also creates an immersive and cohesive experience."
  },
  {
    id: 3,
    name: "three-sixty",
    categoryImage: designSubcategoryImageC,
    logo: threesixtyLogo,
    path: "three-sixty",
    description: "360° Design is a holistic design approach that begins at the core of a brand and extends to every visible and invisible detail. From naming and visual identity to packaging, interiors, and creative direction, the process is guided by a single, cohesive vision. The focus is not on individual elements, but on building a unified language that remains consistent from the first idea to the final execution. "
  },
  {
    id: 4,
    name: "Interior Design",
    image: interiorDesign,
    categoryImage: designSubcategoryImageD,
    logo: interiorLogo,
    path: "interior-design",
    description: "A graduate of the Athens School of Fine Arts, I create illustrations that begin as hand-drawn artworks and evolve into polished digital pieces, reflecting a very high level of design and artistic mastery. My creations have brought a distinctive visual identity to brands such as Adidas, Converse, WeSC, Sprite, Staff Jeans, Prime Timers and NewCult and have been featured in projects including the cover of Athens Voice, book covers, interior spaces, store windows, limited-edition packaging, private collections and social media campaigns. Every illustration is crafted with a high-end aesthetic, infusing your brand or product with personality, depth and lasting impact."
  },
  {
    id: 5,
    name: "Packaging",
    image: packaging,
    categoryImage: designSubcategoryImageE,
    logo: packagingLogo,
    path: "packaging",
    description: "If conventional is what you’re after, you’re in the wrong place. In this studio I create out of the box packaging that adds real value with a focus on originality, detail and high-end design. I have extensive experience in projects across the food and hospitality industry, clothing, pharmaceuticals, beauty and personal care products, scented candles, and more. Every package is carefully crafted to reflect the brand, stand out on the shelf, and create a memorable experience for the customer."
  },
];
