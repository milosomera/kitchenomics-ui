import React, { useContext } from "react";
import MyContext from "../../MyContext/MyContext";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { user, setIsLoggedIn, removeStorageItems } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    removeStorageItems([
      "user",
      "recipes",
      "searchKeyword",
      "recipeId",
      "recipeIngHref",
      "pages",
      "currentPage",
    ]);
    setIsLoggedIn(false);
  };

  const homeButton = () => {
    removeStorageItems([
      "recipes",
      "searchKeyword",
      "recipeId",
      "recipeIngHref",
      "pages",
      "currentPage",
    ]);
    navigate("/", { replace: true });
  };

  return (
    <Navbar
      className="px-5 navigation-bar"
      bg="success"
      variant="dark"
      expand="md"
      fixed="top"
      collapseOnSelect
    >
      <Navbar.Brand>Welcome {user.firstName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link onClick={homeButton}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={logout}>Sign out</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
