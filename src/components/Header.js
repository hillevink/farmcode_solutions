import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>FarmCode Solutions</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/history">Our History</Link></li>
          <li><Link to="/team">Meet Our Team</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
