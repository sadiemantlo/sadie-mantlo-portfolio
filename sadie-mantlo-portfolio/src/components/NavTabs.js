import React from "react";
import "./pages/pages.css";
import 'bootstrap/dist/css/bootstrap.min.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

  return (
    <div>
      <h1 className='header'>Sadie Mantlo</h1>
      <ul className="nav">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // This is a conditional (ternary) operator that checks to see if the current page is "portfolio"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>

      <footer className='footer'>

        <div className='footer-container'>
          <div className='footer-div'>
            <img src="images/github.png" alt="Git Hub" className='footer-img' />
            <a href="https://github.com/sadiemantlo" style={{ color: "black" }}>
              <p>GitHub</p>
            </a>
          </div>

          <div className='footer-div'>
            <img src="images/email.png" alt="email" className='footer-img' />
            <p style={{ textDecoration: 'underline', color: "black" }}>sadiemantlo518@gmail.com</p>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default NavTabs;
