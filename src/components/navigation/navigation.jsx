import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NAVIGATION_LINKS } from "../../data/navigation-data";
import mainLogo from "../../assets/main-logo.png";
import faviconLogo from "../../assets/favicon-Sal.png";

import "./navigation.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setActiveSubmenu(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="navigation-wrapper" onMouseLeave={closeMenu}>
      <Link className="logo-link" to="/" onClick={closeMenu}>
        <img src={mainLogo} alt="Sal Athens" />
      </Link>

      <div className="mobile-nav">
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>

      <div className={`menu-drawer ${menuOpen ? "open" : ""}`}>
    
        <ul className={`menu-panel ${activeSubmenu ? "slide-left" : ""}`}>
          {NAVIGATION_LINKS.map((link) => {
            const hasSubmenu = Boolean(link.subcategories);

            return (
              <li key={link.id} className="menu-item">
                <div className="menu-row">
                  <Link to={link.path} onClick={closeMenu}>
                    {link.name}
                  </Link>

                  {hasSubmenu && (
                    <button
                      className="submenu-arrow"
                      onClick={() => setActiveSubmenu(link)}
                    >
                      <ChevronRight size={18} />
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <ul className={`submenu-panel ${activeSubmenu ? "open" : ""}`}>
          <li className="submenu-header">
            <button onClick={() => setActiveSubmenu(null)}>
              <ChevronLeft size={18} />
            </button>
            <span>{activeSubmenu?.name}</span>
          </li>

          {activeSubmenu?.subcategories.map((sub) => (
            <li key={sub.id}>
              <Link to={sub.path} onClick={closeMenu}>
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="favicon-logo">
        <img src={faviconLogo} alt="Sal Athens" />
      </div>
    </div>
  );
};

export default Navigation;
