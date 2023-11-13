import React, {useState} from "react";

function AddNewKitten() {
    const [color, setColor] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newKitten = {
            color: color,
            image: imageUrl
        };

        fetch("http://localhost:3000/kittens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newKitten),
        });
    }
    
    return (
        <div className="new-kitten-form">
            <h2 className="form-title">
                Add New Kitten to Collection
            </h2>
            <form onSubmit={handleSubmit}>
                    Color
                <label></label>
                    <select
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                        >
                        <option value="Orange">Orange</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Tuxedo">Tuxedo</option>
                        <option value="Gray">Gray</option>
                    </select>
                <label className="label-text">
                    Image Url
                    <input 
                        type="text" 
                        placeholder="Kitten Image URL..."
                        value={imageUrl}
                        onChange={(event) => {
                            setImageUrl(event.target.value)}}
                    />
                </label>
                <input 
                    type="submit" 
                    className="add-new-kitten" 
                    value="Add New Kitten"
                />
            </form>
        </div>
        
    )
}

export default AddNewKitten;