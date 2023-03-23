import React from 'react';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ handlePageChange }) {
  return (
    <div className="nav nav-tabs">
      <button className="btn btn-primary" id="home" onClick={() => handlePageChange('home')}>Home</button>
      <button className="btn btn-primary" id="about" onClick={() => handlePageChange('about')}>About</button>
      <button className="btn btn-primary" id="projects" onClick={() => handlePageChange('projects')}>Portfolio</button>
      <button className="btn btn-primary" id="contact" onClick={() => handlePageChange('contact')}>Contact</button>
    </div>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a href="#" onClick={() => handlePageChange('home')}>
    //       Home
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a href="#" onClick={() => handlePageChange('about')}>
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //   <a href="#" onClick={() => handlePageChange('project')}>
    //     Projects
    //   </a>
    // </li>
    //   <li className="nav-item">
    //     <span>
    //       Contact
    //     </span>
    //   </li>
    // </ul>
  );
}

export default NavBar;
