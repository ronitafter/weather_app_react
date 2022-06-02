import "./App.css";
import react from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=735462ecb12cc75157889cb125f090a4";
  // const api_key = "apikey=yt1dtI2ZeeNj6j2D7HNnVAXe9fhmj0UU&q=";
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
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
