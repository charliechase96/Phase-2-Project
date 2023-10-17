import React, {useId} from "react";

function AddNewKitten() {
    function handleSubmit() {
        console.log("Hi")
    }
    
    return (
        <div className="new-kitten-form">
            <h2 className="form-title">
                Add New Kitten to Collection
            </h2>
            <form onSubmit={handleSubmit}>
                <label className="label-text">
                    Color
                    <input type="text" placeholder="Kitten Fur Color..."/>
                </label>
            
                <label className="label-text">
                    Image Url
                    <input type="text" placeholder="Kitten Image URL..."/>
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