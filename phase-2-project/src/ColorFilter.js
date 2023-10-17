import React from "react";

function ColorFilter({currentColor, onColorChange}) {
    const colors = ["All","Orange", "White", "Black", "Tuxedo", "Gray"];

    const handleColorClick = (color) => {
        onColorChange(color);
      };


    return (
        <div className="color-filters">
        <h5>Color filters</h5>
        {colors.map((color) => (
            <button 
                key={color}
                className={currentColor === color ? "selected" : "not-selected"}
                onClick={() => handleColorClick(color)}>
                    {color}
            </button>
        ))}
    </div>
    )
}

export default ColorFilter;