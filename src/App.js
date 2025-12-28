import { Routes, Route } from "react-router-dom";
import NavigationLayout from "./components/navigation/navigationLayout/navigationLayout";

import Home from "./pages/home/home";
import Artworks from "./pages/artworks/artworks";
import Designs from "./pages/designs/designs";
import Graydes from "./pages/graydes/graydes";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Category from "./pages/category/category";
import ProjectInfo from "./components/project-info/project-info";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationLayout />}>
        <Route index element={<Home />} />
        <Route path="artworks" element={<Artworks />} />
        <Route path="design" element={<Designs />} />
        <Route path="design/:category" element={<Category/>}/>
        <Route path=":projectSlug" element={<ProjectInfo/>}/>
        <Route path="graydes" element={<Graydes />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
