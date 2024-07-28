import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../config/config";
import "../NavBar/NavBar.css";

function NavBar() {
  const navRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  return (
    <>
      <Navbar
        ref={navRef}
        className="navbar"
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Navbar.Brand className="nav-brand" href="/">
          {/* <img src={logoImage} alt="Logo" className="logo" /> */}
          {navbarBrand}
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}

        {!isCollapsed && (
          <IoCloseOutline
            size={40}
            className="close-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" onClick={handleNavClick}>
            {navs.map((navItem) => (
              <LinkContainer to={navItem.page} key={uuidv4()}>
                <Nav.Link className="nav-item">{navItem.nav}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
