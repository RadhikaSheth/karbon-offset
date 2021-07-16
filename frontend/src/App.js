import logo from './logo.svg';
import './App.css';
import Billing from './Billing';
import CarbonProfile from './CarbonProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user" exact component={CarbonProfile} />
          <Route path="/" exact component={Billing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
