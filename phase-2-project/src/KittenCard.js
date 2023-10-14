import React from "react";

function KittenCard({kittens}) {
    return (kittens.map((kitten) => ( 
                <div key={kitten.id} className="kitten-card">
                    <button key={kitten.id}>♡</button>
                    <img src={kitten.image} key={kitten.id} alt={`Kitten ${kitten.id}`}/>
                </div>
            ))
    )
}

export default KittenCard;