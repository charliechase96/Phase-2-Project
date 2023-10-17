import React from "react";

function KittenCard({kittens}) {
    return (kittens.map((kitten) => ( 
                <div key={kitten.id} className="kitten-card">
                    <div>
                        <img src={kitten.image} key={kitten.id} alt={`Kitten ${kitten.id}`}/>
                    </div>
                    <div>
                        <button key={kitten.id}>♡</button>
                    </div>
                </div>
            ))
    )
}

export default KittenCard;