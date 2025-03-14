import React from "react";
import "../styles/style.css"; // Ensure your styles are correctly linked

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 MegDesigns. All Rights Reserved.</p>
      <ul className="footer-nav">
        <li><a href="https://github.com/meglanghoffdesign" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/meg-langhoff" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="mailto:meglanghoff@gmail.com" className="email-link">Email</a></li>
      </ul>
    </footer>
  );
};

export default Footer;