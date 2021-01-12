import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const authLinks = (
  //   <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
  //     <span className="navbar-text mr-3">
  //       <strong>{user ? `Welcome ${user.username}!` : ""}</strong>
  //     </span>
  //     <li className="nav-item">
  //       <button className="btn btn-sm nav-link" onClick={this.props.logout}>
  //         Logout
  //       </button>
  //     </li>
  //   </ul>
  // );
  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a href="!/register" className="nav-link">
          Register
        </a>
      </li>
      <li className="nav-item">
        <a href="!/login" className="nav-link">
          Login
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            Danial's Blog App
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/new" className="nav-link">
                New Post
              </Link>
            </li>
          </ul>
        </div>
        {guestLinks}
      </div>
    </nav>
  );
};

export default NavBar;
