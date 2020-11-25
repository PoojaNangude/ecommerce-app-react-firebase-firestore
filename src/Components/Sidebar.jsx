import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { products } from "../Constants/products.jsx";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Router>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <Route path="/" />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {products.map((item, id) => {
              return (
                <li className="menu-bars" key={id}>
                  {item.category}
                </li>
              );
            })}
          </ul>
        </nav>
      </Router>
    </>
  );
};

export default Sidebar;
