import React, {useState} from "react";
import KittenCard from "./KittenCard";
import ColorFilter from "./ColorFilter";

function FavoriteKittens({favorites, onRemove}) {
    const [selectedColor, setSelectedColor] = useState("All");

    const handleColorChange = (color) => {
        setSelectedColor(color);
    }

    const displayedKittens = selectedColor === "All"
        ? favorites
        : favorites.filter(kitten => kitten.color === selectedColor);

    return (
        <div className="top-of-container">
            <h1 className="fave-header">Favorite Kittens</h1>
            <ColorFilter 
                currentColor={selectedColor} 
                onColorChange={handleColorChange}/>
            <div className="fave-kitten-container">
                {displayedKittens.map(kitten => (
                    <div className="fave-kitten-wrapper">
                        <KittenCard key={kitten.id} kitten={kitten} />
                        <button 
                            className="remove" 
                            onClick={() => onRemove(kitten.id)}
                        >
                            ✖
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FavoriteKittens;