import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="nav-item">About</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="nav-item">Contact Us</li>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <li className="nav-item">Cart</li>
          </Link>
        </ul>
        <button className="login-btn">Login</button>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Header;
