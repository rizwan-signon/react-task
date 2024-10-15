import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import "./styles/global.style.scss";
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
