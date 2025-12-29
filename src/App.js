import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, } from "framer-motion";


import NavigationLayout from "./components/navigation/navigationLayout/navigationLayout";
import Home from "./pages/home/home";
import Artworks from "./pages/artworks/artworks";
import ArtworkInfo from "./components/artwork-info/artwork-info";
import Designs from "./pages/designs/designs";
import ProjectInfo from "./components/project-info/project-info";
import Graydes from "./pages/graydes/graydes";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Category from "./pages/category/category";
import NotFound from "./pages/not-found/not-found";



const App = () => {

const location = useLocation()

  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<NavigationLayout />}>
        <Route index element={<Home />} />
        <Route path="artworks" element={<Artworks />} />
        <Route path="artworks/:artworkSlug" element={<ArtworkInfo/>}/>
        <Route path="design" element={<Designs />} />
        <Route path="design/:category" element={<Category/>}/>
        <Route path=":projectSlug" element={<ProjectInfo/>}/>
        <Route path="graydes" element={<Graydes />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </AnimatePresence>
  );
};

export default App;
