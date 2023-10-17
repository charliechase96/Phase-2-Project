import React, {useEffect} from "react";
import KittenCard from "./KittenCard";

function Home({kittens, setKittens}) {

    const kittenData = "http://localhost:3000/kittens";

    useEffect(() => {
        fetch(kittenData)
        .then(response => response.json())
        .then(data => setKittens(data))
      }, [setKittens])

    return (
        <KittenCard kittens={kittens} />
    )
}

export default Home;