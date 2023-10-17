import React from "react";
import KittenCard from "./KittenCard";

function KittenForm({kittens}) {
    return (
        <form className="kitten-form">
            <label className="form-label">
                Current Kitten Collection
            </label>
            <ul>
                {kittens.map((kitten) => {
                    return (
                        <div key={kitten.id}>
                            <KittenCard kitten={kitten} />
                            <input 
                                className="submit" 
                                type="submit" 
                                value="Add to Favorites"
                            />   
                        </div>
                    )
                }
            )}
            </ul>
            
        </form>
    )
}

export default KittenForm;
