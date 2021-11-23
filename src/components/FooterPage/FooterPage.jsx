import "./FooterPage.scss";
import homeIcon from "../../assets/home-icon-white.svg";
import homeIconGrey from "../../assets/home-icon-grey.svg";
import navIcon from "../../assets/nav-icon-white.svg";
import navIconGrey from "../../assets/nav-icon-grey.svg";
import chargeIcon from "../../assets/charge-icon-grey.svg";
import rewardIcon from "../../assets/reward-icon-grey.svg";
import { Link } from "react-router-dom";

export default function FooterPage(props) {
  const active = props.active;
  return (
    <footer className="footer">
      <Link to="/" className="footer__box">
        <img
          src={active === "home" ? homeIcon : homeIconGrey}
          alt=""
          className="footer__icon"
        />
        <p
          className={`footer__text ${
            active === "home" ? "footer__text--active" : ""
          }`}
        >
          Home
        </p>
      </Link>
      <Link to="/recenttrips" className="footer__box">
        <img
          src={active === "home" ? navIconGrey : navIcon}
          alt=""
          className="footer__icon"
        />
        <p
          className={`footer__text ${
            active === "home" ? "" : "footer__text--active"
          }`}
        >
          Navigate
        </p>
      </Link>
      <div className="footer__box">
        <img src={chargeIcon} alt="" className="footer__icon" />
        <p className="footer__text">EV Station</p>
      </div>
      <div className="footer__box">
        <img src={rewardIcon} alt="" className="footer__icon" />
        <p className="footer__text">GM Rewards</p>
      </div>
    </footer>
  );
}
