import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_LINKS } from "../../data/navigation-data";
import mainLogo from "../../assets/home-images/main-logo.png";
import faviconLogo from "../../assets/home-images/favicon-Sal.png";

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

  const handleSubmenuToggle = (link) => {
    setActiveSubmenu((prev) => (prev?.id === link.id ? null : link));
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="navigation-wrapper">
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

      {/* Sidebar menu */}
      <ul
        className={`menu ${menuOpen ? "open" : ""}`}
        onMouseLeave={closeMenu}
      >
        {NAVIGATION_LINKS.map((link) => {
          const hasSubmenu = Boolean(link.subcategories);
          const isActive = activeSubmenu?.id === link.id;

          return (
            <li key={link.id} className="menu-item">
              <div className="menu-row">
                <Link to={link.path} onClick={closeMenu}>
                  {link.name}
                </Link>
                {hasSubmenu && (
                  <button
                    className={`submenu-arrow ${isActive ? "active" : ""}`}
                    onClick={() => handleSubmenuToggle(link)}
                  >
                    <ChevronDown size={17} strokeWidth={1} />
                  </button>
                )}
              </div>

              {/* Submenu dropdown */}
              {hasSubmenu && (
                <ul className={`submenu-dropdown ${isActive ? "open" : ""}`}>
                  {link.subcategories.map((sub) => (
                    <li key={sub.id}>
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
    </nav>
  );
};

export default Navigation;
