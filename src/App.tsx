import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './Tile';
import CookBooksList from './CookBooks';

function App() {
  const cookBooks = CookBooksList();
  return (
    <div className="App">
      <header className="App-header">
        Cooking Books: Reviewing recipes from cookbooks
      </header>

      <div className="grid">
        {cookBooks.map((book, index) => {
          return <Tile key={"cookbook-tile-"+index} imgFilePath={book.imgFilePath} restaurantLink={book.restaurantLink} bookLink={book.bookLink}/>})}
      </div>
    </div>
  );
}

export default App;
