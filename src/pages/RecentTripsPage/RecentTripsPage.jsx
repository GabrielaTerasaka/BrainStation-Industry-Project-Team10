import HeaderPage from "../../components/HeaderPage";
import "./RecentTripsPage.scss";
import logo from "../../assets/arrow_back_ios_black_24dp.svg";
import yoga from "../../assets/yoga.svg";
import dinner from "../../assets/dinner.svg";
import office from "../../assets/office.svg";
import home from "../../assets/home.svg";
import { Link } from "react-router-dom";
import FooterPage from "../../components/FooterPage/FooterPage";

const dataArr = [
  {
    date: "November 18, 2021",
    location: "Home",
    address: "2008 Rosser Avenue, Burnaby",
    time: "50 mins",
    imageSrc: home
  },
  {
    date: "November 18, 2021",
    location: "Dinner - Ask for Luigi",
    address: "305 Alexander St, Vancouver",
    time: "20 mins",
    imageSrc: dinner
  },
  {
    date: "November 18, 2021",
    location: "Yoga - Samperviva",
    address: "1985 W Broadway, Vancouver",
    time: "20 mins",
    imageSrc: yoga
  },
  {
    date: "November 18, 2021",
    location: "Office",
    address: "545 Robson St, Vancouver",
    time: "50 mins",
    imageSrc: office
  }
];

export default function RecentTripsSection() {
  return (
    <>
      <div className="recent-trips">
        <HeaderPage icon={logo} text={"Recent Trips"} iconLocation={"left"} />
        <FooterPage active={"navigate"} />
      </div>
      <div className="recent-trips__buttons-wrapper">
        <p className="recent-trips__button recent-trips__button--active">
          Today
        </p>
        <p className="recent-trips__button">This Week</p>
        <p className="recent-trips__button">This Month</p>
      </div>
      <div className="cards-section">
        {dataArr.map((data, index) => {
          return (
            <>
              {index === 0 ? (
                <Link to="/selected">
                  <article className="card">
                    <img src={data.imageSrc} alt="" className="card__img" />
                    <div className="card__content-box">
                      <p className="card__text">{data.date}</p>
                      <h3 className="card__location">{data.location}</h3>
                      <p className="card__text">{data.address}</p>
                      <p className="card__text">{data.time}</p>
                    </div>
                  </article>
                </Link>
              ) : (
                <article className="card">
                  <img src={data.imageSrc} alt="" className="card__img" />
                  <div className="card__content-box">
                    <p className="card__text">{data.date}</p>
                    <h3 className="card__location">{data.location}</h3>
                    <p className="card__text">{data.address}</p>
                    <p className="card__text">{data.time}</p>
                  </div>
                </article>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
