import React from 'react';
import logo from './logo.svg';
import './App.css';
import DishoomImage from "./DishoomImage.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Cooking Books: Reviewing recipes from cookbooks
      </header>

<div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div 
        style={{
            height: 250, width: 250, borderStyle: 'solid',
            borderWidth: 2, borderColor: 'navy', marginTop: 15, marginBottom: 5}}>
              <img height={250} width={250} src={DishoomImage} alt="Image"/>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
      <a
          className="App-link"
          href="https://www.dishoom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dishoom
        </a>
        <a
          className="App-link"
          href="https://store.dishoom.com/products/dishoom-cookery-book"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookbook link
        </a>
        </div>
        </div>
    </div>
  );
}

export default App;
