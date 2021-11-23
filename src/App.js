import "./styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RecentTripsPage from "./pages/RecentTripsPage";
import SelectedTrip from "./pages/SelectedTrip";

export default function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/selected" exact component={SelectedTrip} />
            <Route path="/recenttrips" component={RecentTripsPage} />
          </Switch>
        </>
      </div>
    </Router>
  );
}
