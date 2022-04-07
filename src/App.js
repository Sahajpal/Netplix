import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
      {!user ? (
        <Routes>
          <Route exact path="/" element={<LoginScreen />}>          
          </Route>
        </Routes>
      ): (<Routes>
          <Route exact path="/" element={<HomeScreen />}>
          </Route>
        </Routes>)}
      </Router>
    </div>
  );
}

export default App;
