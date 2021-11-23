import "./HeaderPage.scss";
import barIcon from "../../assets/bar-icon.svg";
import barIconBlack from "../../assets/bar-icon-black.svg";
import { Link } from "react-router-dom";

export default function HeaderPage(props) {
  console.log(props.iconLocation);
  return (
    <header className="header">
      <h2
        className={`header__title ${
          props.iconLocation === "left" ? "header__title--left" : ""
        }`}
      >
        {props.text}
      </h2>
      {props.iconLocation === "left" ? (
        <Link to="/">
          <img
            src={props.icon}
            alt=""
            className={`header__wave-icon ${
              props.iconLocation === "left" ? "header__wave-icon--left" : ""
            }`}
          />
        </Link>
      ) : (
        <img
          src={props.icon}
          alt=""
          className={`header__wave-icon ${
            props.iconLocation === "left" ? "header__wave-icon--left" : ""
          }`}
        />
      )}
      {/* <img
        src={props.icon}
        alt=""
        className={`header__wave-icon ${
          props.iconLocation === "left" ? "header__wave-icon--left" : ""
        }`}
      /> */}
      <img
        src={props.iconLocation === "left" ? barIconBlack : barIcon}
        alt=""
        className={`header__nav-icon  ${
          props.iconLocation === "left" ? "header__nav-icon--left" : ""
        }`}
      />
    </header>
  );
}
