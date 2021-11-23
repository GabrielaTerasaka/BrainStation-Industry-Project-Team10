import "./PointsSection.scss";
import safeIcon from "../../assets/safe-icon.svg";
import savingsIcon from "../../assets/savings-icon.svg";
import progress from "../../assets/progress-bar.svg";

export default function PointsSection() {
  return (
    <div className="points">
      <div className="points__wrapper">
        <p className="points__button">
          <span className="points__number">200</span>GM points
        </p>
        <p className="points__rewards">GM Rewards Options</p>
      </div>
      <img src={progress} alt="" className="points__img-progress" />
      <div className="points__wrapper points__wrapper--bottom">
        <div className="icon-text">
          <img src={safeIcon} alt="" className="icon-text__icon" />
          <p className="icon-text__content">
            You are in the <span className="icon-text__highlight">Top 10%</span>{" "}
            of Safe Drivers
          </p>
        </div>
        <div className="icon-text">
          <img src={savingsIcon} alt="" className="icon-text__icon" />
          <p className="icon-text__content">
            You have saved <span className="icon-text__highlight">$168</span> in
            gas this month
          </p>
        </div>
      </div>
    </div>
  );
}
