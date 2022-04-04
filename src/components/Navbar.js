import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../state/actions/userActions";

function Navbar() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [sidebarOpen, setSideBarOpen] = useState(false);

  const openMenu = () => {
    setSideBarOpen(true);
  };
  const closeMenu = () => {
    setSideBarOpen(false);
  };

  const logOutButton = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="/">Shops</a>
        </div>
        <div className="header-links">
          <Link to="/cart/:id">Cart</Link>
          {userInfo && userInfo.length !== 0 ? (
            <>
              <Link to="/profile">
                {userInfo && userInfo.name && userInfo.name}
              </Link>
              <button className="logOut-btn" onClick={() => logOutButton()}>
                {" "}
                <i className="fas fa-sign-out-alt"> Log Out</i>
              </button>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </header>
      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul className="categories">
          <li>
            <a href="/">All Products</a>
          </li>

          <li>
            <a href="/?category=pants">Pants</a>
          </li>

          <li>
            <a href="/?category=shirt">Shirts</a>
          </li>
        </ul>
      </aside>
      ;
    </div>
  );
}

export default Navbar;
