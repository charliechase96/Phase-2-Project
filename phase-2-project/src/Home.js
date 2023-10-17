import React, {useEffect, useState} from "react";
import KittenForm from "./KittenForm";

function Home({setFavorites}) {
    const [kittens, setKittens] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/kittens")
        .then(response => response.json())
        .then(data => setKittens(data))
      }, [setKittens])

    return (
        <KittenForm kittens={kittens} setFavorites={setFavorites} />
    )
}

export default Home;