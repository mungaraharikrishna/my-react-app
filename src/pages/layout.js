import { useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
function Layout() {
  const location = useLocation();

  useEffect(() => {
    // This function will be called whenever the location changes
    console.log(location);
  }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="nav-link" to="/home">
            Main
          </NavLink>
          {/* <Link className="nav-link" to="/">Main</Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
                {/* <Link className="nav-link" to="/">Home</Link> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                {/* <Link className="nav-link" to="/about">About</Link> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
                {/* <Link className="nav-link" to="/contact">Contact</Link> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                {/* <Link className="nav-link" to="/contact">Contact</Link> */}
              </li>
            </ul>
            <div className="dropdown dropdown-menu-start">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
