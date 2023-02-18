import React from "react";

function Buttons({title, handleClick}) {
    return (
        <button className="header__btn" onClick={handleClick}>
            {title}
        </button>
    )
};

export default Buttons;