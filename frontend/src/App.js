import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SEPractice">Select the Practice</Link>
          </li>
          <li>
            <Link to="/SubmitArticle">Submit an Article</Link>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/SEPractice"><SEPractice /></Route>
            <Route path="/SubmitArticle"><SubmitArticle /></Route>
            <Route path="/NotFoundPage"><NotFoundPage /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
