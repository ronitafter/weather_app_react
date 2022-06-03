import "./App.css";
import react from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=735462ecb12cc75157889cb125f090a4";
  return (
    <div className="App">
      <h1> Weather App </h1>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>25</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>25</p>
          </div>
          <div className="humidity">
            <p>50%</p>
          </div>
          <div className="wind">
            <p>18 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
