import logo from "../../assets/logo.svg";
import eye from "../../assets/eye button.svg";
import { headerOptions } from "./data";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />

      <div className="option-box">
        {headerOptions.map((option) => (
          <div className="option" key={option}>
            {option}
          </div>
        ))}
      </div>

      <img src={eye} alt="logo" />
    </div>
  );
};

export default Header;
