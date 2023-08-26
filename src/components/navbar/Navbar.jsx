import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <span>About</span>
          <span>Blog</span>
          <span>Carrer</span>
          <span>Contacts</span>
          </div>
      </div>
    </div>
  
  );
};

export default Navbar;