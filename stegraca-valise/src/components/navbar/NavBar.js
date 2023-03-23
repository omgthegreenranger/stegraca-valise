// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

export default function NavBar({valisePage}) {
  return (
    // <div className="nav nav-tabs">
    //   <button className="btn btn-primary" id="home" onClick={() => handlePageChange('home')}>Home</button>
    //   <button className="btn btn-primary" id="about" onClick={() => handlePageChange('about')}>About</button>
    //   <button className="btn btn-primary" id="projects" onClick={() => handlePageChange('projects')}>Portfolio</button>
    //   <button className="btn btn-primary" id="contact" onClick={() => handlePageChange('contact')}>Contact</button>
    // </div>
    <div>
      <button className="btn btn-primary" id="home" onClick={() => valisePage('home')}>Home</button>
      <button className="btn btn-primary" id="about" onClick={() => valisePage('about')}>About</button>
      <button className="btn btn-primary" id="projects"onClick={() => valisePage('projects')}>Portfolio</button>
      <button className="btn btn-primary" id="contact" onClick={() => valisePage('about')}>Contact</button>
    </div>
  );
}
