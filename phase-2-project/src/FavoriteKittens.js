import React, {useState} from "react";
import KittenCard from "./KittenCard";
import ColorFilter from "./ColorFilter";

function FavoriteKittens({favorites}) {
    const [selectedColor, setSelectedColor] = useState("All");

    const handleColorChange = (color) => {
        setSelectedColor(color);
    }

    return (
        <div className="top-of-container">
            <h1 className="fave-header">Favorite Kittens</h1>
            <ColorFilter 
                currentColor={selectedColor} 
                onColorChange={handleColorChange}/>
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