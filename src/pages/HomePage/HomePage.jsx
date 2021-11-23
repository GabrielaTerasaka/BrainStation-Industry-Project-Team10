import HeaderPage from "../../components/HeaderPage";
import PointsSection from "../../components/PointsSection";
import "./HomePage.scss";
import logo from "../../assets/wave-icon.svg";
// import truck from "../../assets/truck.svg";

import BtnFront from "../../components/BtnFront/BtnFront";
import FooterPage from "../../components/FooterPage/FooterPage";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="homepage">
        <HeaderPage icon={logo} text={"Hi Samantha"} />

        <PointsSection />

        <div className="BtnSet">
          <Link to="/recenttrips" className="homepage__link">
            <BtnFront text="Recent Trips" className="button-top" />
          </Link>
          <BtnFront text="Emission Impact" />
          <BtnFront text="New EV Driver Guide" />
        </div>
        <FooterPage active={"home"} />
      </div>
    </>
  );
}
