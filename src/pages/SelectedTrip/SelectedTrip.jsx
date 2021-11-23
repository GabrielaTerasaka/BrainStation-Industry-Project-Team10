import FooterPage from "../../components/FooterPage/FooterPage";
import map from "../../assets/map-image.svg";
import location from "../../assets/location.svg";
import logo from "../../assets/arrow_back_ios_black_24dp.svg";
import idleFree from "../../assets/idle-free.svg";
import brakeSafe from "../../assets/brake-safe.svg";
import safeLeft from "../../assets/safe-left.svg";
import "./SelectedTrip.scss";
import HeaderPage from "../../components/HeaderPage";
import React from "react";

const rewardsArr = [
  {
    imgSrc: idleFree,
    title: "Idle-Free",
    text: "Prevented idling in parking lot",
    points: "10 pts"
  },
  {
    imgSrc: brakeSafe,
    title: "Brake Safe",
    text: "No sudden brakes for a week",
    points: "40 pts"
  },
  {
    imgSrc: safeLeft,
    title: "Safety Lefty",
    text: "No sudden left turns for 3 months",
    points: "150 pts"
  }
];

export default class SelectedTrip extends React.Component {
  // export default function SelectedTrip() {

  state = {
    isTripDetails: true
  };
  render() {
    return (
      <div className="selectedTrip">
        <HeaderPage icon={logo} text={""} iconLocation={"left"} />
        <div>
          <img className="selectedTrip__map--image" src={map} />
        </div>
        <div className="selectedTrip__anchor">
          <a
            className={`${
              this.state.isTripDetails === true
                ? "selectedTrip__anchor--link1"
                : "selectedTrip__anchor--link2"
            }`}
            href="#"
            onClick={() => {
              this.setState({ isTripDetails: true });
            }}
          >
            Trip Details
          </a>
          <a
            className={`${
              this.state.isTripDetails === true
                ? "selectedTrip__anchor--link2"
                : "selectedTrip__anchor--link1"
            }`}
            href="#"
            onClick={() => {
              this.setState({ isTripDetails: false });
            }}
          >
            Rewards Earned
          </a>
        </div>
        {this.state.isTripDetails === true ? (
          <div className="selectedTrip__div">
            <img className="selectedTrip__location--image" src={location} />
            <div className="selectedTrip__location--para">
              <div className="selectedTrip__div--para-start">
                <h2 className="h2">
                  Start<span className="span">8:55PM</span>
                </h2>
                <p className="p">Dinner - Ask for Luigi</p>
                <p className="p">305 Alexander St, Vancouver, BC</p>
              </div>
              <div className="selectedTrip__div--para-charging">
                <h2 className="h2">
                  EV Charging Statio<span className="span"></span>
                </h2>
                <p className="p">SemaConnect Charging Station</p>
                <p className="p">180 Keefer St, Vancouver, BC</p>
              </div>
              <div className="selectedTrip__div--para-route">
                <h2 className="h2">
                  New Route Suggestion
                  <span className="span">(Save 10 mins)</span>
                </h2>
                <p className="p">Suggestion: Drive on E Hastings St.</p>
                <p className="p"> instead of E Broadway</p>
              </div>
              <div className="selectedTrip__div--para-end">
                <h2 className="h2">
                  End<span className="span">9:45PM</span>
                </h2>
                <p className="p">Home</p>
                <p className="p">2008 Rosser Avenue, Burnaby, BC</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rewards">
            {rewardsArr.map((reward) => {
              return (
                <article className="rewards-card">
                  <img
                    src={reward.imgSrc}
                    alt=""
                    className="rewards-card__img"
                  />
                  <div className="rewards-card__box">
                    <h3 className="rewards-card__title">{reward.title}</h3>
                    <p className="rewards-card__content">{reward.text}</p>
                  </div>
                  <p className="rewards-card__points">{reward.points}</p>
                </article>
              );
            })}
            <p className="rewards__points">
              TOTAL <span className="rewards__points--highlight">200 pts</span>
            </p>
          </div>
        )}

        <FooterPage active={"navigate"} />
      </div>
    );
  }
}
