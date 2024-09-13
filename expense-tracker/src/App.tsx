import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Sobre from "./pages/Sobre";
import { AppProvider } from "./contexts/AppContext";


function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
