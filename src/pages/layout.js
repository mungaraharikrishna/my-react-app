import { useEffect } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Outlet, NavLink, useLocation } from "react-router-dom";
function Layout() {
  const location = useLocation();

  useEffect(() => {
    // This function will be called whenever the location changes
    console.log(location);
  }, [location]);
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <NavLink className="nav-link" to="/home">
        <Navbar.Brand>
          Main
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavLink className="nav-link" to="/home"> Home </NavLink>
          <NavLink className="nav-link" to="/about"> About </NavLink>
          <NavLink className="nav-link" to="/contact"> Contact </NavLink>
          <NavLink className="nav-link" to="/login"> logout </NavLink>
        </Nav>
        <div className="d-flex">
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
    <Container fluid>
      <Outlet />
    </Container>
    </>
  );
}

export default Layout;
