import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import { BsArrowDown, BsTwitch, BsTwitter, BsInstagram } from "react-icons/bs";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="download-buttons">
          <button>
            <BiLogoApple size={50} color="var(--primary-green)" />
            <p>App store</p>
          </button>
          <button>
            <BiLogoPlayStore size={50} color="var(--primary-green)" />
            <p>Google Play</p>
          </button>
        </div>

        <BsArrowDown
          className="arrow-down"
          size={40}
          color="var(--primary-green)"
        />
      </div>

      <div className="right">
        <p className="temp-data">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>

        <div className="socials">
          <BsTwitch className="social-icon" size={35} color="white" />
          <BsTwitter className="social-icon" size={35} color="white" />
          <BsInstagram className="social-icon" size={35} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
