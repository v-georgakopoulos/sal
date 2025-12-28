import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../data/navigation-data";
import mainLogo from "../../assets/main-logo.png";
import faviconLogo from "../../assets/favicon-Sal.png";

import "./navigation.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

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

      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAVIGATION_LINKS.map((link) => {
          const hasSubmenu = !!link.subcategories;

          return (
            <li
              key={link.id}
              className={`menu-item ${hasSubmenu ? "has-submenu" : ""}`}
            >
              <Link to={link.path} className="menu-link">
                {link.name}
              </Link>

              {hasSubmenu && (
                <ul className="submenu">
                  {link.subcategories.map((sub) => (
                    <li>
                      <Link to={sub.path} onClick={closeMenu}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <div className="favicon-logo">
        <img src={faviconLogo} alt="Sal Athens" />
      </div>
    </div>
  );
};

export default Navigation;
