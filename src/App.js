import "./App.css";
import SongOverview from "./SongOverview";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Navbar />
        <Switch>
          <Route path="/" component={SongOverview} exact />
          <Route path="/AboutUs.js" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
