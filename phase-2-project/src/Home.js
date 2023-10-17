import React, {useEffect, useState} from "react";
import KittenForm from "./KittenForm";

function Home() {
    const [kittens, setKittens] = useState([]);
    const kittenData = "http://localhost:3000/kittens";

    useEffect(() => {
        fetch(kittenData)
        .then(response => response.json())
        .then(data => setKittens(data))
      }, [setKittens])

    return (
        <KittenForm kittens={kittens} />
    )
}

export default Home;