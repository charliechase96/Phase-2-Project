import React from "react";

function KittenCard({kitten}) {
    return (
            <div className="kitten-card">
                <div className="kitten-image">
                    <img 
                        src={kitten.image} 
                        key={kitten.id} 
                        alt={`Kitten ${kitten.id}`}
                    />
                </div>
            </div>
    )
}

export default KittenCard;