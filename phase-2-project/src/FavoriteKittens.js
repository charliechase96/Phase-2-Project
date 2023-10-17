import React from "react";
import KittenCard from "./KittenCard";

function FavoriteKittens({favorites}) {
    return (
        <div className="top-of-container">
            <h1 className="fave-header">Favorite Kittens</h1>
            <div className="fave-kitten-container">
                {favorites.map(kitten => (
                    <div className="fave-kitten-wrapper">
                        <KittenCard key={kitten.id} kitten={kitten} />
                        <button className="remove">✖</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FavoriteKittens;