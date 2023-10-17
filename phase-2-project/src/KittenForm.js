import React from "react";
import KittenCard from "./KittenCard";

function KittenForm({kittens, setFavorites}) {

    function handleFavorite(kitten) {
        setFavorites(prevFavorites => {
            const existingKitten = prevFavorites.find(favKitten => favKitten.id === kitten.id);

            if (!existingKitten) {
                return [...prevFavorites, kitten];
            }

            return prevFavorites;
        });
    }

    return (
        <div 
            className="kitten-form"
        >
            <label className="form-label">
                Current Kitten Collection
            </label>
            <ul>
                {kittens.map((kitten) => {
                    return (
                        <div 
                            className="kitten-wrapper" 
                            key={kitten.id}>
                                <KittenCard kitten={kitten} />
                                <button 
                                    className="submit" 
                                    onClick={() => handleFavorite(kitten)}
                                >
                                    Add to Favorites
                                </button>
                        </div>
                    )
                }
            )}
            </ul>
            
        </div>
    )
}

export default KittenForm;
