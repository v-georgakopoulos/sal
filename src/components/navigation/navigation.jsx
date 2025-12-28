import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_LINKS } from "../../data/navigation-data";
import mainLogo from "../../assets/main-logo.png";
import faviconLogo from "../../assets/favicon-Sal.png";

import "./navigation.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSubmenuOpen(false);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <div className="navigation-wrapper">
      {/* Centered Logo */}
      <Link className="logo-link" to="/" onClick={closeAll}>
        <img src={mainLogo} alt="Sal Athens" />
      </Link>

      {/* Hamburger */}
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

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAVIGATION_LINKS.map((link) => {
          const hasSubmenu = !!link.subcategories;

          return (
            <li
              key={link.id}
              className={`menu-item ${hasSubmenu ? "has-submenu" : ""} ${
                submenuOpen && hasSubmenu ? "open" : ""
              }`}
            >
              <div
                className="menu-link-wrapper"
                onClick={() => {
                  if (hasSubmenu) {
                    setSubmenuOpen((prev) => !prev);
                  } else {
                    closeAll();
                  }
                }}
              >
                <Link to={link.path}>{link.name}</Link>
                {hasSubmenu && (
                  <ChevronDown
                    size={16}
                    className={`submenu-icon ${submenuOpen ? "open" : ""}`}
                  />
                )}
              </div>

              {hasSubmenu && submenuOpen && (
                <ul className="submenu">
                  {link.subcategories.map((sub) => (
                    <li key={sub.id}>
                      <Link to={sub.path} onClick={closeAll}>
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

      {/* Favicon */}
      <div className="favicon-logo">
        <img src={faviconLogo} alt="Sal Athens" />
      </div>
    </div>
  );
};

export default Navigation;
