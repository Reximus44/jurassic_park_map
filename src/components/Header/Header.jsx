import "./Header.css";
import logo from "../../assets/jurassic-park-logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="jurrasic park logo" />
      <p className="header__title">WELCOME TO JURASSIC PARK</p>
      <p className="header__tour-guide">TAKE A TOUR</p>
    </header>
  );
}

export default Header;
