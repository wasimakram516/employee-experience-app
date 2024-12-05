import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; 

import StartScreen from "./pages/StartScreen";
import Dashboard from "./pages/Dashboard";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
