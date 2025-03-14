import React from "react";
import { NavLink } from "react-router-dom";  // Use NavLink from react-router-dom

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="logo">Meg Langhoff</h1>
        <nav>
          <ul>
            <li>
              <NavLink 
                to="/about" 
                activeClassName="active"  // Apply active class when on this page
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                exact 
                activeClassName="active"  // Apply active class when on the Work page
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                activeClassName="active"  // Apply active class when on the Contact page
              >
                Contact Me
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resume" 
                activeClassName="active"  // Apply active class when on the Resume page
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero-banner">
        <h2 className="subtitle">Howdy! Nice to meet you!</h2>
      </section>
    </div>
  );
};

export default Header;