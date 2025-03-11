import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => {
      if (!prev) setOpenSubmenu(null);
      return !prev;
    });
  };

  const toggleSubmenu = (index, e) => {
    e.stopPropagation();
    setOpenSubmenu((prev) => (prev === index ? null : index));
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className="navbar" ref={menuRef}>
      <div>
        <img src="assets/msglogo.png" alt="Venus Catering" className="logo" />
      </div>

      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      )}

      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={handleCloseMenu}>HomePage</Link></li>
        <li><Link to="/about" onClick={handleCloseMenu}>About</Link></li>
        
        <li className="dropdown">
          <Link to="/services" onClick={handleCloseMenu}>Our Services</Link>
          <span onClick={(e) => toggleSubmenu(0, e)}>▼</span>
          <ul className={`dropdown-menu ${openSubmenu === 0 ? "open" : ""}`}>
            <li><Link to="/inspection" onClick={handleCloseMenu}>Inspection</Link></li>
            <li><Link to="/testing" onClick={handleCloseMenu}>Testing</Link></li>
            <li><Link to="/cladding" onClick={handleCloseMenu}>Cladding</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/product" onClick={handleCloseMenu}>Our Products</Link>
          <span onClick={(e) => toggleSubmenu(1, e)}>▼</span>
          <ul className={`dropdown-menu ${openSubmenu === 1 ? "open" : ""}`}>
            <li><Link to="/pipefitting" onClick={handleCloseMenu}>Pipe Fittings</Link></li>
            <li><Link to="/pipes" onClick={handleCloseMenu}>Pipes</Link></li>
            <li><Link to="/flanges" onClick={handleCloseMenu}>Flanges</Link></li>
            <li><Link to="/valves" onClick={handleCloseMenu}>Valves</Link></li>
            <li><Link to="/strainers" onClick={handleCloseMenu}>Strainers</Link></li>
            <li><Link to="/plates" onClick={handleCloseMenu}>Plates</Link></li>
            <li><Link to="/specialitems" onClick={handleCloseMenu}>Special items</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/gallery" onClick={handleCloseMenu}>Our Gallery</Link>
          <span onClick={(e) => toggleSubmenu(2, e)}>▼</span>
          <ul className={`dropdown-menu ${openSubmenu === 2 ? "open" : ""}`}>
            <li><Link to="/products" onClick={handleCloseMenu}>Products</Link></li>
            <li><Link to="/warehouse" onClick={handleCloseMenu}>Warehouse</Link></li>
            <li><Link to="/office" onClick={handleCloseMenu}>Office</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/certificate" onClick={handleCloseMenu}>Certification</Link>
          <span onClick={(e) => toggleSubmenu(3, e)}>▼</span>
          <ul className={`dropdown-menu ${openSubmenu === 3 ? "open" : ""}`}>
          <li>
              <a
                href="/pdfs/MSGCOMPANYPROF_compressed-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/assets/MSGCOMPANYPROF_compressed-1.pdf", "_blank");
                }}
              >
                Company Profile
              </a>
            </li>
            <li>
            <a
                href="/pdfs/MSGCOMPANYPROF_compressed-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/assets/ISO-9001-2015-MSG-New.pdf", "_blank");
                }}
              >
                ISO Certificate
              </a></li>
          </ul>
        </li>


        <li><Link to="/faq" onClick={handleCloseMenu}>Faqs</Link></li>
        <li><Link to="/contact" onClick={handleCloseMenu} id="id1">Contact</Link></li>
        <li className="dropdown">
          <Link to="/calci" onClick={handleCloseMenu}>Calculator</Link>
          <span onClick={(e) => toggleSubmenu(4, e)}>▼</span>
          <ul className={`dropdown-menu ${openSubmenu === 4 ? "open" : ""}`}>
            <li><Link to="/unit" onClick={handleCloseMenu}>Unit Converter</Link></li>
            <li><Link to="/pipeprice" onClick={handleCloseMenu}>Pipe Price Calculator</Link></li>
            <li><Link to="/unit1" onClick={handleCloseMenu}>Unit Converter(2)</Link></li>
            

          </ul>
        </li>

        <li className="book-now-btn">
          <a href="https://wa.me/9591584523" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="book-btn" onClick={handleCloseMenu}>
              <span>Login</span>
              <span className="arrow-circle">→</span>
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
