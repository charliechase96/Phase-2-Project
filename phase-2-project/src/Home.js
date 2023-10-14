import React, {useState, useEffect} from "react";

function Home() {
    const [kittens, setKittens] = useState([]);

    useEffect(() => {
        fetch("https://localhost:3000/kittens")
        .then(response => response.json())
        .then(data => setKittens(data))
      }, [])

    return (
        <div className="kitten-gallery">
            {kittens.map((kitten) => (
                <div key={kitten.id} className="kitten-card">
                    <img src={kitten.image} alt={`Kitten ${kitten.id}`} />
                </div>
            ))}
        </div>
    )
}

export default Home;