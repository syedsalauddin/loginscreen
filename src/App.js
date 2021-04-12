import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./components/routings/Routes";

function App() {
  return (
    <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route component={Routes} />
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
