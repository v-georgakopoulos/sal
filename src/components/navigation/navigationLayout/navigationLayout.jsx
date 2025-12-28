import { Outlet } from "react-router-dom";
import Navigation from "../navigation"
import ScrollToTop from "../../scrollToTop/scrollToTop";

const NavigationLayout = () => {
  return (
    <div className="layout">
        <Navigation />
        <ScrollToTop/>
      <main className="page-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default NavigationLayout;
