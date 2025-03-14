import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/about" 
            activeClassName="active"  // Highlight when on the About page
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume" 
            activeClassName="active"  // Highlight when on the Resume page
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            activeClassName="active"  // Highlight when on the Contact page
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/work"  // Assuming '/work' is the route for the Work page
            activeClassName="active"  // Highlight when on the Work page
          >
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;