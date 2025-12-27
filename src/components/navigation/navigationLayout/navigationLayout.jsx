import { Outlet } from "react-router-dom";
import Navigation from "../navigation"

const NavigationLayout = () => {
  return (
    <div className="layout">
        <Navigation />
      <main className="page-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default NavigationLayout;
