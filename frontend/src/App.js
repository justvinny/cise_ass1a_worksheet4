import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

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
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/SEPractice" element={<SEPractice />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            {/* All other paths should redirect to NotFoundPage */}
            <Route exact path="404" element={<NotFoundPage />} />
            <Route path="/*" element={<Navigate to="404" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
