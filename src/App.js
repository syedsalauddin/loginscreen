import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./components/routings/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route component={Routes} />
          </Switch>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
