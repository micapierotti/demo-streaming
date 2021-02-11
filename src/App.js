import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Series from "./components/Series";
import SelectedSerie from "./components/SelectedSerie";
import Movies from "./components/Movies";
import SelectedMovie from "./components/SelectedMovie";
import Home from "./components/Home";

function App() {
  return (
    <div className="p-0 container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/series/:indexId" children={<SelectedSerie />} />
          <Route exact path="/series">
            <Series />
          </Route>
          <Route path="/movies/:indexId" children={<SelectedMovie />} />
          <Route exact path="/movies">
            <Movies />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
