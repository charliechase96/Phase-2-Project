import React, {useEffect} from "react";
import KittenCard from "./KittenCard";

function Home({kittens, setKittens}) {

    useEffect(() => {
        fetch("http://localhost:3000/kittens")
        .then(response => response.json())
        .then(data => setKittens(data))
      }, [])

    return (
        <KittenCard kittens={kittens} />
    )
}

export default Home;