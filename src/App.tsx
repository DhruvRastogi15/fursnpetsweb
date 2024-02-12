import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/PageNotFound/PageNotFound"
  
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <div style={{}}>
        {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}
  
export default App;