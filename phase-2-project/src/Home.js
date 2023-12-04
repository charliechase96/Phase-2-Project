import React, {useEffect, useState} from "react";
import KittenForm from "./KittenForm";

function Home({setFavorites, kittens, setKittens}) {
    useEffect(() => {
        fetch("http://localhost:3000/kittens")
        .then(response => response.json())
        .then(data => setKittens(data))
      }, [kittens])

    return (
        <KittenForm kittens={kittens} setFavorites={setFavorites} />
    )
}

export default Home;