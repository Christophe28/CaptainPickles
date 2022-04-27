import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route} from "react-router";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact to path="/CaptainPickles" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
