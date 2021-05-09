import React from 'react';
import ReactDOM from 'react-dom';
import Weather from "./Weather";
import './Weather.css';
import reportWebVitals from './reportWebVitals';


function App() {
  return (
    <div className="App">
      <Weather />;
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(

  rootElement
);
