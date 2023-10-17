import './App.css';
import NavBar from "./NavBar";
import Home from './Home';
import React, {useState} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoriteKittens from './FavoriteKittens';
import AddNewKitten from './AddNewKitten';

function App() {
  const [favoriteKittens, setFavoriteKittens] = useState([]);

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
                  favorites={favoriteKittens} />} 
            />
            <Route 
              path="/add-new-kitten" 
              element={<AddNewKitten />} 
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
