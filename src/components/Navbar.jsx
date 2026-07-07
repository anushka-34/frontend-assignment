function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <h2>KR Customizer</h2>
      </div>

      <ul className="nav-links">
        <li>Showcase</li>
        <li>About Us</li>
        <li>Case Studies</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="nav-btns">
        <button className="login-btn">Login</button>
        <button className="demo-btn">Get a demo</button>
      </div>

    </header>
  );
}

export default Navbar;