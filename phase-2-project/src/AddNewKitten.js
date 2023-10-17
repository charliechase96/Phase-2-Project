import React, {useId, useEffect, useState} from "react";

function AddNewKitten({onAdd}) {
    const [newKittenData, setNewKittenData] = useState({
        id: useId(),
        color: "",
        image: ""
    });

    function renderNewKitten(newKittenData) {
        newKittenData.map((kitten) => {
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
        } )
    }

    function handleSubmit(event) {
        event.preventDefault()
        const kittenObj = {
            "id": useId(),
            "color": event.target.color.value,
            "image": event.target.image.value
    }
    useEffect(() => {
        fetch("http://localhost:3000/kittens", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(kittenObj)
          })
          .then(response => response.json())
          .then(data => renderNewKitten(data))
    })
    return (
        <form className="new-kitten-form">
            <label>

            </label>
        </form>
    )
}
}

export default AddNewKitten;