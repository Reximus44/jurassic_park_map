import "./Header.css";
import logo from "../../assets/jurassic-park-logo.svg";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Link } from "react-router-dom";

// Renderes page title, logo, and the weather card component

function Header({ weatherData }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="jurrasic park logo" />
      </Link>
      <p className="header__title">WELCOME TO JURASSIC PARK</p>
      <WeatherCard weatherData={weatherData} />
      <Link to="/park-tour" className="header__tour-link">
        <p className="header__tour-guide">TAKE A TOUR</p>
      </Link>
    </header>
  );
}

export default Header;
