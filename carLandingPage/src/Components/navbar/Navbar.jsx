import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <h1>EV-olution</h1>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Cars</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
