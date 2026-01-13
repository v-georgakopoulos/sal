import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";

import { getCookie } from "./utils/cookie-utils";
import { loadGoogleAnalytics } from "./utils/analytics";

import Loader from "./components/loader/loader";
import BackToTop from "./components/backToTop/backToTop";
import CookieBanner from "./components/cookie-consent/cookieBanner";

const NavigationLayout = lazy(() =>
  import("./components/navigation/navigationLayout/navigationLayout")
);
const Home = lazy(() => import("./pages/home/home"));
const Artworks = lazy(() => import("./pages/artworks/artworks"));
const ArtworkInfo = lazy(() =>
  import("./components/artwork-info/artwork-info")
);
const Designs = lazy(() => import("./pages/designs/designs"));
const ProjectInfo = lazy(() =>
  import("./components/project-info/project-info")
);
const Graydes = lazy(() => import("./pages/graydes/graydes"));
const About = lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Category = lazy(() => import("./pages/category/category"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));
const Terms = lazy(() => import("./pages/terms-policy/terms"));

const App = () => {
  const location = useLocation();


  useEffect(() => {
    const consent = getCookie("user_consent");

    if (consent === "accepted") {
      loadGoogleAnalytics();
    }

    const handleConsentAccepted = () => {
      loadGoogleAnalytics();
    };

    window.addEventListener(
      "cookie-consent-accepted",
      handleConsentAccepted
    );

    return () => {
      window.removeEventListener(
        "cookie-consent-accepted",
        handleConsentAccepted
      );
    };
  }, []);

  return (
    <>

      <CookieBanner />

      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<NavigationLayout />}>
              <Route index element={<Home />} />

              <Route path="artworks" element={<Artworks />} />
              <Route
                path="artworks/:artworkSlug"
                element={<ArtworkInfo />}
              />

              <Route path="designs" element={<Designs />} />
              <Route
                path="designs/:subcategory"
                element={<Category />}
              />
              <Route
                path="designs/:subcategory/:projectSlug"
                element={<ProjectInfo />}
              />

              <Route path="graydes" element={<Graydes />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />

              <Route path="terms" element={<Terms />} />

              <Route path="404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>

      <BackToTop />
    </>
  );
};

export default App;
