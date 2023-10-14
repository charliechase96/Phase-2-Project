import './App.css';
import NavBar from "./NavBar";
import Home from './Home';
import { useState } from 'react';

function App() {
  const [kittens, setKittens] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home kittens={kittens} setKittens={setKittens}/>
      </header>
    </div>
  );
}

export default App;
