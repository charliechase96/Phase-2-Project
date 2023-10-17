import './App.css';
import NavBar from "./NavBar";
import Home from './Home';
import React, {useState} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoriteKittens from './FavoriteKittens';
import AddNewKitten from './AddNewKitten';

function App() {
  const [favoriteKittens, setFavoriteKittens] = useState([]);
  const [kittens, setKittens] = useState([]);

  const handleRemove = (idToRemove) => {
    setFavoriteKittens(prevFavorites => prevFavorites.filter(kitten => kitten.id !== idToRemove));
  }

  const handleAddKitten = (newKitten) => {
    setKittens(prevKittens => [...prevKittens, newKitten]);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route 
              path="/favorites" 
              element={
                <FavoriteKittens 
                  favorites={favoriteKittens}
                  onRemove={handleRemove} />} 
            />
            <Route 
              path="/add-new-kitten" 
              element={<AddNewKitten onAdd={handleAddKitten}/>} 
            />
            <Route 
              path="/" 
              element={<Home setFavorites={setFavoriteKittens} />} 
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
