const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h2 className="badge bg-dark text-light fs-5">NewMag</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => setCategory("science")}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                href="#"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                href="#"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
